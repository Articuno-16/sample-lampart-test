import { useState } from 'react'

function Navbar() {
    const menu = ['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT']
    const [isExpand, setIsExpand] = useState(false);

    return (
        <div className='navbar'>
            <button className="hamburger" onClick={() => setIsExpand(!isExpand)} >📂</button>
            <div 
                className={isExpand ? "navbar-nav navigation-menu expanded" : "navbar-nav navigation-menu"} 
                style={{zIndex: 111}}
            >
                {menu.map(item => <a key={item} href={`${item}`}>{item}</a>)}
            </div>
        </div>
    )
}

export default Navbar;