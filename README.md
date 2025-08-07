# Vite + React Frontend Setup Guide

This project uses **Vite** as the frontend build tool and **React** for the UI library.

## 📦 Prerequisites

Before running the project, ensure the following are installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes bundled with Node.js)

## 🚀 Getting Started

Follow these steps to set up and run the frontend locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
2. Navigate to the Frontend Folder
cd frontend
3. Install Dependencies
npm install
4. Install Vite Plugin (if not already)
If you face an error like Cannot find package '@vitejs/plugin-react', run:
npm install @vitejs/plugin-react --save-dev
5. Run the Development Server
npm run dev
6. Visit in Browser
Open your browser and go to:
http://localhost:5173
🛠️ Vite Config Check
If you're getting config errors, make sure your vite.config.js looks like:
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
🧹 Troubleshooting
Delete node_modules and package-lock.json if errors persist:

rm -rf node_modules package-lock.json
npm install
