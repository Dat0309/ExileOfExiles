import React from 'react'
import './common.css'

export default function Button({ children, type, className }) {
    return (
        <button className={`btn ${className}`} type={type}>{children}</button>
    )
}
