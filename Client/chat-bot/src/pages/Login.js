import { useState } from "react";

export default function Login({ onLogin }) {
    const [username, setUsername] = useState("");

    const handleLogin = () => {
        if (username.trim()) {
            localStorage.setItem("username", username);
            onLogin(username);
        }
    };

    return (
        <div className="login-container">
            <h2>Đăng nhập</h2>
            <input
                type="text"
                placeholder="Nhập tên..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
            <button onClick={handleLogin}>Vào Chat</button>
        </div>
    );
}
