import { useState, useEffect } from "react";
import "./pages.css";
import SlideShow from "../components/pages/Login/Slide";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { text: "Quản lý công việc dễ dàng và nhanh chóng." },
        { text: "Theo dõi tiến độ dự án mọi lúc mọi nơi." },
        { text: "Báo cáo chi tiết và phân tích dữ liệu." }
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        if (email.trim() && password.trim()) {
            localStorage.setItem("email", email);
            onLogin(email);
        }
    };

    // Tự động chuyển slide mỗi 3 giây
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="login-container">
            {/* Form đăng nhập */}
            <div className="login-box">
                <div>
                    <h2 className="login-title">WELCOME TO ...!</h2>
                    <p className="login-intro">
                        trợ lý cho người chơi Path of Exile. Hãy đăng nhập tài khoản Path of Exile của bạn để tiếp tục.
                    </p>
                </div>
                <form onSubmit={handleLogin}>

                    <div className="login-form">
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Nhập email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="Nhập mật khẩu..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            showToggle={true}
                        />
                    </div>

                    {/* 
                    <div className="forgot-password">
                        <a href="#">Forgot password?</a>
                    </div> */}

                    <Button type="submit">
                        Đăng nhập
                    </Button>
                </form>
            </div>

            {/* Hộp slide giới thiệu */}
            <SlideShow />
        </div>
    );
}
