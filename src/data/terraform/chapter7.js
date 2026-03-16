import { ListTree } from 'lucide-react';

export const chapter7 = {
  id: 'data-types-logic',
  title: {
    en: "Data Types & Logic",
    fr: "Types de Données & Logique"
  },
  icon: ListTree,
  sections: [
    {
      heading: "Terraform Data Types",
      content: `Terraform variables support multiple data types. Data types define what kind of values a variable can store.

Example variable:
\`\`\`hcl
variable "instance_type" {
  type = string
}
\`\`\`

**Common Terraform Data Types:**
• \`string\` : text value (e.g., "t2.micro")
• \`number\` : numeric value (e.g., 10)
• \`bool\` : true/false (e.g., true)
• \`list\` : ordered collection (e.g., ["a","b","c"])
• \`map\` : key-value collection (e.g., {env="dev"})`
    },
    {
      heading: "String, Number, and Boolean Data Types",
      content: `**String Data Type**
A string represents text values.
\`\`\`hcl
variable "region" {
  default = "us-east-1"
}
\`\`\`

**Number Data Type**
Numbers are used for numeric values. This variable can be used to create multiple resources.
\`\`\`hcl
variable "server_count" {
  type    = number
  default = 2
}
\`\`\`

**Boolean Data Type**
Boolean values represent true or false. This is useful for enabling or disabling resources.
\`\`\`hcl
variable "create_instance" {
  type    = bool
  default = true
}
\`\`\``
    },
    {
      heading: "Terraform List Data Type",
      content: `A list is an ordered collection of values. Lists are useful when you need multiple similar values.

Example list variable:
\`\`\`hcl
variable "regions" {
  type = list(string)
  default = [
    "us-east-1",
    "us-west-1",
    "eu-west-1"
  ]
}
\`\`\`

**Accessing List Values**
List elements are accessed using an index. Indexing always starts from \`0\`.
• Example: \`var.regions[0]\` → Result: \`us-east-1\`
• Example: \`var.regions[1]\` → Result: \`us-west-1\``
    },
    {
      heading: "Terraform Map Data Type",
      content: `A map stores data in key-value format. Maps are useful for environment-based configurations.

Example:
\`\`\`hcl
variable "instance_type" {
  type = map(string)
  default = {
    dev  = "t2.micro"
    test = "t2.small"
    prod = "t2.large"
  }
}
\`\`\`

**Accessing Map Values**
Map values are accessed using keys.
• Example: \`var.instance_type["dev"]\` → Result: \`t2.micro\`
• Example: \`var.instance_type["prod"]\` → Result: \`t2.large\``
    },
    {
      heading: "Terraform Count Meta-Argument & Index",
      content: `The \`count\` meta-argument allows creating multiple instances of a resource.

\`\`\`hcl
resource "aws_instance" "server" {
  count = 3

  ami           = "ami-12345"
  instance_type = "t2.micro"
}
\`\`\`
Terraform will create \`aws_instance.server[0]\`, \`[1]\`, and \`[2]\` (So three EC2 instances will be created).

**Count Index**
When using \`count\`, Terraform automatically creates an index variable: \`count.index\`

\`\`\`hcl
resource "aws_instance" "server" {
  count = 3
  ami           = "ami-12345"
  instance_type = "t2.micro"

  tags = {
    Name = "Server-\${count.index}"
  }
}
\`\`\`
Generated instances: \`Server-0\`, \`Server-1\`, \`Server-2\``
    },
    {
      heading: "Using Lists with Count",
      content: `You can combine lists and the count index to dynamically assign values to multiple resources.

\`\`\`hcl
variable "instance_types" {
  default = ["t2.micro", "t2.small", "t2.medium"]
}

resource "aws_instance" "server" {
  count = 3
  instance_type = var.instance_types[count.index]
}
\`\`\`
Terraform assigns different instance types to each created server based on the index.`
    },
    {
      heading: "Conditional Expressions in Terraform",
      content: `Terraform supports conditional logic.
Syntax: \`condition ? true_value : false_value\`

Example:
\`\`\`hcl
variable "environment" {
  default = "dev"
}

instance_type = var.environment == "prod" ? "t2.large" : "t2.micro"
\`\`\`
Explanation: If environment is \`prod\`, the result is \`t2.large\`. Otherwise, it is \`t2.micro\`.

**Conditional Resource Creation**
Conditional expressions can also control resource counts.
\`\`\`hcl
resource "aws_instance" "server" {
  count = var.environment == "prod" ? 3 : 1

  ami           = "ami-12345"
  instance_type = "t2.micro"
}
\`\`\`
If environment = prod: \`3 instances\`. Otherwise: \`1 instance\`.`
    },
    {
      heading: "Real-World Terraform Example",
      content: `Typical production Terraform configuration combining variables, maps, and dynamic assignment:

\`\`\`hcl
variable "environment" {
  default = "dev"
}

variable "instance_type" {
  type = map(string)
  default = {
    dev  = "t2.micro"
    prod = "t2.large"
  }
}

resource "aws_instance" "app" {
  instance_type = var.instance_type[var.environment]
}
\`\`\`
This automatically selects the correct instance type based on the active environment.`
    },
    {
      heading: "Key Terraform Concepts Learned",
      content: `From this lesson, the major Terraform concepts were:

**Variables & Data Types**
• Data types (\`string\`, \`number\`, \`bool\`)
• Lists
• Maps

**Infrastructure Scaling**
• \`count\` meta-argument
• \`count.index\`

**Logic**
• Conditional expressions
• Environment-based configurations

**Key Takeaway**
Terraform data structures and meta-arguments allow infrastructure to become:
• dynamic
• scalable
• environment-aware

These features are essential for building production-level Infrastructure as Code systems.`
    }
  ]
};