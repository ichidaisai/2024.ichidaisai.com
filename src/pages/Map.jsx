import "../styles/Map.css";
import { Link } from "react-router-dom";

//カフェマップ画像
import gakuseikaikanmap from "../assets/gakuseikaikan.png";
import geijutsu2fmap from "../assets/geijutsu-2f.png";
import geijutsu3fmap from "../assets/geijutsu-3f.png";
import geijutsu4fmap from "../assets/geijutsu-4f.png";
import geijutsu5fmap from "../assets/geijutsu-5f.png";
import geijutsu6fmap from "../assets/geijutsu-6f.png";
import jouhoutou1fmap from "../assets/jouhoutou-1f.png";
import koudoumap from "../assets/koudou.png";
import kougitou1fmap from "../assets/kougitou-1f.png";
import kougitou3fmap from "../assets/kougitou-3f.png";
import kougitou4fmap from "../assets/kougitou-4f.png";
import kougitou5fmap from "../assets/kougitou-5f.png";

//模擬マップ画像
import mogimap1 from "../assets/mogia-map.png";
import mogimap2 from "../assets/mogib-map.png";

//カフェアイコン画像
import cafetto from "../assets/cafe_icon/cafetto.png";
import gokuraku from "../assets/cafe_icon/gokuraku.png";
import karuta from "../assets/cafe_icon/karuta.png";
import kimagurecoffee from "../assets/cafe_icon/kimagurecoffee.png";
import legokart from "../assets/cafe_icon/legokart.png";
import nuts from "../assets/cafe_icon/nuts.png";
import olive from "../assets/cafe_icon/olive.png";
import omotesenke from "../assets/cafe_icon/omotesenke.png";
import parapari from "../assets/cafe_icon/parapari.png";
import romp from "../assets/cafe_icon/romp.png";
import rossoebianco from "../assets/cafe_icon/rossoebianco.png";
import sadoubu from "../assets/cafe_icon/sadoubu.png";
import shabondama from "../assets/cafe_icon/shabondama.png";
import tenmon from "../assets/cafe_icon/tenmon.png";
//芸術1，2階
import abyad from "../assets/cafe_icon/abyad.png";
import babu from "../assets/cafe_icon/babu.png";
import creative from "../assets/cafe_icon/creative.png";
import dekoboko from "../assets/cafe_icon/dekoboko.png";
import fashionshow from "../assets/cafe_icon/fashionshow.png";
import hachiri from "../assets/cafe_icon/hachiri.png";
import koguma from "../assets/cafe_icon/koguma.png";
import kotochamu from "../assets/cafe_icon/kotochamu.png";
import potesara from "../assets/cafe_icon/potesara.png";
import shashinbu from "../assets/cafe_icon/shashinbu.png";
import untitled from "../assets/cafe_icon/untitled.png";
import urushi from "../assets/cafe_icon/uruuruurushi.png";
//芸術3階
import bijutsubu1 from "../assets/cafe_icon/bijutsubu.png";
import happiness from "../assets/cafe_icon/happiness.png";
import mochihako from "../assets/cafe_icon/mochihako.png";
import mohebi from "../assets/cafe_icon/mohebi.png";
import nainai from "../assets/cafe_icon/nainai.png";
import omurauzu from "../assets/cafe_icon/omuraizu.png";
import shimashimamo from "../assets/cafe_icon/shimashimamo.png";
import uchucafe from "../assets/cafe_icon/uchucafe.png";
//芸術4階
import cuicui from "../assets/cafe_icon/cuicui.png";
import kinkou from "../assets/cafe_icon/kinkou.png";
import meyomeyo from "../assets/cafe_icon/meyomeyo.png";
import tdcafe from "../assets/cafe_icon/tdcafe.png";
import tea from "../assets/cafe_icon/tea.png";
//芸術5階
import choukoku from "../assets/cafe_icon/choukoku.png";
import ichinari from "../assets/cafe_icon/ichinari.png";
import koa from "../assets/cafe_icon/koa.png";
import mimikiki from "../assets/cafe_icon/mimikiki.png";
import nihongatenji from "../assets/cafe_icon/nihonga-tenji.png";
import nihongayuushi from "../assets/cafe_icon/nihonga-yuushi.png";
//芸術6階
import drawers from "../assets/cafe_icon/drawers.png";
import aburae2 from "../assets/cafe_icon/aburae2.png";
import gesshitai from "../assets/cafe_icon/gesshitai.png";
import sannenaburae from "../assets/cafe_icon/sannenaburae.png";

