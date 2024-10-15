import '../styles/Mainvisual.css'
import mainvisual from '../assets/mainvisual.png'

export const Mainvisual = () => {
    return (
        <div className="mainvisual">
            <title>広島市立大学 第31回 大学祭</title>
            <img className="home-visual" src={mainvisual} alt="mainvisual" />
            <h2 className="datetime">
                <span>31st</span>
                <br />
                <span className="colored">I</span>CHIDAISAI
                <br />
                <span className="colored">F</span>ESTIVAL
                <br />
                <span className="colored">10/26(Sat.), 10/27(Sun.)</span>
                <br />
                <span className="colored">10:00 ~ 20:00</span>
            </h2>
        </div>
    )
}
