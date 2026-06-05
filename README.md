# n8n-nodes-submitrax

This is an n8n community node for integrating with the [SubmitraX](https://submitrax.com) API. It provides comprehensive access to SubmitraX's form and submission management platform, allowing you to manage workspaces, forms, submissions, members, and exports directly from your n8n workflows.

## Installation

### Community Nodes (Recommended)

For users on n8n v0.187.0+, install directly through the n8n interface:

1. Go to **Settings > Community Nodes**
2. Click **Install**
3. Enter `n8n-nodes-submitrax`
4. Click **Download**

### Manual Installation

```bash
npm install n8n-nodes-submitrax
```

## Quick Setup

1. **Get API Token**: Go to your SubmitraX workspace settings and generate an API token.
2. **Add Node**: In n8n, search for "SubmitraX" in the node palette.
3. **Configure Credentials**: Create a new SubmitraX API credential and enter your API Token.
4. **Select Operation**: Choose from the available resources and operations below.

## Usage Examples

### Form Creation and Invites
1. **Create Workspace**: Create a new workspace for your project.
2. **Invite Member**: Add collaborators to the workspace.
3. **Create Form**: Generate a new form to start collecting data.

### Data Export Automation
1. **Get Forms**: List all forms in a workspace.
2. **Export Submissions**: Create an export of submissions in CSV or JSON format for reporting.

## Supported Operations

### 📁 **Workspace Management**
- **Create**: Create a new workspace
- **Generate Token**: Generate a new API token for a workspace
- **Get Many**: Retrieve a list of your workspaces

### 📝 **Form Management**
- **Create**: Create a new form
- **Get**: Retrieve details of a specific form by ID
- **Get Many**: List all forms within a workspace

### 📥 **Submission Management**
- **Get Many**: Retrieve and filter form submissions

### 👥 **Member Management**
- **Invite**: Invite a new user to a workspace
- **Get Many**: List all members within a workspace

### 📤 **Export Operations**
- **Create**: Generate an export of form submissions (CSV or JSON)

### ⚡ **Trigger**
- **Submission Trigger**: Automatically start your workflow when a form receives a new submission (handles webhook registration and deletion automatically)

## Compatibility

Tested against n8n version 1.0.0 and above.

## Resources

* [SubmitraX Official Website](https://submitrax.com)
* [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)
