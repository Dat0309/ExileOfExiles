import { useState } from "react";

export default function MessageInput({ onSend }) {
    const [message, setMessage] = useState("");

    const send = () => {
        if (message.trim()) {
            onSend(message);
            setMessage("");
        }
    };

    return (
        <div className="message-input">
            <input
                type="text"
                placeholder="Nhập tin nhắn..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <button onClick={send}>Gửi</button>
        </div>
    );
}
