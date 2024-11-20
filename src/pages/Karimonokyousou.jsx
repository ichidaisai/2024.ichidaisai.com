import '../styles/Karimonokyousou.css'
import karimono from '../assets/eventIcon/karimono_icon.webp'
export const Karimonokyousou = () => {
    return (
        <>
            <div className="karimono-visual">
                <div className="karimono-title">借りモノ協走 in HCU</div>
            </div>
            <div>
                <img src={karimono} className="karimono-gazou" />
                <div className="bor">
                    指定されたモノや人を会場から探し出せ！
                    <br />
                    スピードと創造力が勝負のカギ！
                    <br />
                    会場の皆さんが驚くようなお題や豪華賞品も用意しています！
                    <br />
                    是非！ご参加ください！
                </div>
            </div>
        </>
    )
}
