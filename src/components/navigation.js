import React from 'react'
import {Link} from 'react-router-dom'

const navLinks =[
    {
        title : 'Home',
        path : '/'
    },
    {
        title : 'Technology',
        path: '/technology'
    },
    {
        title : 'Contact Us',
        path: '/contact-us'
    },
    {
        title:'Login',
        path: '/login'
    }

]

export default function Navigation () {
    return (
        <nav className="site-navigation">
            <span className="menu-title">My React Blog</span>
            <ul>
                {navLinks.map( (link,index) =>(
                    <li key={index}>
                        <Link to = {link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
