# melo-iac GUI

A modern React-based web dashboard for visually managing and inspecting Terraform infrastructure deployed via **melo-iac**.

---

## Key Features

* **Interactive Graph Canvas:** Built with [React Flow](https://reactflow.dev/) to visually map cloud infrastructure dependencies (VPCs, Subnets, VMs, Buckets, Databases).
* **Visual Plan Diffing:** Color-coded node borders based on proposed changes:
  * 🟢 **Green:** Resource creation
  * 🟡 **Yellow:** Resource modification
  * 🔴 **Red:** Resource destruction
  * ⚪ **Gray:** Unchanged live state
* **Manual Triggering:** One-click **"Sync Now"** button to force immediate controller reconciliation.
* **Detailed Node Inspector:** Click on any node to view real-time runtime attributes, tags, and plan outputs.

---

## Tech Stack

* **UI Library:** React 19+ (TypeScript)
* **Graph Rendering:** React Flow + Dagre layout engine
* **Styling:** TailwindCSS
* **Icons:** Lucide-React / Cloud Provider Icon Sets

---

## Local Development Setup

1. **Clone & Install Dependencies:**
   ```bash
   git clone https://github.com/EdmilsonRodrigues/melo-iac-gui.git
   cd melo-iac-gui
   npm install
   ```

2. **Configure Environment Variables:**
   Create a `.env.local` file in the project root:
   ```env
   REACT_APP_API_URL=http://localhost:8080
   ```

3. **Start Development Server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the dashboard in your browser.

---

## Production Build

```bash
npm run build
```
Generates optimized static assets in the `build/` folder, ready to be served by Nginx or deployed as a Kubernetes static frontend container.
