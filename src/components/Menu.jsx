import './Menu.css'
import React from 'react';
import  { Link } from 'react-router-dom';
const Menu = props => (
    <aside className = "Menu">
        <nav>
            <ul>
                <li>
                   <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "Technology">Technology</Link>
                </li>
                <li>
                    <Link to = "Machinery">Machinery</Link>
                </li>
                <li>
                    <Link to = "About">About</Link>
                </li>
            </ul>
        </nav>
        
    </aside>
)


export default Menu;