import "../styles/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ichidaisai_logo_512 from "../assets/ichidaisai_logo_512.png";
import { SlArrowRight } from "react-icons/sl";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <header>
            <img
                src={ichidaisai_logo_512}
                alt="header-logo"
                className="header-logo"
            />

            <nav>
                <ul className={`nav-list ${open ? "open" : ""}`}>
                    <Link to="/">
                        <li>HOME</li>
                    </Link>
                    <Link to="/guest">
                        <li>GUEST</li>
                    </Link>
                    <Link to="/pending">
                        <li>STAGE</li>
                    </Link>
                    <Link to="/pending">
                        <li>MAP</li>
                    </Link>
                    <Link to="/pending">
                        <li>ABOUT</li>
                    </Link>
                    <Link to="/pending">
                        <li>ACCESS</li>
                    </Link>
                    <Link to="/funding">
                        <li>FUNDING</li>
                    </Link>
                </ul>

                <div
                    className={`toggle_btn ${open ? "active" : ""}`}
                    onClick={handleOpen}
                    id="btn"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div
                    className={`nav-menu ${
                        open ? "active-nav-list" : "none-nav-list"
                    }`}
                >
                    <ul>
                        <Link to="/">
                            <li>
                                <span>HOME</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                        <Link to="/guest">
                            <li>
                                <span className="left">GUEST</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                        <Link to="/stage">
                            <li>
                                <span className="left">STAGE</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                        <Link to="/pending">
                            <li>
                                <span className="left">MAP</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                        <Link to="/pending">
                            <li>
                                <span className="left">ABOUT</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                        <Link to="/access">
                            <li>
                                <span className="left">ACCESS</span>
                                <span className="right">
                                    <SlArrowRight />
                                </span>
                            </li>
                        </Link>
                        <Link to="/funding">
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
                    className={`${open ? "mask" : "mask-none"}`}
                    onClick={handleOpen}
                ></div>
            </nav>
        </header>
    );
};
