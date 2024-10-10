import "../styles/Stage.css";
import time_table_1day from "../assets/TimeTable_1026.png";
import time_table_2day from "../assets/TimeTable_1027.png";
import { Link as Scroll } from "react-scroll";

export const Stage = () => {
    return (
        <div className="stage">
            <h2>タイムテーブル</h2>
            <div className="stage_item">
                <Scroll to="day1" smooth={true} offset={-80}>
                    <span>DAY1</span>
                </Scroll>
                <Scroll to="day2" smooth={true} offset={-80}>
                    <span>DAY2</span>
                </Scroll>
            </div>
            <div className="stage_main">
                <div className="day1">
                    <h3>１日目</h3>
                    <img src={time_table_1day} alt="10/26のタイムテーブル" />
                </div>
                <div className="day2">
                    <h3>２日目</h3>
                    <img src={time_table_2day} alt="10/27のタイムテーブル" />
                </div>
            </div>
        </div>
    );
};
