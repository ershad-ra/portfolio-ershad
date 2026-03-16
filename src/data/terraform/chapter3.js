import { Key } from 'lucide-react';

export const chapter3 = {
  id: 'auth-providers-resources',
  title: {
    en: "Auth, Providers & First Deploy",
    fr: "Auth, Providers & Déploiement"
  },
  icon: Key,
  sections: [
    {
      heading: "Authentication and Authorization in Terraform",
      content: `Before Terraform can create or manage resources in any cloud provider, it must authenticate with that provider and then be authorized to perform actions.

Authentication verifies who the user or system is. When Terraform connects to a provider (AWS, Azure, GitHub, etc.), it must present credentials such as:
• Username / Password
• Access Key / Secret Key
• API Token
• Configuration files (e.g., \`kubeconfig\` for Kubernetes)

Authorization determines what the authenticated user is allowed to do. Even if a user exists, they may not have permission to create resources.`
    },
    {
      heading: "Terraform AWS Provider Configuration",
      // Remarquez les trois backticks pour le bloc de code multi-lignes !
      content: `Terraform must know which provider to use. Example configuration:

\`\`\`hcl
provider "aws" {
  region     = "us-east-1"
  access_key = "YOUR_ACCESS_KEY"
  secret_key = "YOUR_SECRET_KEY"
}
\`\`\`

Explanation:
• \`provider "aws"\` → defines AWS provider
• \`region\` → AWS region where resources will be created
• \`access_key\` / \`secret_key\` → authentication credentials`
    },
    {
      heading: "Creating an EC2 Instance Resource",
      content: `Terraform resources represent infrastructure objects. Example EC2 configuration:

\`\`\`hcl
resource "aws_instance" "my_ec2" {
  ami           = "ami-0abcdef123456789"
  instance_type = "t2.micro"
}
\`\`\`

Explanation of resource block syntax: \`resource "<resource_type>" "<local_name>"\``
    },
    {
      heading: "Required Providers Block",
      content: `Some providers require explicit declaration. Example:

\`\`\`hcl
terraform {
  required_providers {
    ansible = {
      source  = "ansible/ansible"
      version = "1.4.0"
    }
  }
}
\`\`\``
    },
    {
      heading: "Updating Infrastructure with Terraform",
      content: `Terraform automatically detects configuration changes. Example: Add a name tag to EC2.

\`\`\`hcl
resource "aws_instance" "my_ec2" {
  ami           = "ami-0abcdef123456789"
  instance_type = "t2.micro"

  tags = {
    Name = "my-first-ec2"
  }
}
\`\`\`

Run again:
\`terraform plan\`
\`terraform apply\``
    },
    {
      heading: "Creating a GitHub Repository",
      content: `Terraform can manage GitHub repositories. Example resource:

\`\`\`hcl
resource "github_repository" "example" {
  name       = "example"
  visibility = "public"
}
\`\`\`

Run Terraform:
\`terraform init\`
\`terraform apply\``
    }
  ]
};