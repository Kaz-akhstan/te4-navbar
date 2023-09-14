import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <a className="brand" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
                    <path d="M403.333-276H764v-252H403.333v252ZM146.666-160q-27 0-46.833-19.833T80-226.666v-506.668q0-27 19.833-46.833T146.666-800h666.668q27 0 46.833 19.833T880-733.334v506.668q0 27-19.833 46.833T813.334-160H146.666Zm0-66.666h666.668v-506.668H146.666v506.668Zm0 0v-506.668 506.668Z" />
                </svg>
            </a>
            <ul className="nav">
                <li className='nav-item'>
                    <Link className='nav-link' to={'/'}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to={'/about'}>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar