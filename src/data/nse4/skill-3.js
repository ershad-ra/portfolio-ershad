import { Server } from 'lucide-react';

export const skill3 = {
  id: 'nse4-transit-fw',
  title: {
    en: "Skill 3 — Deploying HQ-FW2 (Internal Transit Firewall)",
    fr: "Skill 3 — Déploiement de HQ-FW2 (Pare-feu de Transit Interne)"
  },
  icon: Server,
  sections: [
    {
      heading: "Scope",
      content: [
        "Bring HQ-FW2 online as a transit firewall sitting *behind* HQ-FW1. PC-2 on `internal-2` (10.20.0.0/24) needs to reach the public internet through HQ-FW2 -> HQ-FW1 -> ISP-A. By the end of this skill, HQ-FW2 is fully bootstrapped, has its data plane configured, and a critical **return route** has been added to HQ-FW1 so that reply traffic can find its way back. I also walk through a structured **RAP-driven troubleshooting** scenario."
      ].join('\n')
    },
    {
      heading: "1. Skill Summary",
      content: [
        "This skill is the second deployment of the bootstrap + data-plane sequence I built in Skills 1 and 2, but with two important architectural twists that don't appear in a single-firewall deployment:",
        "",
        "1. **HQ-FW2 is a transit firewall.** Its \"outside\" zone doesn't face the public internet — it faces another firewall (HQ-FW1) on a private segment (`internal-net`, 10.123.0.0/24). The traffic flow is `PC-2 -> HQ-FW2 -> HQ-FW1 -> ISP-A -> internet`.",
        "2. **NAT happens once, on HQ-FW1.** HQ-FW2 forwards traffic with original source IPs intact. This preserves source-IP visibility in HQ-FW1's logs and avoids double-NAT complexity. It also means HQ-FW1 needs a **return route** for `10.20.0.0/24`, otherwise reply packets get default-routed out the WAN with no idea where the original client lives.",
        "",
        "**The configuration sequence:**",
        "• Bootstrap HQ-FW2 (factory reset -> mgmt plane on `port1` = `192.168.100.12`).",
        "• Prep interfaces (remove from default `lan` switch, delete default policy).",
        "• Create zones (`fw2-inside`, `fw2-outside`).",
        "• Assign IPs to `port2` (inside) and `port4` (outside).",
        "• Add default route on HQ-FW2 pointing at HQ-FW1.",
        "• **Add return route on HQ-FW1 for 10.20.0.0/24 -> HQ-FW2.** (The new wrinkle.)",
        "• Author a permissive firewall policy on HQ-FW2 — no NAT.",
        "• Verify HQ-FW1's existing Central SNAT and policy still cover the new traffic.",
        "• Test from PC-2.",
        "• Run a RAP troubleshooting walkthrough on a deliberately broken topology."
      ].join('\n')
    },
    {
      heading: "2. Lab Topology — HQ-FW2 in Context",
      content: [
        "```text",
        "   PC-2                    HQ-FW2                   HQ-FW1                  ISP-A             Internet",
        " 10.20.0.102              .12 / .12                .11 / .11               23.1.2.1",
        "       │                  ┌───────┐                ┌───────┐               ┌───────┐",
        "       │  internal-2      │       │  internal-net  │       │     WAN-1     │       │",
        "       └─────────────────►│ port2 │───────────────►│ port4 │───────────────►│       │──► (host NAT) ──► internet",
        "                          │ port4 │                │ port2 │               │ VyOS  │",
        "                          │  10.123.0.12           │  23.1.2.11            │       │",
        "                          └───────┘                └───────┘               └───────┘",
        "                          (transit)               (NAT happens here)",
        "```",
        "",
        "**Asset Interfaces & Networking:**",
        "• **HQ-FW2 port1**: Management | `192.168.100.12/24` | Connected to `mgmt-net`",
        "• **HQ-FW2 port2**: Inside (toward PC-2) | `10.20.0.12/24` | Connected to `internal-2`",
        "• **HQ-FW2 port4**: Outside (toward HQ-FW1) | `10.123.0.12/24` | Connected to `internal-net`",
        "• **HQ-FW1 port4**: Inside (toward HQ-FW2) | `10.123.0.11/24` | Connected to `internal-net`",
        "• **HQ-FW1 port2**: WAN1 (toward ISP-A) | `23.1.2.11/24` | Connected to `WAN-1`",
        "• **PC-2**: LAN client | `10.20.0.102/24` (GW `10.20.0.12`) | Connected to `internal-2`",
        "• **VyOS-Switch**: L2 forwarding | `internal-net`"
      ].join('\n')
    },
    {
      heading: "3. The Game Plan — Architectural Decisions",
      content: [
        "**3.1 Why HQ-FW2 Doesn't NAT**",
        "HQ-FW1 already has a Central SNAT rule configured in Skill 2. If HQ-FW2 translated the traffic as well, it would create **double-NAT**. Functionally it works, but operationally it's bad: HQ-FW1's forward-traffic log would show every single inside-host's traffic with the same source IP (`10.123.0.12`), making per-user attribution impossible. **Single NAT at the egress edge is the design pattern I follow.**",
        "",
        "**3.2 Why HQ-FW1 Needs a Return Route**",
        "When a forward packet from PC-2 reaches HQ-FW1, the path is fine. The reply from the internet comes back to HQ-FW1's WAN1 IP. HQ-FW1 reverses the SNAT and now has a packet destined for `10.20.0.102`. Without an explicit route, HQ-FW1 has no idea that `10.20.0.0/24` lives behind HQ-FW2 — so it sends the reply out its **default route** instead. The traffic blackholes. **The R in RAP isn't just 'add a default route' — it's 'add every route the firewall needs in both directions.'**",
        "",
        "**3.3 Where Inspection and Logging Live**",
        "• **Original source IP (`10.20.0.102`)**: Visible on both HQ-FW2 and HQ-FW1.",
        "• **Translated source IP (`23.1.2.11`)**: Visible on HQ-FW1 (in the post-NAT field).",
        "• **Per-user accountability**: Best at HQ-FW2 (closest to source).",
        "Best practice: apply Security Profiles on HQ-FW2 for user-level visibility, and treat HQ-FW1 as the egress NAT."
      ].join('\n')
    },
    {
      heading: "4. Step 1 — Bootstrap HQ-FW2",
      content: [
        "The bootstrap procedure is identical to Skill 1, with three differences:",
        "• **Mgmt IP**: `192.168.100.12/24`",
        "• **Mgmt-plane default route**: Skipped. The data-plane default route will serve both.",
        "• **Hostname**: `HQ-FW2`",
        "",
        "**Lab Hygiene Settings (System -> Settings)**",
        "• **Host name**: `HQ-FW2`",
        "• **Idle timeout**: `60` minutes",
        "• **Central SNAT**: `Enable` (kept consistent with HQ-FW1)",
        "• **NGFW Mode**: `Profile-based`",
        "",
        "**CLI Configuration:**",
        "```bash",
        "config system global",
        "    set hostname \"HQ-FW2\"",
        "    set admintimeout 60",
        "end",
        "",
        "config system settings",
        "    set central-nat enable",
        "    set ngfw-mode profile-based",
        "end",
        "```",
        "*Heads up: Enabling Central SNAT before adding a default route may temporarily trigger a 'FortiGuard servers unreachable' warning.*"
      ].join('\n')
    },
    {
      heading: "5. Step 2 — Prep Interfaces (Cleanup)",
      content: [
        "Remove `port2` and `port4` from the default `lan` software-switch, and delete the default factory firewall policy.",
        "",
        "**CLI condensed version:**",
        "```bash",
        "config system switch-interface",
        "    edit \"lan\"",
        "        set member \"port5\" \"port6\"",
        "    next",
        "end",
        "",
        "config firewall policy",
        "    delete <id-of-default-policy>",
        "end",
        "```"
      ].join('\n')
    },
    {
      heading: "6. Step 3 — Create Zones",
      content: [
        "**Zones to create:**",
        "• `fw2-inside`: Interface members = `port2` (Faces PC-2)",
        "• `fw2-outside`: Interface members = `port4` (Faces HQ-FW1)",
        "",
        "*Naming convention:* I prefix zone names with the firewall identifier (`fw2-inside`) because in a multi-firewall lab, seeing `fw2-inside` in a zone selector instantly tells me which device I'm on.",
        "",
        "**CLI:**",
        "```bash",
        "config system zone",
        "    edit \"fw2-inside\"",
        "        set interface \"port2\"",
        "    next",
        "    edit \"fw2-outside\"",
        "        set interface \"port4\"",
        "    next",
        "end",
        "```"
      ].join('\n')
    },
    {
      heading: "7. Step 4 — Configure IP Addresses on Data-Plane Interfaces",
      content: [
        "**7.1 port2 — Inside (toward PC-2)**",
        "• **Alias**: `LAN-10.20` | **Role**: `LAN`",
        "• **IP**: `10.20.0.12/24` | **Admin Access**: `PING`",
        "```bash",
        "config system interface",
        "    edit \"port2\"",
        "        set alias \"LAN-10.20\"",
        "        set role lan",
        "        set ip 10.20.0.12 255.255.255.0",
        "        set allowaccess ping",
        "    next",
        "end",
        "```",
        "",
        "**7.2 port4 — Outside (toward HQ-FW1)**",
        "• **Alias**: `Transit-10.123` | **Role**: `LAN`",
        "• **IP**: `10.123.0.12/24` | **Admin Access**: `PING`",
        "*Why role LAN?* This interface faces a private segment between two firewalls under my own administration. `LAN` is the correct role for inter-firewall transit links.",
        "```bash",
        "config system interface",
        "    edit \"port4\"",
        "        set alias \"Transit-10.123\"",
        "        set role lan",
        "        set ip 10.123.0.12 255.255.255.0",
        "        set allowaccess ping",
        "    next",
        "end",
        "```",
        "",
        "**7.3 Connectivity sanity check**",
        "Run `execute ping 10.123.0.11` from HQ-FW2 to confirm L2/L3 reachability to HQ-FW1."
      ].join('\n')
    },
    {
      heading: "8. Step 5 — Default Route on HQ-FW2",
      content: [
        "HQ-FW2 needs to know how to reach everything outside its directly-connected networks. The default route points at HQ-FW1's `port4` (`10.123.0.11`).",
        "",
        "**GUI Setup:**",
        "Network -> Static Routes -> Create New -> Dest: `0.0.0.0/0`, Gateway: `10.123.0.11`, Interface: `port4`",
        "",
        "**CLI Setup:**",
        "```bash",
        "config router static",
        "    edit 0",
        "        set dst 0.0.0.0 0.0.0.0",
        "        set gateway 10.123.0.11",
        "        set device \"port4\"",
        "    next",
        "end",
        "```",
        "",
        "**Verify:**",
        "Run `get router info routing-table all` and `execute ping 8.8.8.8` to confirm HQ-FW2 can egress."
      ].join('\n')
    },
    {
      heading: "9. Step 6 — Return Route on HQ-FW1 (The Critical Step)",
      content: [
        "This is the step that distinguishes a working transit deployment from a broken one. Without it, reply traffic from the internet gets default-routed back out the WAN.",
        "",
        "**GUI on HQ-FW1:**",
        "Network -> Static Routes -> Create New -> Dest: `10.20.0.0/24`, Gateway: `10.123.0.12`, Interface: `port4`",
        "",
        "**CLI on HQ-FW1:**",
        "```bash",
        "config router static",
        "    edit 0",
        "        set dst 10.20.0.0 255.255.255.0",
        "        set gateway 10.123.0.12",
        "        set device \"port4\"",
        "    next",
        "end",
        "```",
        "",
        "**Verify on HQ-FW1:**",
        "Run `get router info routing-table all` and confirm `S 10.20.0.0/24 [10/0] via 10.123.0.12, port4` is present."
      ].join('\n')
    },
    {
      heading: "10. Step 7 — Firewall Policy on HQ-FW2",
      content: [
        "Since Central SNAT is enabled at the system level, the NAT toggle does not appear in the firewall policy editor. This policy handles permissions only.",
        "",
        "**GUI Setup:**",
        "Name: `fw2-inside-to-outside` | Incoming: `fw2-inside` | Outgoing: `fw2-outside` | Source/Dest: `all` | Service: `ALL` | Action: `ACCEPT` | Log: `All Sessions`",
        "",
        "**CLI Setup:**",
        "```bash",
        "config firewall policy",
        "    edit 0",
        "        set name \"fw2-inside-to-outside\"",
        "        set srcintf \"fw2-inside\"",
        "        set dstintf \"fw2-outside\"",
        "        set srcaddr \"all\"",
        "        set dstaddr \"all\"",
        "        set schedule \"always\"",
        "        set service \"ALL\"",
        "        set action accept",
        "        set logtraffic all",
        "    next",
        "end",
        "```",
        "",
        "**Don't forget the implicit-deny logging:**",
        "```bash",
        "config firewall policy",
        "    edit 0",
        "        set logtraffic all",
        "    next",
        "end",
        "```"
      ].join('\n')
    },
    {
      heading: "11. Step 8 — Verify HQ-FW1 Coverage",
      content: [
        "Before testing, take 30 seconds to confirm HQ-FW1's existing config still covers the new traffic flow:",
        "• Firewall policy `inside -> outside` exists and allows traffic.",
        "• Central SNAT rule `inside -> outside` is active with NAT enabled.",
        "• Return route to `10.20.0.0/24` via `10.123.0.12` is present.",
        "• Default route to `0.0.0.0/0` via `23.1.2.1` is present."
      ].join('\n')
    },
    {
      heading: "12. Step 9 — Test from PC-2",
      content: [
        "**12.1 Sanity check on PC-2**",
        "```bash",
        "ip address         # confirm 10.20.0.102/24",
        "ip route           # confirm default via 10.20.0.12",
        "ping 10.20.0.12    # confirm L2/L3 to HQ-FW2's port2",
        "```",
        "",
        "**12.2 Reach HQ-FW1 (transit confirmation)**",
        "```bash",
        "ping 10.123.0.11",
        "```",
        "Five replies confirms HQ-FW2's default route, policy, and HQ-FW1's port4 ping access are working.",
        "",
        "**12.3 Reach the internet**",
        "```bash",
        "ping 8.8.8.8",
        "ping [www.fortinet.com](https://www.fortinet.com)",
        "```",
        "If this works, the entire transit path (and return route) is functioning.",
        "",
        "**12.4 Confirm visibility on both firewalls**",
        "Check **Log & Report -> Forward Traffic** (Memory) on both firewalls. HQ-FW1 should show the flow with the original source `10.20.0.102` preserved."
      ].join('\n')
    },
    {
      heading: "13. RAP Troubleshooting Walkthrough",
      content: [
        "**13.1 Diagnostic procedure (top-down from the client)**",
        "1. PC-2 -> `ping 10.20.0.12` (HQ-FW2 port2)",
        "2. PC-2 -> `ping 10.123.0.11` (HQ-FW1 port4)",
        "3. From HQ-FW2 CLI -> `execute ping 8.8.8.8`",
        "4. From HQ-FW1 CLI -> `execute ping 8.8.8.8`",
        "5. PC-2 -> `ping 8.8.8.8`",
        "If step 4 succeeds but step 5 fails, it's almost always a missing return route on HQ-FW1 or a NAT problem.",
        "",
        "**13.2 The deliberate-failure walkthrough (Disabled Route)**",
        "A route can exist in configuration but be disabled. Symptoms: HQ-FW1 can ping out, PC-2 cannot. Fix: Verify with `get router info routing-table all` instead of just checking the GUI static routes page. Enable the route if it's grayed out.",
        "",
        "**13.3 Power-tool: diagnose debug flow**",
        "When RAP stepwise doesn't work, trace the packet in the kernel:",
        "```bash",
        "diagnose debug reset",
        "diagnose debug flow filter saddr 10.20.0.102",
        "diagnose debug flow filter daddr 8.8.8.8",
        "diagnose debug flow show function-name enable",
        "diagnose debug flow trace start 100",
        "diagnose debug enable",
        "```",
        "This output shows every step: ingress, route lookup, policy match, NAT decision, and egress."
      ].join('\n')
    },
    {
      heading: "14. Technical Deep-Dive",
      content: [
        "**14.1 Symmetric vs. Asymmetric Routing**",
        "A stateful firewall builds a session table going out and matches the reply coming back. Traffic in both directions must transit the same firewall. Without the return route on HQ-FW1, the reply drops into a blackhole, making the path asymmetric.",
        "",
        "**14.2 Session-Table Behavior on Asymmetric Traffic**",
        "When FortiOS receives a TCP SYN-ACK without an existing session, it drops the packet. `set tcp-session-without-syn disable` is the default.",
        "",
        "**14.3 Why 'No NAT on Transit' Preserves Forensics**",
        "Because HQ-FW2 didn't NAT, HQ-FW1's forward-traffic log retains the original `10.20.0.102` source IP. This makes user attribution possible at the edge firewall.",
        "",
        "**14.4 Static-Route Status: Configured vs. Active**",
        "A route can be 'Configured' in the GUI but not 'Active' in the FIB (Routing Table). Always trust `get router info routing-table all`.",
        "",
        "**14.5 Static Routes at Scale**",
        "Adding static return routes for every new internal subnet across multiple firewalls scales terribly. This maintenance pain is exactly why dynamic routing (OSPF) is the next major skill."
      ].join('\n')
    },
    {
      heading: "15. CLI Command Reference",
      content: [
        "**Used in this skill:**",
        "• `config system global -> set hostname \"Name\"`: Set hostname.",
        "• `config system global -> set admintimeout 60`: Set GUI/SSH idle timeout.",
        "• `config router static -> edit <id> -> set status enable/disable`: Toggle a route active/inactive without deleting it.",
        "• `diagnose debug flow filter ...`: Start a flow trace to see exact kernel decisions.",
        "",
        "**Highly relevant:**",
        "• `get router info routing-table static`: Show only static routes in the FIB.",
        "• `diagnose hardware sysinfo memory`: Check RAM headroom.",
        "• `get system performance status`: Real-time CPU, memory, session snapshot."
      ].join('\n')
    },
    {
      heading: "16. Common Pitfalls",
      content: [
        "• **Forgot HQ-FW1 return route**: PC-2 can ping `10.123.0.11` but not `8.8.8.8`. Fix: Add return route.",
        "• **Return route exists but disabled**: Same symptom. Fix: Set status to enable.",
        "• **Added NAT on HQ-FW2 by accident**: HQ-FW1 logs show all sources as HQ-FW2's IP. Fix: Disable Central SNAT entry on HQ-FW2.",
        "• **HQ-FW1's Central SNAT rule scoped to specific source**: New subnet not matched. Fix: Confirm Central SNAT rule uses `orig-addr all`."
      ].join('\n')
    },
    {
      heading: "17. End-of-Skill Checklist",
      content: [
        "Before moving on, I confirm:",
        "• **HQ-FW2**: Hostname is `HQ-FW2`.",
        "• **HQ-FW2**: `port2` (inside) is `10.20.0.12/24` and `port4` (outside) is `10.123.0.12/24`.",
        "• **HQ-FW2**: Default route `0.0.0.0/0 via 10.123.0.11` is in the FIB.",
        "• **HQ-FW2**: Policy `fw2-inside-to-outside` exists, action accept, NO NAT.",
        "• **HQ-FW1**: Static route `10.20.0.0/24 via 10.123.0.12` is in the FIB.",
        "• **End-to-end**: PC-2 (`10.20.0.102`) can ping `8.8.8.8` and `www.fortinet.com`.",
        "• **End-to-end**: HQ-FW1 forward-traffic log shows the flow with the original source `10.20.0.102`."
      ].join('\n')
    },
    {
      heading: "Appendix: Terminology & Definitions",
      content: [
        "• **Transit firewall**: A firewall whose outside interface faces another firewall under the same administration.",
        "• **Return route**: A static route added on an upstream firewall to direct reply traffic back toward an internal subnet.",
        "• **Symmetric routing**: Forward and reverse paths traverse the same set of network devices in reverse order.",
        "• **Double-NAT**: Source address translation applied twice along a path. Operationally messy.",
        "• **FIB (Forwarding Information Base)**: The routing table the kernel actually uses for packet forwarding. Checked via `get router info routing-table all`.",
        "• **diagnose debug flow**: The kernel-level packet-decision tracer. Most powerful troubleshooting tool in FortiOS."
      ].join('\n')
    }
  ]
};