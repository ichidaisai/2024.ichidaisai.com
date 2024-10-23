import '../styles/Home_Guest.css'
import guest_glid_1 from '../assets/guest_glid_1.webp'
import guest_glid_2 from '../assets/guest_glid_2.webp'
import { Link } from 'react-router-dom'

const returnTop = () => {
    window.scrollTo({
        top: 0,
    })
}

export const Home_Guest = () => {
    return (
        <>
            <h2 className="section-title">ゲスト</h2>
            <div className="home_guest-content">
                <br />
                今年度の大学祭にはヒーローズジャーニーバンド
                <span>“Arakezuri”</span>と
                <br />
                元乃木坂46<span>”和田まあや”</span>＆舞台などで活躍中の
                <span>”藤井菜央”</span>が登場！
                <br />
                聞く人の心を惹きつけ、背中を押してくれる熱いステージと市大祭坂んじょ特別ステージをお楽しみに！
                <br />
                詳細はこちらからチェック！
            </div>

            <div className="home_guest-list">
                <Link
                    style={{ textDecoration: 'none' }}
                    to="/guest"
                    className="home_guest-item"
                    onClick={returnTop}
                >
                    <div className="home_guest-icon">
                        <img src={guest_glid_1} />
                    </div>
                    <div className="home_guest-description">
                        <p className="date">10/27</p>
                        <p className="date">13:30-14:10</p>
                        <h5 className="detail">学内野外ステージ</h5>
                    </div>
                </Link>
                <Link
                    style={{ textDecoration: 'none' }}
                    //to="/guest"
                    className="home_guest-item"
                    //onClick={returnTop}
                >
                    <div className="home_guest-icon">
                        <img src={guest_glid_2} />
                    </div>
                    <div className="home_guest-description">
                        <p className="date">10/26</p>
                        <p className="date">13:10-14:00</p>
                        <h5 className="detail">クラファンコラボ企画</h5>
                    </div>
                </Link>
            </div>
        </>
    )
}
