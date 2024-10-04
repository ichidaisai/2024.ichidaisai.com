import "../styles/Access.css"

export const Access = () => {
    return (
        <div className="access">
            <div className="text">
                <h2>アクセス</h2>
                <h3>アストラムライン</h3>
                <p>大塚駅下車 徒歩２５分</p>
                <h3>バス</h3>
                <p>
                    広島バスセンターより
                    <br />
                    ２番乗り場「くすの木台」
                    <br />
                    「市立大学前」下車
                    <br />
                    ４番乗り場「花の季台・こころ西風梅苑・こころ産業団地・こころ南中央」方面行き
                    <br />
                    「沼田料金所前(※)」下車 徒歩８分
                </p>
                <p>
                    ※「市立大学前」に止まる便もございます
                </p>
            </div>
            <div className='table'>
                <h3>広島電鉄バス 臨時時刻表</h3>
                <img src="src\assets\bus_table.jpg"/>
                <p><a href="https://www.hiroshima-cu.ac.jp/uploads/2023/10/02180f5651c14ec6aeed073782036045-20231011003039821.pdf">PDFはこちらから</a></p>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12888.087419815736!2d132.4186049951159!3d34.43753606139676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a9846b8b10471%3A0xb50adccc4687ad83!2z5bqD5bO25biC56uL5aSn5a2m!5e1!3m2!1sja!2sjp!4v1727829365634!5m2!1sja!2sjp" width={800} height={600}></iframe>
            </div>
        </div>
    );
}