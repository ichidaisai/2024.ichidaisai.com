import "../styles/Mainvisual.css";

export const Mainvisual = () => {
    return (
        <>
            <title>広島市立大学 第31回 大学祭</title>
            <img className="home-visual" src="./img/header.png" alt=""></img>
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
        </>
    );
};
