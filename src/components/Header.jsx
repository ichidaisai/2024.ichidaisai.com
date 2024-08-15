import { useState } from "react";
import { Link } from "react-router-dom";
import ichidaisai_logo from "../assets/ichidaisai_logo.jpg"

export const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <header>
                <img
                    src={ichidaisai_logo}
                    alt="header-logo"
                    className="header-logo"
                />
                <nav>
                    <ul className="nav-list">
                        <Link href="./home.html">
                            <li>HOME</li>
                        </Link>
                        <Link href="./guest.html">
                            <li>GUEST</li>
                        </Link>
                        <Link href="./stage.html">
                            <li>STAGE</li>
                        </Link>
                        <Link href="./map.html">
                            <li>MAP</li>
                        </Link>
                        <Link href="./about.html">
                            <li>ABOUT</li>
                        </Link>
                        <Link href="./access.html">
                            <li>ACCESS</li>
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
                            <Link href="./home.html">
                                <li>HOME</li>
                            </Link>
                            <Link href="./stage.html">
                                <li>STAGE</li>
                            </Link>
                            <Link href="./map.html">
                                <li>MAP</li>
                            </Link>
                            <Link href="./about.html">
                                <li>ABOUT</li>
                            </Link>
                            <Link href="./access.html">
                                <li>ACCESS</li>
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
