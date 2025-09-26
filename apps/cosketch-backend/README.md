# 🛠️ CoSketch Backend

CoSketch is a **real-time collaborative drawing application**, and this repository contains its **backend API**, built with **Express.js** and **Bun**. It manages **user authentication, room handling, and API logic** within a **Turborepo monorepo** setup.

---

## 🚀 Features

✅ **JWT-based Authentication (Signup, Signin, User Info)**  
✅ **Room Management (Create, Join, Leave, List)**  
✅ **Secure Password Hashing with Bcrypt**  
✅ **Role-Based Access Control (Middleware)**  
✅ **RESTful API Architecture**  
✅ **PostgreSQL Database with Prisma ORM**  
✅ **Turborepo-powered Monorepo Setup**

---

## 💂️ Folder Structure

```sh
cosketch-backend/
├── src/             # Source code
│   ├── config/      # Configuration (env variables, database setup)
│   ├── controllers/ # Business logic for API endpoints
│   ├── middleware/  # Authentication & security middleware
│   ├── routes/      # API route handlers
│   ├── utils/       # Utility functions (JWT, hashing, HTTP status)
│   ├── server.ts    # Entry point for the backend API
├── tsconfig.json    # TypeScript configuration
├── package.json     # Dependencies & scripts
├── README.md        # Documentation (this file)
```

---

## ⚙️ Tech Stack

| **Category**        | **Technology**          |
| ------------------- | ----------------------- |
| **Backend**         | Express.js + Bun        |
| **Database**        | PostgreSQL (via Docker) |
| **Auth**            | JWT (JSON Web Tokens)   |
| **ORM**             | Prisma                  |
| **Package Manager** | Bun                     |
| **Monorepo**        | Turborepo               |
| **Security**        | Bcrypt, CORS            |

---

## 🔧 Setup & Installation

### 1️⃣ Install Dependencies

Make sure **Bun** is installed:

```sh
bun install
```

### 2️⃣ Start the Backend Server

```sh
bun run dev
```

This will start the backend at `http://localhost:4000`.

### 3️⃣ Running with Docker

If using Docker, start the PostgreSQL database first:

```sh
bun run db:start
```

Then start the backend:

```sh
bun run start
```

---

## 📝 API Endpoints

### **Authentication Routes (`/api/auth`)**

| Method | Endpoint  | Description                                |
| ------ | --------- | ------------------------------------------ |
| `POST` | `/signup` | Register a new user                        |
| `POST` | `/signin` | Login and get a JWT token                  |
| `GET`  | `/me`     | Get authenticated user details (protected) |

### **Room Routes (`/api/rooms`)**

| Method | Endpoint              | Description                                   |
| ------ | --------------------- | --------------------------------------------- |
| `POST` | `/create-room`        | Create a new room (protected)                 |
| `POST` | `/join-room/:roomId`  | Join a specific room (protected)              |
| `POST` | `/leave-room/:roomId` | Leave a specific room (protected)             |
| `GET`  | `/rooms`              | Get a list of all available rooms (protected) |

---

## 🔧 Available Scripts (`package.json`)

```json
{
  "scripts": {
    "dev": "bun run src/server.ts",
    "start": "bun run src/server.ts",
    "db:up": "docker-compose -f ../docker/docker-compose.yml up -d",
    "db:down": "docker-compose -f ../docker/docker-compose.yml down"
  }
}
```

---

## 🛡️ Security & Best Practices

🔹 **JWT Authentication**: Uses secure HTTP-only cookies to store tokens.  
🔹 **Password Hashing**: Bcrypt is used to hash and securely store passwords.  
🔹 **CORS Protection**: API requests are restricted to trusted frontend origins.  
🔹 **Environment Variables**: All sensitive data is stored in `.env` files.

---

## 🌟 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create a feature branch** (`git checkout -b feature-name`)
3. **Commit your changes** (`git commit -m "Add new feature"`)
4. **Push to the branch** (`git push origin feature-name`)
5. **Open a Pull Request**

---

<!-- ## 📝 License

This project is licensed under the **MIT License**.

--- -->

🔥 **"Build, Collaborate, and Sketch Together!"**
