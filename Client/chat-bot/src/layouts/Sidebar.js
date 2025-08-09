export default function Sidebar({ chatHistoryList, onSelectChat, onNewChat }) {
    return (
        <div className="sidebar">
            <button onClick={onNewChat}>+ Tạo đoạn chat mới</button>
            <h3>Lịch sử chat</h3>
            <ul>
                {chatHistoryList.map((chat, index) => (
                    <li key={index} onClick={() => onSelectChat(index)}>
                        Phiên {index + 1} ({chat.length} tin nhắn)
                    </li>
                ))}
            </ul>
        </div>
    );
}
