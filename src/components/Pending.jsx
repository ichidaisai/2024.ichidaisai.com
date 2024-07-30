import { Link } from "react-router-dom";

export const Pending = () => {
    return (
        <>
            <div className="main-visual">
                <div className="main-contents">
                    <p className="heading">市大祭</p>
                    <p className="head-item">第31回広島市立大学大学祭</p>
                </div>
            </div>

            <div className="news">
                <ul className="news-list">
                    <li className="item">
                        <Link href="#">
                            <p className="date">2024/6/28</p>
                            <p className="title">
                                現在準備中です！随時更新しますのでもうしばらくお待ちください。
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};
