import '../styles/Header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ichidaisai_logo_512 from '../assets/ichidaisai_logo_512.webp'
import { SlArrowRight } from 'react-icons/sl'

export const Header = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }

    const closeMenu = () => {
        setOpen(false)
    }
    return (
        <header>
            <Link to="/">
                <img src={ichidaisai_logo_512} alt="header-logo" className="header-logo"/>
            </Link>
            <nav>
                <ul className={`nav-list ${open ? 'open' : ''}`}>
                    <Link to="/">
                        <li>HOME</li>
                    </Link>
                    <Link to="/guest">
                        <li>GUEST</li>
                    </Link>
                    <Link to="/stage">
                        <li>STAGE</li>
                    </Link>
                    <Link to="/pending">
                        <li>MAP</li>
                    </Link>
                    <Link to="/pending">
                        <li>ABOUT</li>
                    </Link>
                    <Link to="/access">
                        <li>ACCESS</li>
                    </Link>
                    <Link to="/funding">
                        <li>FUNDING</li>
                    </Link>
                </ul>

                <div
                    className={`toggle_btn ${open ? 'active' : ''}`}
                    onClick={handleOpen}
                    id="btn"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div
                    className={`nav-menu ${open ? 'active-nav-list' : 'none-nav-list'}`}
                >
                    <ul>
                        <Link to="/" onClick={closeMenu}>
                            <li>
                                <span>HOME</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                        <Link to="/guest" onClick={closeMenu}>
                            <li>
                                <span className="left">GUEST</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                        <Link to="/stage" onClick={closeMenu}>
                            <li>
                                <span className="left">STAGE</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                        <Link to="/pending" onClick={closeMenu}>
                            <li>
                                <span className="left">MAP</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                        <Link to="/pending" onClick={closeMenu}>
                            <li>
                                <span className="left">ABOUT</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                        <Link to="/access" onClick={closeMenu}>
                            <li>
                                <span className="left">ACCESS</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                        <Link to="/funding" onClick={closeMenu}>
                            <li>
                                <span className="left">FUNDING</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div
                    className={`${open ? 'mask' : 'mask-none'}`}
                    onClick={handleOpen}
                ></div>
            </nav>
        </header>
    )
}
