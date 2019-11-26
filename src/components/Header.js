import React from 'react'
import { Link } from 'react-router-dom'
// TODO: FOR TESTING 
const Header = () => {
    return (
        <div>
            Header
            <Link to="/category/edit">some Link if want</Link>
        </div>
    )
}

export default Header;