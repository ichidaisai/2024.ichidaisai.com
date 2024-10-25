import '../styles/Bingo.css'
import bingotori from '../assets/eventIcon/bingo_icon.webp'

export const Bingo = () => {
    return (
        <>
            <div>
                <div className="bingo-title">ビンゴ大会</div>
                <div className="bingo-img">
                    <img src={bingotori} />
                </div>
                <div className="bingo-text">
                    ichidai_sai 毎年恒例ビンゴ大会🎁!!
                    <br />
                    ビンゴカードは、大学祭実行委員会が行なっている
                    <br />
                    模擬店の利用者と市大祭のグッズを購入された方に配布しております!
                    <br />
                    豪華景品を獲得できるチャンスがビンゴ大会に必要なのは運だけです。
                    <div className="emphasis">運がすべて!!</div>
                    たくさんのご参加お待ちしております♪
                    <br />
                    ● 日時10/26(土) 17:10~17:40
                    <br />
                    ● 場所 メインステージ
                </div>
            </div>
        </>
    )
}
