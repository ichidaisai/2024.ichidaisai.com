import '../styles/Funding.css'

import ichipopo1 from '../assets/ichipoppo/ichipopo1.webp'
import ichipopo2 from '../assets/ichipoppo/ichipopo2.webp'
import ichipopo3 from '../assets/ichipoppo/ichipopo3.webp'
import ichipopo4 from '../assets/ichipoppo/ichipopo4.webp'

export const Funding = () => {
    return (
        <div className="funding">
            <h2>クラウドファンディング結果報告</h2>
            <div className="funding_greeting">
                <p>
                    今年の市大祭のテーマ「Spawn」には、「化学反応を起こす」という想いを込めています。
                    <br />
                    私たちは、多くの方々とともに新しい化学反応を生み出すため、
                    <br />
                    クラウドファンディングという新たな挑戦に踏み出しました。
                    <br />
                    支えてくださったすべての方のおかげで、私たちの挑戦が実を結び、
                    <br />
                    記念すべき市大祭を無事に開催することができました。
                    <br />
                    これからも、広島市立大学と市大祭が皆様にとって身近であり続けられるよう、
                    精一杯努めてまいります。
                    <br />
                    今後とも暖かいご声援をどうぞよろしくお願いいたします。
                </p>
            </div>

            <div className="funding_amount_section">
                <span className="funding_amount_label">集まった金額</span>
                <div className="funding_amount">617,000 円</div>
                <span className="funding_amount_label2">
                    (目標金額500,000円)
                </span>
            </div>

            <div className="supporters_count_section">
                <span className="supporters_count_label">支援者数</span>
                <div className="supporters_count">92 人</div>
            </div>

            <div className="ichipoppo-funding">
                <div>
                    <img src={ichipopo1} alt="喜ぶいちぽっぽ1" />
                </div>
                <div>
                    <img src={ichipopo2} alt="喜ぶいちぽっぽ2" />
                </div>
                <div>
                    <img src={ichipopo3} alt="喜ぶいちぽっぽ3" />
                </div>
            </div>

            <div className="suppoters_titles">
                <div className="suppoters_title">
                    Spawn！プロジェクト支援者様一覧
                </div>
                <div className="suppoters_title_caution">(敬称略)</div>
            </div>

            <div className="supporters_list">
                <div className="supporters_list1">ヨモ</div>
                <div className="supporters_list2">タロウ　たか　oikawa</div>
                <div className="supporters_list3">
                    <p>
                        第31回市大祭愛してるよ委員会　ryukun　
                        <br />
                        Haitii　YOKOYOKO　
                        <br />
                        しんちゃん　あおいの母ちゃん　ギョンス　
                        <br />
                        ゆたゆきママ　画角斜め　31boss　
                        <br />
                        ぱぴこ　しごでき企画局長応援団員　
                        <br />
                        情報科学部長　31koho-boss　まさえちゃん　
                        <br />
                        統括　poco　r　MY　K.T　
                        <br />
                        ざっく　はんちゃん　JpH　
                        <br />
                        こあっさん　amaちゃん　chry　
                    </p>
                </div>
                <div className="supporters_list4">
                    いなさん　たにぱん　そのちゃん　キタノ　さかもと　ヒカル　
                    <br />
                    いちはら　fish　ケン　ふふ　ひさし　前川亜里(広報OB)　
                    <br />
                    ゆずれもん　teko　
                    <br />
                    他48名
                </div>
            </div>

            <div className="funding_lastgreeting">
                <p>
                    皆様の温かいご支援と応援に、心より感謝申し上げます。
                    頂いた支援金は、第31回市大祭のオリジナルグッズ制作やステージ企画の運営費として
                    大切に活用させていただきました。
                </p>
            </div>

            <div className="ichipoppo-funding">
                <div>
                    <img src={ichipopo4} alt="お礼をするいちぽっぽ" />
                </div>
            </div>
        </div>
    )
}
