Setup Instructions for Vite + React Project

This guide helps you run the Vite + React frontend project locally using npm.

Prerequisites

Node.js installed (Recommended: v18 or higher)

npm installed (comes with Node.js)

Steps to Run the Project

Navigate to the frontend folder:
Open your terminal and run:
cd frontend

Install dependencies:
Run this command to install all required packages:
npm install

Install Vite React plugin (only if you get an error about @vitejs/plugin-react):
Run:
npm install @vitejs/plugin-react --save-dev

Run the development server:
Run:
npm run dev

Visit the app in your browser:
Go to:
http://localhost:5173

Notes

If vite.config.js throws an error, make sure it looks like this:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
plugins: [react()],
})

