import '../styles/Kehaigiri.css'
import kehaigiri_icon from '../assets/eventIcon/kehaigiri_icon.webp'
export const Kehaigiri = () => {
    return (
        <>
            <div>
                <div className="kehaigiri-top">気配斬り</div>
                <div className="icon">
                    <img src={kehaigiri_icon} />
                </div>
                <div className="Explanation">
                    参加者全員が目隠しをした状態で敵を斬るゲームです!!
                </div>
                <div className="SubTitle">頼れるのは、音と気配だけ!!</div>
                <div className="EventName">
                    全然違う方向へ棒を振り下ろしたり、相手は遠くにいるのに怯えていたり、
                    <br />
                    参加者本人も見てる人もハラハラわくわくできます★
                    <br />
                    最後まで勝ち続けると決勝まで行けて、優勝者は景品も貰えちゃう
                    <br />
                    対抗心MAX見応え・やり応えのあるものとなっております。
                </div>
                <div className="MailAddress">
                    kikaku31th@outlook.jp へ応募のご連絡お待ちしております!
                </div>
            </div>
        </>
    )
}
