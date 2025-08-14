import { useState } from "react";
import './common.css'

export default function Input({
    type,
    placeholder,
    value,
    onChange,
    showToggle = false }) {
    const [showPassword, setShowPassword] = useState(false);
    const handleToggle = () => {
        setShowPassword(!showPassword);
    };
    const inputType = type === "password" && showPassword ? "text" : type;
    return (
        <div className="form-group">
            <div className="input-wrapper">
                <input
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {showToggle && (
                    <button
                        type="button"
                        className="show-btn"
                        onClick={handleToggle}
                    >
                        {showPassword ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}
                    </button>
                )}
            </div>

        </div>
    )
}
