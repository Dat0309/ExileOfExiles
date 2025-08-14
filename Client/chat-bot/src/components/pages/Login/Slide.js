import { useState, useEffect } from "react";
import "./Login.css";

export default function SlideShow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "url('https://picsum.photos/id/1018/1000/600')",
            text: "Hỏi/đáp kiến thức game"
        },
        {
            image: "url('https://picsum.photos/id/1025/1000/600')",
            text: "Kết nối tài khoản PoE để cá nhân hoá"
        },
        {
            image: "url('https://picsum.photos/id/1003/1000/600')",
            text: "Cung cấp tiện ích qua PoE APIs"
        }
    ];

    // Tự động chuyển slide mỗi 3 giây
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div
            className="login-slide"
            style={{ backgroundImage: slides[currentSlide].image }}
        >
            <div className="slide-text">{slides[currentSlide].text}</div>
            <div className="dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
