import React from 'react'
import './Sidebar.css'
export default function OptionMainItem({ className, children, name }) {
    return (
        <div className={`sidebar_feat ${className}`}>
            {children}
            <p>
                {name}
            </p>
        </div>
    )
}
