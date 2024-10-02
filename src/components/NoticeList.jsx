import "../styles/NoticeList.css";
import nosake from "../assets/nosake.png";
import kinen from "../assets/kinen.png";
import nopet from "../assets/nopet.png";

export const NoticeList = () => {
    return (
        <>
            <h2 className="section-title">注意事項</h2>
            <div className="tyuuizikou">
                <p>大学祭に来られる際の注意事項は以下になります．</p>
                <ul className="notice-list">
                    <li>敷地内全面禁煙</li>
                    <li>敷地内での飲酒禁止</li>
                    <li>敷地内への酒類の持込禁止</li>
                    <li>ペット持込禁止（盲導犬など介助犬は除く）</li>
                    <li>
                        新型コロナウイルスなど，感染症への基本的な対策のお願い
                    </li>
                    <li>公共交通機関のご利用のお願い</li>
                </ul>
            </div>
            <div className="notice-picture">
                <div>
                    <img src={nosake} alt="noalcohol" />
                </div>
                <div>
                    <img src={kinen} alt="nosmoke" />
                </div>
                <div>
                    <img src={nopet} alt="nopet" />
                </div>
            </div>
        </>
    );
};
