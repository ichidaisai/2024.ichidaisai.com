import '../styles/Karimonokyousou.css'
import karimono from '../assets/eventIcon/karimono_icon.png'
export const Karimonokyousou = () => {
    return (
        <>
            <div>
                <h3 className="section-title">借り物競争</h3>
                <img src={karimono} className="karimono-gazou" />
                <div className="bor">
                    指定されたモノや人を会場から探し出せ！スピードと創造力が勝負のカギ！
                    <br />
                    会場の皆さんが驚くようなお題や豪華賞品も用意しています！是非！ご参加くださ
                    い！
                    <br />
                    kikaku31th@outlook.jp までご応募お待ちしております！
                </div>
            </div>
        </>
    )
}
