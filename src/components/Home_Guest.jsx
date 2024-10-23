import '../styles/Home_Guest.css'
import guest_glid from '../assets/guest_glid.webp'
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
                <span>“Arakezuri”</span>が登場
                <br />
                聞く人の心を惹きつけ、背中を押してくれる熱いステージを目に焼き付けろ！
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
                        <img src={guest_glid} />
                    </div>
                    <div className="home_guest-description">
                        <p className="date">10/27</p>
                        <p className="date">13:30-14:10</p>
                        <h5 className="place">学内野外ステージ</h5>
                    </div>
                </Link>
            </div>
        </>
    )
}
