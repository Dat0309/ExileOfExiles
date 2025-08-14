import { useState } from "react";
import './Chat.css'
import Button from "../../Button";
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
                <i className="fa-solid fa-paperclip"></i>
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />

                <Button className="send-btn" onClick={handleSend}>
                    <i className="fa-solid fa-arrow-up"></i>
                </Button>
            </div>
            {/* <div className="chat-input-options">
                <button>📎 Attach</button>
                <button>🎤 Voice Message</button>
                <button>📂 Browse Prompts</button>
                <span className="char-count">{text.length} / 3000</span>
            </div> */}
        </div>
    );
}
