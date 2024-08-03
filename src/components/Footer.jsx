import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="container footer-content mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="h5">問い合わせ先</p>
                            <p className="h4">広島市立大学 大学祭実行委員会</p>
                            <p>
                                <span className="d-inline-block">
                                    〒 731-3194
                                </span>
                                <span className="d-inline-block">
                                    広島市安佐南区大塚東三丁目4番1号
                                </span>
                                <span className="d-inline-block">
                                    学生会館 2階 大祭室
                                </span>
                                <span className="d-block">
                                    TEL & FAX:
                                    <Link href="tel:0828485443">
                                        (082) 848-5443
                                    </Link>
                                </span>
                                <span className="d-block">
                                    電子メール: ichidaisai@outlook.jp
                                </span>
                            </p>
                            <p>&copy; 2024 広島市立大学 大学祭実行委員会</p>
                        </div>
                        <div className="col">
                            <p className="h4">SNS で実行委員会をフォロー</p>
                            <Link href="#">
                                <img
                                    className="sns-icon"
                                    src="./img/x_icon.png"
                                    alt="ichidaisai-x"
                                ></img>
                            </Link>
                            <Link href="#">
                                <img
                                    className="sns-icon"
                                    src="./img/instagram_icon.png"
                                    alt="ichidaisai-instagram"
                                ></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