//模擬アイコン画像
import fest from "../assets/mogi_icon/mogi-a1.png";
import imojo from "../assets/mogi_icon/mogi-a2.png";
import happycorn from "../assets/mogi_icon/mogi-a3.png";
import wangel from "../assets/mogi_icon/mogi-a4.png";
import tenchi from "../assets/mogi_icon/mogi-a5.png";
import manpukutei from "../assets/mogi_icon/mogi-a6.png";
import mokumoku from "../assets/mogi_icon/mogi-a7.png";
import nikumaki from "../assets/mogi_icon/mogi-a8.png";
import oden from "../assets/mogi_icon/mogi-a9.png";
import relic from "../assets/mogi_icon/mogi-a10.png";
import s2 from "../assets/mogi_icon/mogi-a11.png";
import dolce from "../assets/mogi_icon/mogi-a12.png";
import pasta from "../assets/mogi_icon/mogi-a13.png";
import satoya from "../assets/mogi_icon/mogi-a14.png";
import boy from "../assets/mogi_icon/mogi-a15.png";
import chicken from "../assets/mogi_icon/mogi-a16.png";
import flidaway from "../assets/mogi_icon/mogi-a17.png";
import yakitori from "../assets/mogi_icon/mogi-a18.png";
import bijutsubu2 from "../assets/mogi_icon/mogi-b1.png";
import amyon from "../assets/mogi_icon/mogi-b2.png";
import beads from "../assets/mogi_icon/mogi-b3.png";
import ichigeki from "../assets/mogi_icon/mogi-b4.png";
import aburaya from "../assets/mogi_icon/mogi-b5.png";
import takoyaki from "../assets/mogi_icon/mogi-b6.png";
import kyuudou from "../assets/mogi_icon/mogi-b7.png";
import nyarosu from "../assets/mogi_icon/mogi-b8.png";
import OB from "../assets/mogi_icon/mogi-b9.png";
import potato from "../assets/mogi_icon/mogi-b10.png";
import toritama from "../assets/mogi_icon/mogi-b11.png";


