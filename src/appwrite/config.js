import { useState } from "react";
import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // e.g. "https://cloud.appwrite.io/v1"
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // e.g. "PROJECT_ID"

const account = new Account(client);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession({
        email,
        password,
      });
      console.log("Logged in!");
      // navigate or update UI here
    } catch (err) {
      console.error("Login error:", err);
      // show error message to user
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Log in</button>
    </form>
  );
}