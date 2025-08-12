import './layout.css'

export default function Navbar({ onLogout }) {
    return (
        <div className="navbar">
            <div></div>
            <button onClick={onLogout}>Đăng xuất</button>
        </div>
    );
}
