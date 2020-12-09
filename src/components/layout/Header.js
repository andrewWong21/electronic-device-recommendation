import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Survey Questions </h1>
            <Link style={linkStyle} to="/test1">Home</Link> | <Link style={linkStyle} to="/test2">Test Page</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    border: '4px black solid',
    borderBottom: 'none'    
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
