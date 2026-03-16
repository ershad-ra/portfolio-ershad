import { Terminal } from 'lucide-react';

export const chapter2 = {
  id: 'env-setup',
  title: {
    en: "Environment Setup",
    fr: "Configuration de l'environnement"
  },
  icon: Terminal,
  sections: [
    {
      heading: "Setting Up the Terraform Development Environment",
      content: "As part of my preparation for the Terraform Associate certification, I set up a complete local environment to start building and testing Terraform configurations. This setup included installing Terraform itself, preparing a code editor for development, and creating an AWS lab environment where infrastructure can be deployed and tested.\n\nThis stage focused on preparing the tools and environment necessary for practical Infrastructure as Code (IaC) development."
    },
    {
      heading: "Installing Terraform",
      content: "Terraform installation is intentionally simple compared to many other infrastructure tools. Instead of requiring complex installation procedures, Terraform is distributed as a single executable binary file.\n\nThe process consists of downloading the Terraform binary for the appropriate operating system and making it available on the system so it can be executed from the command line.\n\nTerraform supports multiple operating systems including:\n• Windows\n• Linux\n• macOS\n• FreeBSD\n• Solaris\n\nBecause of this cross-platform compatibility, the same Terraform workflows can be used across different environments and operating systems.\n\nThe Terraform binary can be downloaded directly from the official Terraform downloads page. After downloading the binary, it can be extracted and executed directly from the command line.\n\nFor example, running the command:\n`terraform`\ndisplays the list of available Terraform commands, confirming that the tool is installed and working correctly."
    },
    {
      heading: "Making Terraform Accessible System-Wide",
      content: "After downloading Terraform, an important configuration step is ensuring that Terraform can be executed from any directory in the system.\n\nInitially, the Terraform binary can only be executed from the directory where the executable file is located. This is not ideal because infrastructure projects are typically stored in different directories.\n\nTo solve this problem, the directory containing the Terraform binary must be added to the system's PATH environment variable.\n\nOnce the binary location is added to the PATH:\n• Terraform can be executed from any directory\n• Infrastructure projects can be organized in separate folders\n• Development workflows become much more convenient\n\nFor example, after configuring the PATH correctly, running the command below will work from any project folder:\n`terraform`\n\nThis configuration step is common for many CLI-based tools such as Terraform, Kubernetes CLI tools, or cloud SDKs."
    },
    {
      heading: "Installing Terraform on Linux and macOS",
      content: "For Linux and macOS systems, Terraform installation can be done using two main approaches.\n\nPackage Manager Installation\nThe first method uses the operating system’s package manager. This approach is often the easiest because the installation process is automated. After running the required commands, the package manager downloads and installs Terraform automatically, making it available immediately on the system.\n\nBinary Installation\nThe second method is downloading the Terraform binary manually. In this approach:\n• The compressed Terraform binary file is downloaded.\n• The file is extracted to obtain the Terraform executable.\n• The binary is placed in a system directory such as: `/usr/bin`\n\nPlacing the binary in a directory included in the system PATH allows Terraform to be executed globally from any directory. This approach is very common in Linux environments and gives more control over the installed Terraform version."
    },
    {
      heading: "Setting Up a Code Editor for Terraform",
      content: "While Terraform code can technically be written in any text editor, using a proper code editor significantly improves productivity.\n\nA modern source code editor provides features such as:\n• Syntax highlighting\n• Code formatting\n• File navigation\n• Error detection\n• Autocompletion\n• Integrated terminal support\n\nThese features make writing and maintaining Terraform configurations much easier.\n\nSome commonly used code editors include:\n• Visual Studio Code\n• Sublime Text\n• Atom\n• PyCharm\n\nEach editor provides similar core functionality, but preferences often depend on the developer’s workflow and tool ecosystem."
    },
    {
      heading: "Using Visual Studio Code for Terraform Development",
      content: "For this environment setup, I chose Visual Studio Code (VS Code) as the primary editor.\n\nVS Code is one of the most widely used development tools because it provides:\n• Cross-platform support (Windows, Linux, macOS)\n• Large extension marketplace\n• Built-in Git integration\n• Integrated terminal\n• Excellent performance and usability\n\nAfter installing VS Code, a project folder can be opened directly within the editor. From there, Terraform configuration files can be created and organized inside that folder.\n\nTypical Terraform projects consist of configuration files with the `.tf` extension. These files define infrastructure resources and configurations."
    },
    {
      heading: "Installing Terraform Extensions in VS Code",
      content: "VS Code supports extensions that enhance functionality for specific technologies.\n\nFor Terraform development, the HashiCorp Terraform extension can be installed from the VS Code marketplace. This extension provides several helpful features:\n• Terraform syntax highlighting\n• Code formatting\n• Autocompletion\n• Improved readability of Terraform configuration files\n\nWithout the extension, Terraform code appears as plain text. Once the extension is installed, Terraform configuration files become much easier to read and write due to proper formatting and color highlighting.\n\nAlthough extensions improve productivity, it is important to understand Terraform concepts first before relying heavily on automation or autocompletion tools."
    },
    {
      heading: "Creating a Cloud Lab Environment",
      content: "To fully practice Terraform and Infrastructure as Code concepts, a cloud environment is required where infrastructure can be deployed and tested.\n\nFor this purpose, I created a personal AWS account that will serve as the lab environment for Terraform experiments.\n\nAWS offers a Free Tier program, which allows new users to experiment with cloud services within certain limits at no cost for the first 12 months.\n\nExamples of Free Tier limits include:\n• 750 hours per month of t2.micro or t3.micro EC2 instances\n• 5 GB of standard S3 storage\n• Access to several additional services with usage limits\n\nThese limits are sufficient for most learning scenarios and allow experimentation without incurring costs."
    },
    {
      heading: "Creating an AWS Account",
      content: "Setting up the AWS lab environment required creating a new AWS account through the AWS signup process.\n\nDuring account creation:\n• An email address is used as the root login\n• Personal information such as name, address, and phone number is provided\n• A debit or credit card is added for verification\n• AWS temporarily authorizes a small amount for validation\n\nAlthough a payment method is required, usage within Free Tier limits does not incur charges.\n\nAfter the account is created, access to the AWS Management Console becomes available, allowing resources to be created and managed through the web interface or through automation tools like Terraform."
    },
    {
      heading: "Logging Into the AWS Management Console",
      content: "The AWS Management Console serves as the primary interface for interacting with AWS services.\n\nUsers can log in using either:\n• The Root User account created during signup\n• An IAM User account created later for secure access\n\nFor initial setup and learning environments, logging in as the root user is typically sufficient. However, in production environments, it is recommended to use IAM users and roles for better security and access control."
    },
    {
      heading: "Preparing for Terraform Practicals",
      content: "With Terraform installed, a code editor configured, and a cloud lab environment ready, the development setup is now complete.\n\nThe environment now supports:\n• Writing Terraform configuration files\n• Running Terraform commands from the CLI\n• Deploying infrastructure into AWS\n• Experimenting with Infrastructure as Code workflows\n\nThis setup forms the foundation for exploring Terraform concepts in practice, including resource provisioning, state management, modules, and infrastructure automation."
    }
  ]
};