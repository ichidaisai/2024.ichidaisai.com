import '../styles/Funding.css';

import ichipopo1 from '../assets/ichipoppo/ichipopo1.webp'
import ichipopo2 from '../assets/ichipoppo/ichipopo2.webp'
import ichipopo3 from '../assets/ichipoppo/ichipopo3.webp'
import ichipopo4 from '../assets/ichipoppo/ichipopo4.webp'

const supportersList1 = ['ヨモ']
const supportersList2 = ['タロウ', 'たか', 'oikawa']
const supportersList3 = [
    'ryukun', 'Haitii', 'YOKOYOKO', 'しんちゃん', 
    'あおいの母ちゃん', 'ギョンス', 'ゆたゆきママ', '画角斜め', '31boss', 
    'ぱぴこ', '情報科学部長', '31koho-boss', 'まさえちゃん', '統括', 
    'poco', 'r', 'MY', 'K.T', 'ざっく', 
    'はんちゃん', 'JpH', 'こあっさん', 'amaちゃん', 'chry'
];
const supportersList4 = [
    'いなさん', 'たにぱん', 'そのちゃん', 'キタノ', 'さかもと', 
    'ヒカル', 'いちはら', 'fish', 'ケン', 'ふふ', 
    'ひさし', '前川亜里(広報OB)', 'ゆずれもん', 'teko'
];
const supportersList5 = ['他50名']

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
                    <br />
                    精一杯努めてまいります。
                    <br />
                    今後とも暖かいご声援をどうぞよろしくお願いいたします。
                </p>
            </div>

            <div className="funding_amount_section">
                <span className="funding_amount_label">集まった金額</span>
                <span className="funding_amount">617,000 円</span>
                <span className="funding_amount_label2">(目標金額500,000円)</span>
            </div>

            <div className="supporters_count_section">
                <span className="supporters_count_label">支援者数</span>
                <span className="supporters_count">92 人</span>
            </div>

            <div className="ichipoppo-funding">
                {[ichipopo1, ichipopo2, ichipopo3].map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`喜ぶいちぽっぽ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className="supporters_titles">
                <div className="supporters_title">Spawn！プロジェクト支援者様一覧</div>
                <div className="supporters_title_caution">(敬称略)</div>
            </div>

            <div className="supporters_list">
                {[supportersList1, supportersList2, supportersList3, supportersList4, supportersList5].map((list, index) => (
                    <div key={index} className={`supporters_list${index + 1}`}>
                        {list.map((supporter, idx) => (
                            <div key={idx}>{supporter}</div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="funding_lastgreeting">
                <p>    
                    皆様の温かいご支援と応援に、心より感謝申し上げます。
                    <br />
                    頂いた支援金は、第31回市大祭のオリジナルグッズ制作やステージ企画の運営費として
                    <br />
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