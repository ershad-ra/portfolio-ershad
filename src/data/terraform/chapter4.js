import { ServerCog } from 'lucide-react';

export const chapter4 = {
  id: 'state-providers-auth',
  title: {
    en: "State & Authentication",
    fr: "État & Authentification"
  },
  icon: ServerCog,
  sections: [
    {
      heading: "Understanding Terraform State",
      content: `One of the most important concepts in Terraform is the Terraform State File.
When Terraform creates infrastructure resources, it stores information about those resources in a file called: \`terraform.tfstate\`

This file acts as Terraform’s source of truth about the infrastructure that it manages.

**Purpose of the State File**
The Terraform state file allows Terraform to:
• Track infrastructure resources that it created
• Map Terraform configuration to real-world resources
• Detect differences between desired configuration and deployed infrastructure
• Plan future changes safely

For example, if Terraform creates an AWS EC2 instance and a GitHub repository, Terraform will record both resources in the state file.
Inside the \`terraform.tfstate\` file, Terraform stores information such as:
• resource type
• resource name
• resource IDs
• IP addresses
• security groups
• provider information`
    },
    {
      heading: "How Terraform Uses the State File",
      content: `When you run \`terraform plan\`, Terraform compares:
• Terraform configuration files (\`.tf\`)
• Terraform state file
• Actual infrastructure in the cloud

Using these three sources, Terraform determines what actions are required.

**Example scenario:**
If an EC2 instance is destroyed manually but the GitHub repo still exists, Terraform detects this because:
• GitHub repo still exists in the state file
• EC2 instance entry is missing in the actual cloud

Terraform then plans to recreate the EC2 instance only.`
    },
    {
      heading: "Why the State File Is Critical",
      content: `If the state file is deleted or corrupted, Terraform loses its knowledge of the infrastructure.
Example: If \`terraform.tfstate\` is removed and you run \`terraform plan\`, Terraform assumes that no infrastructure exists, even if resources are actually running. Terraform will attempt to recreate everything again.

Because of this, Terraform state files must always be:
• protected
• backed up
• stored securely

In production environments, Terraform state is usually stored remotely in systems like:
• AWS S3
• Terraform Cloud
• Azure Storage
• Consul`
    },
    {
      heading: "Desired State vs Current State",
      content: `Terraform operates based on two key concepts:

**1. Desired State**
The desired state is defined in Terraform configuration files. Example configuration:

\`\`\`hcl
resource "aws_instance" "example" {
  ami           = "ami-123456"
  instance_type = "t2.micro"
}
\`\`\`
This means the desired state is: one EC2 instance of type \`t2.micro\`.

**2. Current State**
The current state is the actual infrastructure currently deployed in the cloud.
Example: The EC2 instance may currently be \`t2.medium\` because someone manually changed it in AWS.`
    },
    {
      heading: "Terraform Drift Detection",
      content: `If the current state differs from the desired state, Terraform detects this difference.

When running \`terraform plan\`, Terraform will display the changes required to bring the infrastructure back to the desired state.
Example:
Desired: \`t2.micro\`
Current: \`t2.medium\`

Terraform plan will show:
\`~ instance_type: "t2.medium" -> "t2.micro"\`

Running \`terraform apply\` will modify the instance back to the desired configuration.`
    },
    {
      heading: "Infrastructure Drift in Production",
      content: `In real environments, infrastructure drift can occur when:
• administrators modify resources manually
• automation tools make changes
• configurations are updated outside Terraform

Terraform helps detect and correct this drift. However, Terraform only tracks attributes that are defined in the configuration.
Example: If the configuration does not specify a security group, Terraform will not manage that attribute. So if someone manually changes the security group, Terraform will not revert it.

This is why it is recommended to define all critical configuration parameters in Terraform code.`
    },
    {
      heading: "Terraform Refresh",
      content: `Terraform must keep its state file synchronized with the real infrastructure. This process is called refreshing the state.

The refresh operation:
• Queries the real infrastructure
• Updates the Terraform state file

Terraform refresh happens automatically when running:
\`terraform plan\`
\`terraform apply\`

So running the command \`terraform refresh\` is rarely necessary. In newer Terraform versions, the refresh command is deprecated.`
    },
    {
      heading: "Risks of Manual Refresh",
      content: `Running \`terraform refresh\` manually can sometimes lead to issues.

Example: If the provider region is changed in the configuration (\`region = "us-west-2"\`) but the infrastructure exists in \`us-east-1\`, Terraform refresh may fail to find the resource and remove it from the state file.

This is why state backups are extremely important. Terraform automatically creates:
\`terraform.tfstate.backup\``
    },
    {
      heading: "Terraform Providers & Versioning",
      content: `Terraform interacts with external systems using providers (AWS, Azure, Google Cloud, GitHub, etc.). Providers act as plugins that allow Terraform to communicate with APIs.

\`\`\`bash
Terraform Configuration
        ↓
Terraform Core
        ↓
Provider Plugin
        ↓
Cloud Provider API
\`\`\`

**Provider Versioning**
Terraform providers evolve over time. Because newer versions can introduce breaking changes, Terraform allows specifying version constraints.

\`\`\`hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}
\`\`\`
This means: Use any version between 3.0 and 3.x.

**Provider Version Constraint Examples:**
• \`>= 1.0\` : version 1.0 or higher
• \`<= 2.0\` : version 2.0 or lower
• \`~> 3.0\` : any 3.x version
• \`>= 2.10, <= 2.30\` : versions between 2.10 and 2.30`
    },
    {
      heading: "Terraform Lock File",
      content: `Terraform creates a lock file called \`.terraform.lock.hcl\`.

This file records the exact provider version used (e.g., \`version = "3.27.0"\`). Even if newer versions exist, Terraform continues using the locked version unless explicitly upgraded.

To upgrade providers:
\`terraform init -upgrade\``
    },
    {
      heading: "Secure Authentication for AWS Provider",
      content: `Initially, Terraform examples often include credentials directly in the configuration. Example (not recommended):

\`\`\`hcl
provider "aws" {
  region     = "us-east-1"
  access_key = "XXXX"
  secret_key = "XXXX"
}
\`\`\`

Hardcoding credentials is insecure because secrets may be committed to Git, leak publicly, and team members can see each other's keys.`
    },
    {
      heading: "Recommended Authentication Method",
      content: `The preferred method is to use AWS CLI credentials. Install AWS CLI and run:
\`aws configure\`

You will provide your AWS Access Key, Secret Key, and Default Region. AWS CLI stores credentials in:
• Linux/macOS: \`~/.aws/credentials\` and \`~/.aws/config\`
• Windows: \`C:\\Users\\USERNAME\\.aws\\credentials\`

Terraform automatically reads credentials from these locations. Then the provider configuration becomes much simpler:

\`\`\`hcl
provider "aws" {
  region = "us-east-1"
}
\`\`\`

No credentials are stored in the code.

**Benefits of Using AWS CLI Credentials:**
• keeps credentials outside Terraform code
• prevents secrets from being committed to Git
• allows each developer to use their own credentials
• integrates with SSO solutions (Okta, AWS SSO)`
    },
    {
      heading: "Key Takeaways",
      content: `From this section of the Terraform learning journey, I learned:
• Terraform uses a state file to track infrastructure
• Terraform compares desired state vs current state
• Terraform detects configuration drift
• Providers allow Terraform to interact with external APIs
• Provider versioning ensures stability
• The lock file controls provider versions
• AWS authentication should use AWS CLI credentials instead of hardcoded keys
• Terraform automatically refreshes state during plan and apply`
    }
  ]
};