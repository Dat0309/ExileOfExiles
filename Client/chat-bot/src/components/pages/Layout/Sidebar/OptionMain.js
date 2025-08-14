import React from 'react'
import OptionMainItem from './OptionMainItem'

export default function OptionMain() {
    return (
        <div className='main_feat'>
            <OptionMainItem name="Home">
                <i className="fa-solid fa-house"></i>
            </OptionMainItem>
            <OptionMainItem name="Prompt Library">
                <i className="fa-solid fa-book-atlas"></i>
            </OptionMainItem>
            <OptionMainItem name="Plugins">
                <i className="fa-solid fa-teeth"></i>
            </OptionMainItem>
        </div>
    )
}
