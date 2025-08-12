import React from 'react'
import './layout.css'

export default function ChatHistory({ chatHistoryList, onSelectChat }) {
    return (
        <>
            <h3>Lịch sử chat</h3>
            <ul>
                {chatHistoryList.map((chat, index) => (
                    <li key={index} onClick={() => onSelectChat(index)}>
                        Phiên {index + 1} ({chat.length} tin nhắn)
                    </li>
                ))}
            </ul>
        </>
    )
}
