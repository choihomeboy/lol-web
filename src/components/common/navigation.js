import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'

const navLinks =[
    {
        title : 'Home',
        path : '/'
    },
    {
        title:'News',
        path: '/news'
    },
    {
        title : 'Technology',
        path: '/technology'
    },
    {
        title : 'Contact Us',
        path: '/contact-us'
    }

]

export default function Navigation ({user}) {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <nav className="site-navigation">
            <span className="menu-title">Meta GG</span>
            <div className={`menu-content-container ${menuActive && 'active'}`}> 
                <ul>
                    {navLinks.map( (link,index) =>(
                        <li key={index}>
                            <Link to = {link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <span className="menu-avatar-container">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </span>
                
            </div>
            <i className='ionicons icon ion-ios-menu' onClick={() => setMenuActive(!menuActive)}/>
        </nav>
    )
}

// menuactive && 'active' means if menuactive return active