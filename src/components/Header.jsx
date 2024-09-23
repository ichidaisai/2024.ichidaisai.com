import { useState } from "react";
import { Link } from "react-router-dom";
import ichidaisai_logo_512 from "../assets/ichidaisai_logo_512.png";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <header>
                <img
                    src={ichidaisai_logo_512}
                    alt="header-logo"
                    className="header-logo"
                />
                <nav>
                    <ul className="nav-list">
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
                    <button
                        className={`openbtn ${open && "active"}`}
                        onClick={handleOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div
                        className={`${open ? "active-nav-list" : "none-nav-list"}`}
                    >
                        <ul>
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
                            <Link to="/pending">
                                <li>FUNDING</li>
                            </Link>
                        </ul>
                    </div>
                    <div
                        className={`${open ? "mask" : "mask-none"}`}
                        onClick={handleOpen}
                    ></div>
                </nav>
            </header>
        </>
    );
};