export const Map = () => {
    const Ashops = [
        {
            title: "A1",
            imgUrl: fest,
            imgdis: "fest出店",
            state: ""
        },
        {
            title: "A2",
            imgUrl: imojo,
            state: ""
        },
        {
            title: "A3",
            imgUrl: happycorn,
            state: ""
        },
        {
            title: "A4",
            imgUrl: wangel,
            state: ""
        },
        {
            title: "A5",
            imgUrl: tenchi,
            state: ""
        },
        {
            title: "A6",
            imgUrl: manpukutei,
            state: ""
        },
        {
            title: "A7",
            imgUrl: mokumoku,
            state: ""
        },
        {
            title: "A8",
            imgUrl: nikumaki,
            state: ""
        },
        {
            title: "A9",
            imgUrl: oden,
            state: ""
        },
        {
            title: "A10",
            imgUrl: relic,
            state: ""
        },
        {
            title: "A11",
            imgUrl: s2,
            state: ""
        },
        {
            title: "A12",
            imgUrl: dolce,
            state: ""
        },
        {
            title: "A13",
            imgUrl: pasta,
            state: ""
        },
        {
            title: "A14",
            imgUrl: satoya,
            state: ""
        },
        {
            title: "A15",
            imgUrl: boy,
            state: ""
        },
        {
            title: "A16",
            imgUrl: chicken,
            state: ""
        },
        {
            title: "A17",
            imgUrl: flidaway,
            state: ""
        },
        {
            title: "A18",
            imgUrl: yakitori,
            state: ""
        }

    ]
    const Bshops = [
        {
            title: "B1",
            imgUrl: bijutsubu2,
            state: ""
        },
        {
            title: "B2",
            imgUrl: amyon,
            state: ""
        },
        {
            title: "B3",
            imgUrl: beads,
            state: ""
        },
        {
            title: "B4",
            imgUrl: ichigeki,
            state: ""
        },
        {
            title: "B5",
            imgUrl: aburaya,
            state: ""
        },
        {
            title: "B6",
            imgUrl: takoyaki,
            state: ""
        },
        {
            title: "B7",
            imgUrl: kyuudou,
            state: ""
        },
        {
            title: "B8",
            imgUrl: nyarosu,
            state: ""
        },
        {
            title: "B9",
            imgUrl: OB,
            state: ""
        },
        {
            title: "B10",
            imgUrl: potato,
            state: ""
        },
        {
            title: "B11",
            imgUrl: toritama,
            state: ""
        }
    ]
    const gakuseikaikan = [
        {
            title: "➀",
            imgUrl: omotesenke,
            state: ""
        },
        {
            title: "➀",
            imgUrl: karuta,
            state: ""
        }
    ]
    const koudou = [
        {
            title: "➀",
            imgUrl: sadoubu,
            state: ""
        }
    ]
    const jouhoutou1f = [
        {
            title: "➀",
            imgUrl: cafetto,
            state: ""
        }
    ]
    const kougitou1f3f = [
        {
            title: "➀",
            imgUrl: romp,
            state: ""
        },
        {
            title: "➂",
            imgUrl: legokart,
            state: ""
        },
        {
            title: "➃",
            imgUrl: kimagurecoffee,
            state: ""
        }
    ]
    const kougitou4f = [
        {
            title: "➀",
            imgUrl: parapari,
            state: ""
        },
        {
            title: "➁",
            imgUrl: rossoebianco,
            state: ""
        },
        {
            title: "➂",
            imgUrl: shabondama,
            state: ""
        },
        {
            title: "➃",
            imgUrl: nuts,
            state: ""
        },
        {
            title: "➄",
            imgUrl: tenmon,
            state: ""
        },
        {
            title: "➅",
            imgUrl: gokuraku,
            state: ""
        }
    ]
    const kougitou5f = [
        {
            title: "➀",
            imgUrl: olive,
            state: ""
        }
    ]
    const geijutsu1f2f = [
        {
            title: "➀",
            imgUrl: untitled,
            state: ""
        },
        {
            title: "➁",
            imgUrl: fashionshow,
            state: ""
        },
        {
            title: "➂",
            imgUrl: urushi,
            state: ""
        },
        {
            title: "➃",
            imgUrl: potesara,
            state: ""
        },
        {
            title: "➄",
            imgUrl: creative,
            state: ""
        },
        {
            title: "➅",
            imgUrl: koguma,
            state: ""
        },
        {
            title: "➆",
            imgUrl: dekoboko,
            state: ""
        },
        {
            title: "➇",
            imgUrl: shashinbu,
            state: ""
        },
        {
            title: "➈",
            imgUrl: abyad,
            state: ""
        },
        {
            title: "➉",
            imgUrl: babu,
            state: ""
        },
        {
            title: "⑪",
            imgUrl: hachiri,
            state: ""
        },
        {
            title: "⑫",
            imgUrl: kotochamu,
            state: ""
        },
    ]
    const geijutsu3f = [
        {
            title: "➀",
            imgUrl: bijutsubu1,
            state: ""
        },
        {
            title: "➁",
            imgUrl: omurauzu,
            state: ""
        },
        {
            title: "➂",
            imgUrl: shimashimamo,
            state: ""
        },
        {
            title: "➃",
            imgUrl: mochihako,
            state: ""
        },
        {
            title: "➄",
            imgUrl: mohebi,
            state: ""
        },
        {
            title: "➅",
            imgUrl: nainai,
            state: ""
        },
        {
            title: "➆",
            imgUrl: happiness,
            state: ""
        },
        {
            title: "➇",
            imgUrl: uchucafe,
            state: ""
        }
    ]
    const geijutsu4f = [
        {
            title: "➀",
            imgUrl: cuicui,
            state: ""
        },
        {
            title: "➁",
            imgUrl: meyomeyo,
            state: ""
        },
        {
            title: "➂",
            imgUrl: kinkou,
            state: ""
        },
        {
            title: "➃",
            imgUrl: tdcafe,
            state: ""
        },
        {
            title: "➄",
            imgUrl: tea,
            state: ""
        }
    ]
    const geijutsu5f6f = [
        {
            title: "➀",
            imgUrl: nihongatenji,
            state: ""
        },
        {
            title: "➁",
            imgUrl: nihongayuushi,
            state: ""
        },
        {
            title: "➂",
            imgUrl: ichinari,
            state: ""
        },
        {
            title: "➃",
            imgUrl: choukoku,
            state: ""
        },
        {
            title: "➄",
            imgUrl: mimikiki,
            state: ""
        },
        {
            title: "➅",
            imgUrl: koa,
            state: ""
        },
        {
            title: "➆",
            imgUrl: aburae2,
            state: ""
        },
        {
            title: "➇",
            imgUrl: gesshitai,
            state: ""
        },
        {
            title: "➈",
            imgUrl: drawers,
            state: ""
        },
        {
            title: "➉",
            imgUrl: sannenaburae,
            state: ""
        },
    ]
    return (
        <div className="MAP">
            <div className="mogi">
                <div className="section-title">
                        <span>模擬出店</span>
                </div>
                <div className="mogi-a">
                    {<div className="mogi-a-map">
                        <h3>模擬出店A</h3>
                        <img className="mogi-map" src={mogimap1} alt="模擬出店Aマップ" />
                    </div>}
                    <div className="mogi-div">
                    {
                        Ashops.map((shopa)=>{
                        
                            return (
                            <div className="mogi-icon">
                                <p>{shopa.title}</p>
                                <img src={shopa.imgUrl} alt="出店" />
                            </div>
                            )
                        })
                    }
                    </div>
                </div>  
                <div className="mogi-b">
                    {<div className="mogi-b-map">
                        <h3>模擬出店B</h3>
                        <img className="mogi-map" src={mogimap2} alt="模擬出店Bマップ" />
                    </div>}
                    <div className="mogi-div">
                    {
                        Bshops.map((shopb)=>{
 
                            return (
                            <div className="mogi-icon">
                                <p>{shopb.title}</p>
                                <img src={shopb.imgUrl} alt="出店" />
                            </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            <div className="cafe">
                <div className="section-title">
                    <span>学生会館，講堂前，情報科学部棟，国際学部棟</span>
                </div>
                <div className="gakuseikaikan">
                    <h3>学生会館</h3>
                    <img className="cafe1-map" src={gakuseikaikanmap} alt="学生会館マップ" />
                    <div className="cafe2-container">
                        {
                            gakuseikaikan.map((shop1)=>{
    
                                return (
                                <div className="cafe-icon">
                                    <p>{shop1.title}</p>
                                    <img src={shop1.imgUrl} alt="出店" />
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
                {<div className="koudou">
                    <h3>講堂前</h3>
                    <div className="cafe1-container">
                        <img className="cafe1-map" src={koudoumap} alt="講堂前マップ" />
                        {
                            koudou.map((shop2)=>{
    
                                return (
                                <div className="cafe-icon">
                                    <p>{shop2.title}</p>
                                    <img src={shop2.imgUrl} alt="出店" />
                                </div>
                                )
                            })
                        }
                    </div>
                </div>}
                {<div className="jouhoutou1f">
                    <h3>情報科学部棟1F</h3>
                    <div className="cafe1-container">
                        <img className="cafe1-map" src={jouhoutou1fmap} alt="情報科学部棟マップ" />
                        {
                            jouhoutou1f.map((shop3)=>{
    
                                return (
                                <div className="cafe-icon">
                                    <p>{shop3.title}</p>
                                    <img src={shop3.imgUrl} alt="出店" />
                                </div>
                                )
                            })
                        }
                    </div>
                </div>}
                {<div className="kokusai">
                    <h3>国際学部棟（講義棟）1F,3F</h3>
                    <div className="cafe1-container">
                        <img className="kokusai1f-map" src={kougitou1fmap} alt="国際学部棟1Fマップ" />
                        <img className="kokusai3f-map" src={kougitou3fmap} alt="国際学部棟3Fマップ" />
                    </div>
                    <div className="cafe2-container">
                        {
                            kougitou1f3f.map((shop4)=>{
    
                                return (
                                <div className="cafe-icon">
                                    <p>{shop4.title}</p>
                                    <img src={shop4.imgUrl} alt="出店" />
                                </div>
                                )
                            })
                        }
                    </div>
                    <h3>国際学部棟（講義棟）4F</h3>
                    <img className="kokusai-map" src={kougitou4fmap} alt="国際学部棟4Fマップ" />
                    <div className="cafe2-container">
                        {
                            kougitou4f.map((shop5)=>{
    
                                return (
                                <div className="cafe-icon">
                                    <p>{shop5.title}</p>
                                    <img src={shop5.imgUrl} alt="出店" />
                                </div>
                                )
                            })
                        }
                    </div>
                    <h3>国際学部棟（講義棟）5F</h3>
                    <img className="kokusai-map" src={kougitou5fmap} alt="国際学部棟5Fマップ" />
                    <div className="cafe2-container">
                        {
                            kougitou5f.map((shop6)=>{
    
                                return (
                                <div className="cafe-icon">
                                    <p>{shop6.title}</p>
                                    <img src={shop6.imgUrl} alt="出店" />
                                </div>
                                )
                            })
                        }
                    </div>
                </div>}
                <div className="section-title">
                    <span>芸術学部棟</span>
                </div>
                {<div className="geijututou">
                    <h3>芸術学部棟1F,2F</h3>
                    <img className="geijutu1f2f-map" src={geijutsu2fmap} alt="芸術学部棟1F,2Fマップ" />
                    <div className="cafe2-container">
                        {
                            geijutsu1f2f.map((shop7)=>{
    
                                return (
                                <div className="cafe-icon">
                                    <p>{shop7.title}</p>
                                    <img src={shop7.imgUrl} alt="出店" />
                                </div>
                                )
                            })
                        }
                    </div>
                    <h3>芸術学部棟3F</h3>
                    <img className="geijutu3f-map" src={geijutsu3fmap} alt="芸術学部棟3Fマップ" />
                    <div className="cafe2-container">
                        {
                            geijutsu3f.map((shop8)=>{
    
                                return (
                                <div className="cafe-icon">
                                    <p>{shop8.title}</p>
                                    <img src={shop8.imgUrl} alt="出店" />
                                </div>
                                )
                            })
                        }
                    </div>
                    <h3>芸術学部棟4F</h3>
                    <img className="geijutu4f-map" src={geijutsu4fmap} alt="芸術学部棟4Fマップ" />
                    <div className="cafe2-container">
                        {
                            geijutsu4f.map((shop9)=>{
    
                                return (
                                <div className="cafe-icon">
                                    <p>{shop9.title}</p>
                                    <img src={shop9.imgUrl} alt="出店" />
                                </div>
                                )
                            })
                        }
                    </div>
                    <h3>芸術学部棟5F,6F</h3>
                    {/* <div className="cafe2-container"> */}
                    <img className="geijutu5f-map" src={geijutsu5fmap} alt="芸術学部棟5Fマップ" />
                    <img className="geijutu6f-map" src={geijutsu6fmap} alt="芸術学部棟6Fマップ" />
                    <div className="cafe3-container">
                        {
                                geijutsu5f6f.map((shop10)=>{
        
                                return (
                                <div className="cafe-icon">
                                    <p>{shop10.title}</p>
                                    <img src={shop10.imgUrl} alt="出店" />
                                </div>
                                )
                            })
                        }
                    </div>
                    {/* </div> */}
                </div>}
            </div>
        </div>
    );

};