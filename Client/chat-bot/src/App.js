import { useState } from "react";
import Login from "./pages/Login";
import ChatPage from "./pages/ChatPage";
import "./App.css";

export default function App() {
  const [username, setUsername] = useState(localStorage.getItem("username") || null);

  const handleLogin = (name) => setUsername(name);
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("chatHistory");
    setUsername(null);
  };

  return (
    <div className="app">
      {username ? (
        <ChatPage username={username} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}
