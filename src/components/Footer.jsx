import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer>
                <div>
                    <div>
                        <div>
                            <p>問い合わせ先</p>
                            <p>広島市立大学 大学祭実行委員会</p>
                            <p>
                                <span>
                                    〒 731-3194
                                </span>
                                <span>
                                    広島市安佐南区大塚東三丁目4番1号
                                </span>
                                <span>
                                    学生会館 2階 大祭室
                                </span>
                                <span>
                                    TEL & FAX:
                                    <Link href="tel:0828485443">
                                        (082) 848-5443
                                    </Link>
                                </span>
                                <span>
                                    電子メール: ichidaisai@outlook.jp
                                </span>
                            </p>
                            <p>&copy; 2024 広島市立大学 大学祭実行委員会</p>
                        </div>
                        <div>
                            <p>SNS で実行委員会をフォロー</p>
                            <Link href="#">
                                <img
                                    src="./img/x_icon.png"
                                    alt="ichidaisai-x"
                                ></img>
                            </Link>
                            <Link href="#">
                                <img
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
