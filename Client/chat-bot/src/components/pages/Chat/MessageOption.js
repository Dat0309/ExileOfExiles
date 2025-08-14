import React from 'react'
import './Chat.css'
export default function MessageOption({ onClick, children, title, note }) {
    return (
        <div className='MessageOption_container' onClick={onClick}>
            <h5 className="option_title">
                {children}
                {title}
            </h5>
            <p className="option_note">
                {note}
            </p>
        </div>
    )
}
