# JWT Authentication App

A simple full-stack JWT authentication example with an Express + MongoDB server and a React + Vite (TypeScript) client.

Project structure
- `server/` — Express server (JWT auth, MongoDB)
- `client/` — React + Vite front-end (TypeScript)

Key features
- User registration and sign-in using JSON Web Tokens (JWT)
- MongoDB for user persistence
- Simple protected routes pattern on the client

Tech stack
- Server: Node.js, Express, Mongoose, jsonwebtoken
- Client: React, TypeScript, Vite, Axios

Getting started (prerequisites)
- Node.js (v16+ recommended)
- npm (or yarn)
- MongoDB (local or Atlas)

Environment variables
Create a `.env` file inside the `server/` folder with at least the following variables:

```
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<a-secure-secret-for-signing-jwt>
JWT_EXPIRE_IN=1d
PORT=3000
```

Notes:
- The client currently calls the API endpoints using `http://localhost:3000` (see `client/src/pages/Register.tsx` and `client/src/pages/Login.tsx`). If you change the server port or host, update those URLs or switch the client to use an environment variable for the API base URL.

Run the server

Open a terminal and run:

```powershell
cd server
npm install
# create .env as described above
npm start
```

This starts the server (the project uses `nodemon` via the `start` script). The server listens on `process.env.PORT` or `3000` by default.

Run the client

Open a separate terminal and run:

```powershell
cd client
npm install
npm run dev
```

The client is a Vite app and will run on `http://localhost:5173` by default.

API endpoints (server)
- `POST /api/v1/auth/sign-up` — Register a new user. Expects JSON with `username`, `email`, `password`.
- `POST /api/v1/auth/sign-in` — Sign in. Expects JSON with `email`, `password`. Returns a JWT token on success.

Notes about security
- Passwords in this example are stored as plain text (no hashing). This is for demonstration only — do not use in production. Add password hashing (bcrypt) and input validation before deploying.
- Keep `JWT_SECRET` safe and do not commit `.env` to version control.

Committing & pushing

To add this README to your repository and push to GitHub (assuming `origin` and `main` are configured):

```powershell
git add README.md
git commit -m "Add project README"
git push origin main
```

If you run into authentication issues while pushing, ensure your Git credentials or SSH keys are configured on your machine and that `origin` points to your GitHub repository.

Further improvements
- Use password hashing and proper error handling on the server.
- Replace hardcoded API URLs in the client with environment variables (Vite: `import.meta.env.VITE_API_URL`).
- Add protected client routes that check for a valid JWT before rendering.
- Add tests and CI configuration.

License & author
- Add a license as needed. This repository does not include a license by default.

---
If you'd like, I can also:
- Replace the hardcoded API URLs in the client with a `VITE_API_URL` env variable and update the README accordingly.
- Commit and push this README for you now.
