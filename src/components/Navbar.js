import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default () => {
    return (
        <nav className="nav clearfix">
            <Link className="nav-link" to="/">Counter</Link>
            <Link className="nav-link" to="/todoList">TodoList</Link>
        </nav>
    )
}