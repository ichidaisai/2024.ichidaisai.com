import '../styles/Header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ichidaisai_logo_512 from '../assets/ichidaisai_logo_512.webp'
import { SlArrowRight } from 'react-icons/sl'
import { SlArrowDown } from 'react-icons/sl'

export const Header = () => {
    const [open, setOpen] = useState(false)
    const [guestOpen, setGuestOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const closeMenu = () => {
        setOpen(false)
        guestOpen(false)
    }
    const setGuestMenu = () => {
        setGuestOpen(!guestOpen)
    }

    return (
        <header>
            <Link to="/">
                <img
                    src={ichidaisai_logo_512}
                    alt="header-logo"
                    className="header-logo"
                />
            </Link>
            <nav>
                <ul className={`nav-list ${open ? 'open' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            HOME
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/guest" className="nav-link">
                            GUEST
                        </Link>
                        <ul className="dropmenu">
                            <li className="dropmenu-item">
                                <Link to="/guest">Arakezuri</Link>
                            </li>
                            <li className="dropmenu-item">
                                <Link to="/funding/guest">コラボ企画</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link to="/stage" className="nav-link">
                            STAGE
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/map" className="nav-link">
                            MAP
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            ABOUT
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/access" className="nav-link">
                            ACCESS
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/funding" className="nav-link">
                            FUNDING
                        </Link>
                    </li>
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
                        <li onClick={closeMenu}>
                            <Link to="/">
                                <span>HOME</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </Link>
                        </li>

                        <li>
                            <div className="drop_btn" onClick={setGuestMenu}>
                                <span>GUEST</span>
                                <span className="right">
                                    <SlArrowDown />
                                </span>
                            </div>

                            {/* プルダウン */}
                            <div
                                className={`drop_btn2 ${guestOpen ? 'active' : ''}`}
                            >
                                <ul className="dropmenu">
                                    <li className="dropmenu-item">
                                        <Link to="/guest" onClick={closeMenu}>
                                            <span className="left">
                                                Arakezuri
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="dropmenu-item">
                                        <Link to="/funding/guest" onClick={closeMenu}>
                                            <span className="left">
                                                コラボ企画
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="/stage" onClick={closeMenu}>
                                <span>STAGE</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/map" onClick={closeMenu}>
                                <span>MAP</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={closeMenu}>
                                <span>ABOUT</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/access" onClick={closeMenu}>
                                <span>ACCESS</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/funding" onClick={closeMenu}>
                                <span>FUNDING</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </Link>
                        </li>
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
