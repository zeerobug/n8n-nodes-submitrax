# n8n-nodes-submitrax

Stop manually checking your forms. This n8n community node connects [SubmitraX](https://submitrax.com) to your workflows so every new submission instantly triggers the next step — notify your team, update your CRM, export to a spreadsheet, or anything else n8n can do.

Full access to the SubmitraX API: manage workspaces, forms, submissions, members, and exports without leaving your automation.

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

### Real-time Submission Alerts
Use the **Submission Trigger** to fire the moment a form is filled out. Route the data to Slack, send a confirmation email, or log it to a database — all automatically.

### Form Creation and Invites
1. **Create Workspace**: Spin up a new workspace for a client or project.
2. **Invite Member**: Add collaborators in the same workflow step.
3. **Create Form**: Provision a new form programmatically, no manual UI work needed.

### Data Export Automation
1. **Get Forms**: Pull the full list of forms in a workspace.
2. **Export Submissions**: Schedule a daily CSV or JSON export for reporting, then forward it wherever it needs to go.

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
