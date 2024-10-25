import '../styles/Bingo.css'
import bingotori from '../assets/eventIcon/bingo_icon.webp'

export const Bingo = () => {
    return (
        <>
            assets
            <div>
                <div className="stamp-title">ビンゴ大会</div>
                <div className="bb">
                    <img src={bingotori} />
                </div>
                <div className="aa">
                    ichidai_sai 毎年恒例ビンゴ大会🎁!!
                    <br />
                    <br />
                    ビンゴカードは、大学祭実行委委員会が行なっている
                    <br />
                    模擬店の利用者と市大祭のグッズを購入された方に配布しております!
                    <br />
                    豪華景品を獲得できるチャンスがビンゴ大会に必要なのは運だけです。
                    <div className="cc">運がすべて!!</div>
                    たくさんのご参加お待ちしております♪
                    <br />
                    <br />● 日時10/26(土) 17:10~17:40
                    <br />
                    <br />● 場所 メインステージ
                    <br />
                    <br />
                    なにか質問ございましたら kikaku31th@outlook.jp
                    までご連絡ください!
                </div>
            </div>
        </>
    )
}
