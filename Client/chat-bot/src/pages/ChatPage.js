import { useState, useEffect } from "react";
import Navbar from "../layouts/Navbar";
import MessageList from "../components/MessageList";
import MessageInput from "../components/MessageInput";
import Sidebar from "../layouts/Sidebar";
import './pages.css'
import ChatInput from "../components/ChatInput";

export default function ChatPage({ username, onLogout }) {
    const [allChats, setAllChats] = useState(() => {
        return JSON.parse(localStorage.getItem("allChats")) || {};
    });
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);

    const messages = allChats[username]?.[currentSessionIndex] || [];

    // Lưu toàn bộ lịch sử vào localStorage khi allChats thay đổi
    useEffect(() => {
        localStorage.setItem("allChats", JSON.stringify(allChats));
    }, [allChats]);

    const sendMessage = (text) => {
        const userMsg = { sender: username, text };
        const updatedMessages = [...messages, userMsg];

        updateSession(updatedMessages);

        // Bot trả lời sau 500ms
        setTimeout(() => {
            const botMsg = { sender: "Bot", text: "Tôi đã nhận được tin nhắn của bạn." };
            updateSession([...updatedMessages, botMsg]);
        }, 500);
    };

    const updateSession = (updatedMessages) => {
        setAllChats(prev => {
            const userChats = prev[username] || [[]];
            userChats[currentSessionIndex] = updatedMessages;
            return { ...prev, [username]: [...userChats] };
        });
    };

    const newChat = () => {
        setAllChats(prev => {
            const userChats = prev[username] || [];
            return { ...prev, [username]: [...userChats, []] };
        });
        setCurrentSessionIndex((prev) => (allChats[username]?.length || 0));
    };

    const selectChat = (index) => {
        setCurrentSessionIndex(index);
    };

    return (
        <div className="page_header">

            <Sidebar
                chatHistoryList={allChats[username] || []}
                onSelectChat={selectChat}
                onNewChat={newChat}
            />
            <div className="page_container">
                <Navbar username={username} onLogout={onLogout} />
                <div className="chatbox">
                    <MessageList messages={messages} username={username} />
                    <ChatInput onSend={sendMessage} />
                </div>
            </div>
        </div>
    );
}
