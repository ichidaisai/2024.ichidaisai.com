import '../styles/Guest.css'
import guest_tyuuizikou from '../assets/Arakezurityuuizikou.webp'
import guest_cover from '../assets/guest_cover.webp'

export const Guest = () => {
    return (
        <div className="guest">
            <h2>ゲストステージ</h2>
            <div className="lead_container center">
                <p className="lead">
                    今年のゲストは<span>Arakezuri</span>に決定！
                </p>
                <p>
                    <span className="guest-span">
                        10月27日（日）13:30〜14:10
                    </span>
                </p>
                <img src={guest_cover} alt="Arakezuriの宣材写真" />
            </div>
            <div className="content center">
                <p>
                    聞く人の心を惹きつけ、
                    <br />
                    背中を押してくれる
                    <br />
                    ヒーローズジャーニーバンド<span>“Arakezuri”</span>が<br />
                    市大祭に登場！
                    <br />
                    彼らにしか形にできない熱狂と轟音、
                    <br />
                    そして日々進化していく
                    <br />
                    パフォーマンスを見逃すなッ！
                    <br />
                </p>
            </div>
            <div className="about_container center">
                <h3>ステージ</h3>
                <ul>
                    <li>10月27日（日）13:30〜14:10</li>
                    <li>学内野外ステージ</li>
                </ul>
                <h3>プロフィール</h3>
                <p>
                    2017 年に結成。滋賀県を拠点に活動するロックバンド。
                    <br />
                    メンバーは白井竣馬(Vo.Gt) 石坂亮輔(Gt.Cho) 宇野智紀(Ba.Cho)
                    椿佑輔(Dr.Cho) の4名で構成。
                </p>
                <a href="https://arakezurishiga.com" className="link">
                    公式サイト
                </a>
                <h3>注意事項</h3>
                <img src={guest_tyuuizikou} alt="Arakezuriの注意事項" />
            </div>
        </div>
    )
}
