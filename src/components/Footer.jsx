import { Link } from "react-router-dom";
import xLogo from "../assets/x_logo.png";
import instagramLogo from "../assets/instagram_logo.png";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-contact">
                    <h3>
                        お問い合わせ先
                        <br />
                        広島市立大学 大学祭実行委員会
                    </h3>
                    <div className="footer-contact-info">
                        <p>〒 731-3194</p>
                        <p>広島市安佐南区大塚東三丁目4番1号</p>
                        <p>学生会館 2階 大祭室</p>
                        <p>
                            TEL & FAX:
                            <Link href="tel:0828485443">(082) 848-5443</Link>
                        </p>
                        <p>電子メール: ichidaisai@outlook.jp</p>
                    </div>
                    {/* <p>&copy; 2024 広島市立大学 大学祭実行委員会</p> */}
                </div>
                <div className="footer-sns">
                    <h3>SNS で実行委員会をフォロー</h3>
                    <Link href="#">
                        <img
                            src={xLogo}
                            alt="ichidaisai-x"
                            className="sns-icon"
                        ></img>
                    </Link>
                    <Link href="#">
                        <img
                            src={instagramLogo}
                            alt="ichidaisai-instagram"
                            className="sns-icon"
                        ></img>
                    </Link>
                </div>
            </div>

            <p className="copy">&copy; 2024 広島市立大学 大学祭実行委員会</p>
        </footer>
    );
};
