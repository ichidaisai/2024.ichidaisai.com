import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
            <header>
                <div className="header">
                    <div className="header-left"></div>
                    <nav className="header-right">
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

                        <div className="inner">
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
                    </nav>
                    <div className="toggle-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="mask"></div>
                </div>
            </header>
        </>
    );
};
