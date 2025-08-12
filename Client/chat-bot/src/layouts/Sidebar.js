import { useState } from "react";
import "./layout.css";

export default function Sidebar({ chatHistoryList, onSelectChat, onNewChat }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <div className="sidebar-header">
                <img
                    src="/logo192.png"
                    alt="Logo"
                    className="logo"
                    onClick={() => setIsOpen(true)}
                />
                {isOpen && (
                    <button
                        className="toggle-btn"
                        onClick={() => setIsOpen(false)}
                    >
                        ⮜
                    </button>
                )}
            </div>

            {/* Nút tạo đoạn chat mới */}
            <div
                className="new-chat-container"
                onClick={onNewChat}
            >
                <span className="new-chat-icon">+</span>
                <span className={`new-chat-text ${isOpen ? "open" : "closed"}`}>
                    Tạo đoạn chat mới
                </span>
                {!isOpen && (
                    <span className="tooltip">Tạo đoạn chat mới</span>
                )}
            </div>

            {/* Danh sách lịch sử chat */}
            {isOpen && (
                <div className="chat_history">
                    <h3>Lịch sử chat</h3>
                    <ul>
                        {chatHistoryList.map((chat, index) => (
                            <li key={index} onClick={() => onSelectChat(index)}>
                                Phiên {index + 1} ({chat.length} tin nhắn)
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
