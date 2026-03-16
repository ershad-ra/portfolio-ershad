import { Braces } from 'lucide-react';

export const chapter6 = {
  id: 'terraform-variables',
  title: {
    en: "Variables",
    fr: "Variables"
  },
  icon: Braces,
  sections: [
    {
      heading: "Overview of Terraform Variables",
      content: `Terraform variables allow you to parameterize infrastructure configuration so that the same Terraform code can be reused across different environments. Instead of hardcoding values directly in Terraform resources, variables allow those values to be defined dynamically.

**Example Without Variables**
\`\`\`hcl
resource "aws_instance" "example" {
  ami           = "ami-123456"
  instance_type = "t2.micro"
}
\`\`\`
This configuration is rigid and difficult to reuse.

**Example With Variables**
\`\`\`hcl
variable "instance_type" {}

resource "aws_instance" "example" {
  ami           = "ami-123456"
  instance_type = var.instance_type
}
\`\`\`
Now the instance type can be changed without modifying the resource block.`
    },
    {
      heading: "Terraform Variable Block",
      content: `Variables are declared using the \`variable\` block. Example:

\`\`\`hcl
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
}
\`\`\`

**Important Arguments:**
• \`description\` : explains the variable
• \`type\` : defines the variable data type
• \`default\` : optional default value

Example with default value:
\`\`\`hcl
variable "instance_type" {
  type    = string
  default = "t2.micro"
}
\`\`\`
If no value is provided, Terraform will use the default.`
    },
    {
      heading: "Referencing Variables",
      content: `Variables are referenced using the \`var\` object. Structure: \`var.<variable_name>\`

Examples:
• \`var.region\`
• \`var.instance_type\`
• \`var.image_id\`

**Practical Example**
Terraform file:

\`\`\`hcl
variable "instance_type" {
  default = "t2.micro"
}

resource "aws_instance" "example" {
  ami           = "ami-0abcd1234"
  instance_type = var.instance_type
}
\`\`\`
Running \`terraform apply\` creates an EC2 instance using the variable value.`
    },
    {
      heading: "Variable Definition File (TFVARS)",
      content: `Terraform allows defining variables inside separate files. These files typically end with \`.tfvars\` (e.g., \`terraform.tfvars\`).

Example contents:
\`\`\`hcl
instance_type = "t2.micro"
region        = "us-east-1"
\`\`\`

Terraform automatically loads \`terraform.tfvars\` during execution.

**Custom TFVARS Files**
You can also create custom variable files for different environments:
• \`dev.tfvars\`
• \`stage.tfvars\`
• \`prod.tfvars\`

Apply them using:
\`terraform apply -var-file="dev.tfvars"\`

This allows different environments to use the same Terraform code.`
    },
    {
      heading: "Variable Assignment Approaches",
      content: `Terraform allows assigning variable values in several ways.

**1. Default Value**
Defined inside the variable block.
\`\`\`hcl
variable "instance_type" {
  default = "t2.micro"
}
\`\`\`

**2. Command Line Variables**
Variables can be passed directly in the CLI.
\`terraform apply -var="instance_type=t2.small"\`

**3. Variable Files**
\`terraform apply -var-file="prod.tfvars"\`

**4. Environment Variables**
Terraform can read variables from environment variables. Syntax: \`TF_VAR_<variable_name>\`

Setting Environment Variables in Linux:
\`export TF_VAR_instance_type="t2.micro"\`

Check the variable:
\`echo $TF_VAR_instance_type\`

Now Terraform can access the value automatically when you reference \`var.instance_type\`.`
    },
    {
      heading: "Terraform Variable Precedence",
      content: `When multiple sources define the same variable, Terraform follows a priority order. Variable precedence determines which value Terraform uses.

**Precedence Order (Lowest → Highest):**
1. Default values in variable block
2. Environment variables (\`TF_VAR_name\`)
3. \`terraform.tfvars\` file
4. \`terraform.tfvars.json\`
5. Custom tfvars file (\`-var-file\`)
6. CLI variable (\`-var\`)

**Example:**
If the variable is defined in multiple places:
• Default: \`default = "t2.micro"\`
• TFVARS: \`instance_type = "t2.small"\`
• CLI: \`terraform apply -var="instance_type=t3.medium"\`

Terraform chooses \`t3.medium\` because CLI variables have the highest precedence.`
    },
    {
      heading: "Why Variables Are Important",
      content: `Terraform variables provide several advantages:

**Reusability**
The same infrastructure code can be reused across environments (dev, stage, prod).

**Flexibility**
Infrastructure parameters can be changed without editing Terraform resource files.

**Security**
Sensitive values such as passwords, API keys, and tokens can be passed through environment variables instead of hardcoding them.

**Example Multi-Environment Structure**
Typical Terraform project structure:

\`\`\`bash
terraform-project/
│
├── main.tf
├── variables.tf
├── outputs.tf
│
├── dev.tfvars
├── stage.tfvars
└── prod.tfvars
\`\`\`
Each environment uses different values.`
    },
    {
      heading: "Key Terraform Variable Concepts Learned",
      content: `From this section, the major Terraform concepts were:

**Core Concepts**
• Terraform variables
• Variable blocks
• Variable references

**Variable Sources**
• Default values
• CLI variables
• TFVARS files
• Environment variables

**Terraform Behavior**
• Variable precedence
• Dynamic configuration
• Reusable infrastructure

**Key Takeaway**
Terraform variables make infrastructure dynamic, reusable, and configurable. They allow the same Terraform codebase to support multiple environments while keeping configurations clean and maintainable.`
    }
  ]
};