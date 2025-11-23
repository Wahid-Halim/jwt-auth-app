import { useState } from "react";
import type { FormEvent } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page refresh

    const data: RegisterData = { username, email, password };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/sign-up",
        data
      );

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      alert("Registered successfully! Please login.");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      console.error(err.response?.data || err);
      alert("Registration failed!");
    }
  };

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <form onSubmit={handleRegister}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Register</legend>

          <label className="label">Username</label>
          <input
            type="text"
            className="input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
          <Link to="/login" className="text-center">
            or Login
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
