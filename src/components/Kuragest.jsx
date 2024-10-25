import '../styles/Kuragest.css'
import kuragest_cover from '../assets/Kuragest.webp'

export const Kuragest = () => {
    return (
        <div className="kuraguest">
            <h2>クラファンコラボ企画</h2>
            <div className="kura center">
                <p>
                    広島の頑張る学生を応援する企画
                    <br />
                    【坂道でおじんじょ×市大祭】
                </p>
                <p>
                    <span className="guest-span">
                        10月26日（日）13:10〜14:00
                    </span>
                    <br />
                    <br />
                    野外ステージ
                </p>
                <img src={kuragest_cover} alt="坂道おじんじょの宣材写真" />
            </div>
            <div className="content center">
                <g>
                    広島の頑張る学生を応援する企画
                    <br />
                    【坂道でおじんじょ×市大祭】
                    <br />
                    のコラボステージに
                    <br />
                    元乃木坂46の和田まあやさんと
                    <br />
                    舞台などで活躍する藤井菜央さんが遊びに来てくれます！
                    <br />
                    テレビ番組とのコラボ企画ですので
                    <br />
                    ぜひお越しください
                </g>
            </div>
        </div>
    )
}
