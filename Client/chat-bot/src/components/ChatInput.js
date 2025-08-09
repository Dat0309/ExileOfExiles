import { useState } from "react";
import './common.css'
export default function ChatInput({ onSend }) {
    const [text, setText] = useState("");

    const handleSend = () => {
        if (text.trim()) {
            onSend(text);
            setText("");
        }
    };

    return (
        <div className="chat-input-container">
            <div className="chat-input-box">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button className="send-btn" onClick={handleSend}>
                    ➤
                </button>
            </div>
            <div className="chat-input-options">
                <button>📎 Attach</button>
                <button>🎤 Voice Message</button>
                <button>📂 Browse Prompts</button>
                <span className="char-count">{text.length} / 3000</span>
            </div>
        </div>
    );
}
