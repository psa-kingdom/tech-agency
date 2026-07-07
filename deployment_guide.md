# Production Deployment Guide

This guide describes how to deploy the **Altios Labs** application to production using **MongoDB Atlas** for the database, **Railway** for the backend, and **Vercel** for the frontend.

---

## 1. MongoDB Atlas Setup

1. **Sign Up / Log In**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and log in.
2. **Create a Cluster**: Create a new free tier (M0) or shared cluster.
3. **Database Access (User)**:
   - Create a database user (e.g., `altios-admin`).
   - Copy and secure the password.
4. **Network Access (IP Whitelist)**:
   - Add a rule to allow connections from anywhere (`0.0.0.0/0`) since Railway servers do not have static public IPs by default.
5. **Get Connection String**:
   - Click **Connect** on your cluster.
   - Choose **Drivers** (Python).
   - Copy the connection string (it will look like `mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority`).
   - Replace `<password>` with your database user's password.
   - Keep note of the database name you want to use (e.g. `altios_production`).

---

## 2. Backend Deployment on Railway

1. **Connect Repository**:
   - Go to [Railway](https://railway.app/) and create a new project.
   - Select **Deploy from GitHub repo** and select your repository.
2. **Configure Root Directory**:
   - Once the service is created, go to the service **Settings**.
   - Under **General**, find **Root Directory** and set it to `/backend`.
   - Railway will automatically read `backend/requirements.txt` and use Nixpacks to build it as a Python app.
3. **Environment Variables**:
   - Go to the **Variables** tab of the backend service and add the following variables:
     - `MONGO_URL` = `<your-mongodb-atlas-connection-string>`
     - `DB_NAME` = `<your-database-name>` (e.g. `altios_production`)
     - `JWT_SECRET` = `<a-long-random-secure-string>` (used to sign auth tokens)
     - `CORS_ORIGINS` = `https://<your-frontend>.vercel.app` (your Vercel frontend URL, comma-separated if multiple)
     - `ADMIN_EMAIL` = `admin@altioslabs.com` (optional, email for the CMS admin user)
     - `ADMIN_PASSWORD` = `<your-secure-admin-password>` (optional, password for the CMS admin user)
4. **Expose / Generate Domain**:
   - In the **Settings** tab under **Networking**, click **Generate Domain** or configure your custom domain.
   - Note this URL (e.g., `https://backend-production-xxxx.up.railway.app`). You will need this for the frontend configuration.

---

## 3. Frontend Deployment on Vercel

1. **Connect Repository**:
   - Go to [Vercel](https://vercel.com/) and click **Add New** -> **Project**.
   - Import your GitHub repository.
2. **Configure Subdirectory**:
   - In the project setup, next to **Root Directory**, click **Edit** and select the `frontend` folder.
3. **Framework Preset**:
   - Vercel should automatically detect **Create React App** (CRA) via Craco.
4. **Environment Variables**:
   - Expand the **Environment Variables** section and add:
     - `REACT_APP_BACKEND_URL` = `https://<your-backend-railway-url>` (without a trailing `/api` or `/`)
5. **Deploy**:
   - Click **Deploy**. Vercel will build the frontend and generate a deployment URL.
6. **Final Step (CORS whitelist)**:
   - Copy the generated Vercel domain and add/update it in the backend Railway service variables under `CORS_ORIGINS`.
