import { useEffect, useRef } from "react";
import './common.css'
export default function MessageList({ messages, username, onQuickCommand }) {
    const endRef = useRef(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    if (messages.length === 0) {
        return (
            <div className="message-list">
                <div className="chat-welcome">
                    <h2>Xin chào, {username}!</h2>
                    <p>Bạn có thể bắt đầu trò chuyện hoặc chọn một chức năng bên dưới:</p>
                    <div className="chat-functions">
                        <button onClick={() => onQuickCommand("Tra cứu wiki/patch/mechanics")}>
                            📚 Knowledge
                        </button>
                        <button onClick={() => onQuickCommand("Nhân vật của tôi có bao nhiêu HP?")}>
                            🧍 Player-linked
                        </button>
                        <button onClick={() => onQuickCommand("Giá item XYZ trên thị trường")}>
                            💰 Market/Trade
                        </button>
                        <button onClick={() => onQuickCommand("Giải thích affix/recipe/conversion")}>
                            🛠️ Utility
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="message-list">
            {messages.map((m, i) => (
                <div key={i} className={`message-item ${m.sender === username ? "user" : "bot"}`}>
                    <div className="message-bubble">
                        <strong>{m.sender}:</strong> {m.text}
                    </div>
                </div>
            ))}
            <div ref={endRef}></div>
        </div>
    );
}
