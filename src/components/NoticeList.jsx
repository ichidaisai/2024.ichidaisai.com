import '../styles/NoticeList.css'
import nosake from '../assets/nosake.webp'
import kinen from '../assets/kinen.webp'
import nopet from '../assets/nopet.webp'

export const NoticeList = () => {
    const pdfDownloadUrl = 'public/2024102627.pdf'
    const handleClick = () => {
        window.open(pdfDownloadUrl, '_blank')
    }

    return (
        <>
            <div className="background">
                <h2 className="section-title">注意事項</h2>
                <div className="notice">
                    <p>大学祭に来られる際の注意事項は以下になります。</p>
                    <ul className="notice-list">
                        <li>敷地内全面禁煙</li>
                        <li>敷地内全面飲酒禁止、酒類持ち込み不可</li>
                        <li>ペットとの来場禁止（盲導犬など介助犬は除く）</li>
                        <li>公共交通機関のご利用のお願い</li>
                    </ul>

                    <div className="notice-picture">
                        <div>
                            <img src={nosake} alt="no-alcohol" />
                        </div>
                        <div>
                            <img src={kinen} alt="no-smoke" />
                        </div>
                        <div>
                            <img src={nopet} alt="no-pet" />
                        </div>
                    </div>

                    <div className="text">
                        大学祭当日は、駐車場の混雑が予想されます。
                        <br />
                        一般来場者の皆様には、できるだけバスなどの公共交通機関をご利用いただくようお願い申し上げます。
                        <br />
                        バスの増便に関する詳しい情報は、こちらをご覧ください。
                        <div
                            className="bus-schedule"
                            style={{ cursor: 'pointer' }}
                            onClick={handleClick}
                        >
                            ＞広島市立大学10/26,27臨時時刻表
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
