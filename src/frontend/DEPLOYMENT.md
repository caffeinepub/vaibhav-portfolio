# Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio application to the Internet Computer.

## Prerequisites

Before deploying, ensure you have the following installed:

1. **DFX (Internet Computer SDK)**
   - Install via: `sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"`
   - Verify installation: `dfx --version`

2. **Node.js and pnpm**
   - Node.js version 18 or higher
   - Install pnpm: `npm install -g pnpm`
   - Verify: `node --version` and `pnpm --version`

3. **Internet Identity** (for production deployments with authentication)
   - Your application will interact with the Internet Computer's identity system

## Local Development Setup

1. **Clone the repository and install dependencies:**
   ```bash
   cd frontend
   pnpm install
   ```

2. **Start the local Internet Computer replica:**
   ```bash
   dfx start --clean --background
   ```
   - The `--clean` flag ensures a fresh state
   - The `--background` flag runs the replica in the background

3. **Deploy canisters locally:**
   ```bash
   dfx deploy
   ```
   - This creates and deploys both the backend and frontend canisters
   - The backend canister is a Motoko actor defined in `backend/main.mo`
   - The frontend is built and deployed as an asset canister

4. **Start the development server:**
   ```bash
   cd frontend
   pnpm start
   ```
   - The app will be available at `http://localhost:3000`

## Production Deployment to Internet Computer

### Step 1: Configure Your Identity

1. **Create or use an existing DFX identity:**
   ```bash
   dfx identity new <identity-name>
   dfx identity use <identity-name>
   ```

2. **Check your principal (your identity on the IC):**
   ```bash
   dfx identity get-principal
   ```

3. **Ensure you have cycles** (the "gas" for computation on the IC):
   - You can obtain cycles through the [cycles faucet](https://faucet.dfinity.org/) or by converting ICP tokens

### Step 2: Deploy to Mainnet

1. **Build the frontend:**
   ```bash
   cd frontend
   pnpm run prebuild  # Generates backend bindings
   pnpm run build:skip-bindings
   ```

2. **Deploy to the Internet Computer mainnet:**
   ```bash
   dfx deploy --network ic
   ```
   - This deploys both backend and frontend canisters to the mainnet
   - The process may take a few minutes

3. **Note your canister IDs:**
   ```bash
   dfx canister --network ic id frontend
   dfx canister --network ic id backend
   ```
   - Save these IDs for future reference

### Step 3: Access Your Deployed Application

Your application will be accessible at:
