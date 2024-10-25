import { useNavigate } from 'react-router-dom';
import '../styles/NoticeList.css'
import nosake from '../assets/nosake.webp'
import kinen from '../assets/kinen.webp'
import nopet from '../assets/nopet.webp'

export const NoticeList = () => {
    const navigate = useNavigate();  

    const handleClick = () => {
        navigate('/access');  
    };

    return (
        <>
            <div className="background">
                <h2 className="section-title">注意事項</h2>
                <div className="notice">
                    <p>大学祭に来られる際の注意事項は以下になります。</p>
                    <ul className="notice-list">
                        <li>敷地内全面禁煙</li>
                        <li>敷地内全面飲酒禁止、酒類の持ち込み不可</li>
                        <li>ペット同伴禁止（盲導犬など介助犬は除く）</li>
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
                        当日のアクセスについては、こちらをご覧ください。
                        <h5 
                        className="text-switch"
                        style={{cursor: 'pointer'}}
                        onClick={handleClick}
                        >
                            アクセス情報はこちら
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}
