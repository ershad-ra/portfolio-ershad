import { Terminal } from 'lucide-react';

export const skill1 = {
  id: 'nse4-bootstrap',
  title: {
    en: "Skill 1 — Bootstrap a New Firewall",
    fr: "Skill 1 — Amorçage d'un Pare-feu"
  },
  icon: Terminal,
  sections: [
    {
      heading: "Scope",
      content: "Take a brand-new (or recycled) FortiGate-VM from default state to a fully manageable device with internet reachability on the management plane. This is the prerequisite for every subsequent skill — without a working management plane, I cannot push policy, pull updates, or register the device."
    },
    {
      heading: "1. Skill Summary",
      content: "A new FortiGate is essentially inert until I **bootstrap** it. Bootstrapping in FortiOS terminology means establishing the **management plane** — the out-of-band path I use to administer the device — before I ever touch the **data plane** (the user-traffic forwarding path that lives in the security policy table, the kernel session table, and the ASIC offload engines on hardware).\n\nThe bootstrap sequence I follow on every new HQ-FW or Branch-FW VM in my lab is:\n• Gain initial CLI access (VM console or SSH).\n• Perform a full factory reset to a known-good baseline.\n• Reach the default GUI/CLI at the factory-default management IP.\n• Re-IP the management interface to my lab's documented address.\n• Add a default route so the firewall can reach the FortiGuard cloud.\n• Verify connectivity, registration, and DNS resolution.\n\nOnce those six steps are complete, the device is manageable — I can begin Skill 2 (Configuring the Data Plane)."
    },
    {
      heading: "2. Lab Topology Reference",
      content: "The bootstrap target for this skill is **HQ-FW1**, the core firewall in my lab.\n\n**Lab Assets:**\n• **HQ-FW1**: Core/edge firewall (bootstrap target) -> `192.168.100.11/24` (mgmt)\n• **mgmt-net**: Out-of-band management VLAN -> `192.168.100.0/24`\n• **mgmt-net default gateway**: VyOS upstream -> `192.168.100.1`\n• **VyOS-Switch**: Layer-2 switch instance for mgmt-net\n• **Mgmt Workstation**: Admin VM running PuTTY/SecureCRT/browser -> `192.168.100.x`\n\nAll VMs ride on VMware Workstation Pro, host-only vmnets, with DHCP disabled on every segment except mgmt-net. VyOS routers act as switches (layer-2 forwarding for the internal segments) and as ISP gateways (for the WAN-facing subnets that come into play in Skill 2).\n\n**Lab IP convention I am locking in for the FCP study series (Last octet):**\n• **HQ-FW1**: `.11`\n• **HQ-FW2**: `.12`\n• **HQ-FW3**: `.13`\n• **Branch-FW**: `.14`"
    },
    {
      heading: "3. Step 1 — Initial CLI Access to an Existing FortiGate",
      content: "Before I wipe the device, I need a way to talk to it. There are **two reliable paths**, and I always confirm both work before I commit to a destructive operation like a factory reset.\n\n**Option A — VM Console Access (Always Works)**\nOpening the VM window directly in VMware Workstation drops me at the FortiGate login prompt. This path is independent of IP configuration — even if every IP address on the device is wiped or wrong, the VM console keeps working. This is my recovery channel of last resort.\n\n**Why this matters for the exam:** The console is the only path that survives misconfiguration. If `trusthosts`, `allowaccess`, or the management IP itself are corrupted, the console is how I get back in.\n\n**Option B — SSH to the Management Interface**\nIf the firewall already has a known management IP and `ssh` is in `allowaccess`, I connect over the network from my mgmt workstation:\n```bash\nssh admin@192.168.100.11\n```\n\n**Quick decision matrix:**\n• **Brand-new firewall, no IP yet:** VM console\n• **Existing IP, known good, on-LAN:** SSH\n• **Existing IP, unsure of state, about to wipe:** VM console (so the wipe doesn't kill my session)\n• **Lockout / forgotten allowaccess / wrong subnet:** VM console"
    },
    {
      heading: "4. Step 2 — Performing a Full Factory Reset",
      content: "I always reset before redeploying a unit. This removes any leftover policy, VPN tunnels, leftover user accounts, or static routes from a previous lab run.\n```bash\nexecute factoryreset\n```\n**Syntax check:** It's `factoryreset` — one word, no hyphen, no underscore. `execute factory-reset` is invalid and will return an unknown action error. This is a common slip on the NSE 4 exam.\n\n**What survives the reset:**\n`execute factoryreset` is **not** a license wipe. The following data is preserved:\n• FortiGuard registration (the device serial number is permanent)\n• License entitlements (FortiCare, IPS, AV, Web Filter, FortiGuard subscriptions)\n• Hardware-bound state\n\n**The sibling command — factoryreset2**\nA useful related command that didn't appear in the lesson but shows up on the FCP:\n```bash\nexecute factoryreset2\n```\n`factoryreset2` performs the same wipe but **preserves the management interface IP, default route, and admin password**. I use this when I want a clean config but need to keep my management session alive.\n\n**Wipe Summary:**\n• `execute factoryreset`: Wipes config, wipes mgmt IP, preserves licensing.\n• `execute factoryreset2`: Wipes config, preserves mgmt IP, preserves licensing."
    },
    {
      heading: "5. Step 3 — Accessing the Freshly Reset FortiGate",
      content: "After the reboot, the FortiGate-VM comes up with the following **factory defaults** that I memorize:\n• **Management interface:** `port1`\n• **Management IP:** `192.168.1.99/24`\n• **Allowed services:** `ping`, `https`, `ssh`, `fgfm`\n• **Admin username:** `admin`\n• **Admin password:** (blank — press Enter)\n• **First-login behavior:** Forces password change\n\n**Lab-specific gotcha:**\nMy management network is `192.168.100.0/24`, but the FortiGate boots on `192.168.1.99/24`. I default to the VM console approach — it's faster and avoids polluting my workstation's interface configuration.\n\n**Initial CLI bootstrap on a freshly reset unit:**\n```text\nFortiGate login: admin\nPassword: \n\nYou are forced to change your password now.\nNew Password: ********\nConfirm Password: ********\n```"
    },
    {
      heading: "6. Step 4 — Changing the Management Interface IP",
      content: "I want HQ-FW1's `port1` on `192.168.100.11/24` per my lab plan. There are **two equally valid methods**.\n\n**Method A — GUI**\n1. Navigate to **Network -> Interfaces**.\n2. Double-click `port1`.\n3. Set IP/Network Mask to `192.168.100.11/24`.\n4. Administrative Access -> confirm `HTTPS`, `SSH`, `PING` are checked. Leave HTTP and TELNET unchecked (hardening violation).\n5. DHCP Server -> Disable.\n6. Click OK.\n\n**Method B — CLI**\n```bash\nconfig system interface\n    edit \"port1\"\n        set ip 192.168.100.11 255.255.255.0\n        set allowaccess ping https ssh\n    next\nend\n```\n**Verification commands** I run immediately after:\n```bash\nshow system interface port1\nget system interface physical\n```\n\n**Production hardening note — Trusted Hosts**\nAfter setting the IP, I lock the admin account down to specific source subnets:\n```bash\nconfig system admin\n    edit \"admin\"\n        set trusthost1 192.168.100.0 255.255.255.0\n    next\nend\n```\nWith `trusthost1` set, the admin account can **only** authenticate from that subnet — even if `allowaccess` is wide open."
    },
    {
      heading: "7. Step 5 — Adding a Default Route",
      content: "At this point HQ-FW1 knows about exactly one network: the directly-connected `192.168.100.0/24`. It has **no path to the internet**. The fix is a default route pointing at my mgmt-net upstream gateway, `192.168.100.1`.\n\n**Method A — GUI**\n1. **Network -> Static Routes -> Create New**.\n2. Destination -> `0.0.0.0/0.0.0.0`\n3. Gateway Address -> `192.168.100.1`.\n4. Interface -> autopopulates to `port1`.\n5. Click OK.\n\n**Method B — CLI**\n```bash\nconfig router static\n    edit 1\n        set dst 0.0.0.0 0.0.0.0\n        set gateway 192.168.100.1\n        set device \"port1\"\n        set distance 10\n    next\nend\n```\n\n**Administrative Distance — values to memorize:**\n• **Connected**: `0`\n• **Static**: `10` (Note: FortiOS uses 10, not 1 like Cisco)\n• **OSPF**: `110`\n• **RIP**: `120`\n• **BGP (eBGP)**: `20`\n• **BGP (iBGP)**: `200`"
    },
    {
      heading: "8. Step 6 — Verification",
      content: "I run all of these in sequence after the route is in place.\n\n**8.1 Routing table sanity check**\n```bash\nget router info routing-table all\n```\nEquivalent to Cisco's show ip route. Look for `S*` (default static) and `C` (connected).\n\n**8.2 ICMP reachability**\n```bash\nexecute ping 8.8.8.8\n```\n\n**8.3 DNS resolution**\n```bash\nexecute ping [www.fortinet.com](https://www.fortinet.com)\n```\nIf this resolves and pings, both DNS and the default route are working.\n\n**8.4 FortiGuard registration & licensing**\nCheck **System -> FortiGuard**. Registration can take 5–15 minutes to propagate through FortiCloud — normal, not a sign of a broken bootstrap."
    },
    {
      heading: "9. Firmware Branches — Mature vs Feature",
      content: "FortiOS will offer one of two branch types for any upgrade. Picking the wrong one in production causes outages.\n\n• **Mature (-M)**: Stabilized; bugs caught and patched. Use in **Production**, always.\n• **Feature (-F)**: Latest features; less battle-tested. Use in **Lab, eval, or home lab**.\n\n**Rule of thumb:** Production firewalls run an `M` build that has been out for at least 60–90 days with no critical PSIRT advisories against it."
    },
    {
      heading: "10. Technical Deep-Dive",
      content: "**Management Plane vs Data Plane**\n• **Management Plane**: The logical subsystem that handles administrative traffic *to* the firewall (SSH, HTTPS, SNMP, FortiGuard updates). Processed by CPU only.\n• **Data Plane**: The logical subsystem that handles user traffic *through* the firewall (policy match, NAT, inspection). Processed by ASICs (NP7/CP9) on hardware, or vCPU on VMs.\n\n**Out-of-Band (OOB) Management — Why port1 is Sacred**\nThe point of dedicating `port1` to management is **isolation**. If the data plane is under a DDoS attack, my management session on `port1` is not affected because it's processed by a separate kernel scheduler and connected to a physically separate network.\n\n**The Default LAN Switch**\nOut of the box, FortiGate-VM ships with a logical interface called `lan` (a software-switch grouping `port2` and up, with DHCP enabled). This is a problem in a lab as it conflicts with data-plane subnet plans and hides individual ports. I dismantle this during data-plane configuration."
    },
    {
      heading: "11. CLI Command Reference",
      content: "Commands used in this runbook:\n• `execute factoryreset`: Full wipe of running config; preserves licensing.\n• `execute factoryreset2`: Wipe of running config; preserves mgmt IP, default route, admin password.\n• `config system interface`: Enter interface configuration mode.\n• `set ip <addr> <mask...>`: Assign IP to selected interface.\n• `set allowaccess <services>`: Enable management protocols on the interface.\n• `get system interface physical`: Show operational state of all physical interfaces.\n• `get router info routing-table all`: Full routing table (FIB), all protocols.\n• `diagnose ip address list`: Kernel view of all interface IPs.\n• `execute traceroute <ip>`: Hop-by-hop reachability test.\n• `execute backup config flash`: Snapshot current config to internal flash before risky changes.\n• `get system status`: One-shot view of model, FortiOS version, license, HA state."
    },
    {
      heading: "12. Common Bootstrap Pitfalls",
      content: "• **Forgot to add default route**: `execute ping 8.8.8.8` fails beyond gateway. Fix: Add `0.0.0.0/0` static route.\n• **Default route AD too high**: Route exists but isn't installed. Fix: Lower AD below `10`.\n• **allowaccess doesn't include https**: Locked out of GUI. Fix: VM console in, fix `set allowaccess`.\n• **Trusted hosts misconfigured**: Admin gets 'permission denied' from a known-good IP. Fix: VM console in, widen `trusthost` or remove.\n• **DHCP server left enabled on port1**: Random devices get IPs from FortiGate. Fix: Delete DHCP server on port1.\n• **Wrong subnet on workstation**: Cannot reach `192.168.1.99` after reset. Fix: Use VM console, not IP.\n• **Used factoryreset instead of factoryreset2**: Lost remote management access. Fix: Recover via VM console."
    },
    {
      heading: "13. End-of-Skill Checklist",
      content: "Before I move on, I confirm every one of these is true for HQ-FW1:\n• I can SSH to `admin@192.168.100.11` from my mgmt workstation.\n• I can open `https://192.168.100.11` in my browser and log in.\n• `get router info routing-table all` shows a `S*` default route via `192.168.100.1`.\n• `execute ping 8.8.8.8` returns five successful replies.\n• `execute ping www.fortinet.com` resolves and replies.\n• **System -> FortiGuard** shows the device as **Registered**.\n• `allowaccess` on `port1` is restricted to `ping https ssh`.\n• DHCP server on `port1` is disabled.\n• (Hardening) `trusthost1` is set on the `admin` account.\n\nIf all boxes are checked, the management plane is solid and I'm ready to begin data-plane configuration."
    }
  ]
};