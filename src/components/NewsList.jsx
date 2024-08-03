import { Link } from "react-router-dom";

export const NewsList = () => {
    return(
        <>
        <div className="news">
            <ul className="news-list">
                <li class="item">
                    <a href="#guest">
                        <p className="date">2024/8/4</p>
                        <p className="title">今年のゲストはArakezuriに決定！</p>
                    </a>
                </li>
                <li class="item">
                    <Link href="#">
                        <p className="date">2024/6/28</p>
                        <p className="title">現在準備中です！随時更新しますのでもうしばらくお待ちください。</p>
                    </Link>
                </li>
            </ul>
        </div>
        </>
    )
}
