import "../styles/StampRally.css";
import stamp1 from "../assets/stamp1.png";
import stamp2 from "../assets/stamp2.png";

import stamp4_1 from "../assets/stamp4_1.png";
import stamp4_2 from "../assets/stamp4_2.png";
import stamp5 from "../assets/stamp5.png";
import stamp10 from "../assets/stamp10.png";

export const StampRally = () => {
    return (
        <>
            <div className="stamp-visual">
                <div className="stamp-title">
                    市大祭スタンプラリー
                </div>
            </div>
            <p className="stamp-description">
                市大祭でスタンプラリーを開催！！！
                <br />
                ゴールした方には豪華景品が！
                台紙はパンフレットのうらをご覧ください！！
            </p>

            <div className="stepbar">
                <div className="step">
                    <div className="step-title">
                        <div className="step-num">
                            <span>1</span>
                        </div>
                        <p className="title">パンフレットの裏を確認しよう！</p>
                    </div>
                    <div className="step-txt">
                        <span className="txt">
                            まずはパンフレットの裏を確認しよう！
                            <br />
                            次のステップに進むためのヒントが見つかるかも！
                        </span>
                        <div className="step-img">
                            <img src={stamp1} />
                        </div>
                    </div>
                    <span className="step-line"></span>
                </div>

                <div className="step">
                    <div className="step-title">
                        <div className="step-num">
                            <span>2</span>
                        </div>
                        <p className="title">目的地へレッツゴー！</p>
                    </div>
                    <div className="step-txt">
                        <span className="txt">
                            いざ目的地へ！パンフレットを頼りにスタート！
                        </span>
                        <div className="step-img">
                            <img src={stamp2} />
                        </div>
                    </div>
                    <span className="step-line"></span>
                </div>

                <div className="step">
                    <div className="step-title">
                        <div className="step-num">
                            <span>3</span>
                        </div>
                        <p className="title">スタンプを集めよう！</p>
                    </div>
                    <div className="step-txt">
                        <span className="txt">
                            各目的地でスタンプをゲット！
                        </span>
                        <div className="step-img">
                            <img src={stamp5} />
                        </div>
                    </div>
                    <span className="step-line"></span>
                </div>

                <div className="step">
                    <div className="step-title">
                        <div className="step-num">
                            <span>4</span>
                        </div>
                        <p className="title">
                            パンフレットをかざして、次の目的地へGO！
                        </p>
                    </div>
                    <div className="step-txt">
                        <span className="txt">
                            おいてあるクリアファイルにパンフレットをかざして、印のある場所を目指そう！
                            <br />
                            次のスタンプの場所がすぐにわかるよ！
                        </span>
                        <div className="step-img">
                            <img src={stamp4_1} />
                            <img src={stamp4_2} />
                        </div>
                    </div>
                    <span className="step-line"></span>
                </div>

                <div className="step">
                    <div className="step-title">
                        <div className="step-num">
                            <span>5</span>
                        </div>
                        <p className="title">景品をゲットしよう！</p>
                    </div>
                    <div className="step-txt">
                        <span className="txt">
                            全てのスタンプを集めたら、正面玄関で景品をもらおう！
                            <br />
                            ゴールした方には豪華景品が！？？
                        </span>
                        <div className="step-img">
                            <img src={stamp10} />
                        </div>
                    </div>
                    <span className="step-line"></span>
                </div>
            </div>
        </>
    );
};
