import "../styles/Map.css";
import { Link } from "react-router-dom";

//カフェマップ画像
import gakuseikaikan from "../assets/gakuseikaikan.png";
import geijutsu2f from "../assets/geijutsu-2f.png";
import geijutsu3f from "../assets/geijutsu-3f.png";
import geijutsu4f from "../assets/geijutsu-4f.png";
import geijutsu5f from "../assets/geijutsu-5f.png";
import geijutsu6f from "../assets/geijutsu-6f.png";
import jouhoutou1f from "../assets/jouhoutou-1f.png";
import koudou from "../assets/koudou.png";
import kougitou1f from "../assets/kougitou-1f.png";
import kougitou3f from "../assets/kougitou-3f.png";
import kougitou4f from "../assets/kougitou-4f.png";
import kougitou5f from "../assets/kougitou-5f.png";

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

import abyad from "../assets/cafe_icon/abiyad.png";
import babu from "../assets/cafe_icon/babu.png";
import creative from "../assets/cafe_icon/creative.png";
import dekoboko from "../assets/cafe_icon/dekoboko.png";
import fashonshow from "../assets/cafe_icon/fashonshow.png";
import hachiri from "../assets/cafe_icon/hachiri.png";
import koguma from "../assets/cafe_icon/koguma.png";
import kotochamu from "../assets/cafe_icon/kotochamu.png";
import potesara from "../assets/cafe_icon/potesara.png";
import shashinbu from "../assets/cafe_icon/shashinbu.png";
import untitled from "../assets/cafe_icon/untitled.png";
import urushi from "../assets/cafe_icon/uruuruurushi.png";

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
import bijutubu from "../assets/mogi_icon/mogi-b1.png";
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
            title:"A1",
            imgUrl:fest,
            imgdis:"fest出店",
            state:""       
        },
        {
            title:"A2",
            imgUrl:imojo,
            state:""
        },
        {
            title:"A3",
            imgUrl:happycorn,
            state:""
        },
        {
            title:"A4",
            imgUrl:wangel,
            state:""
        },
        {
            title:"A5",
            imgUrl:tenchi,
            state:""
        },
        {
            title:"A6",
            imgUrl:manpukutei,
            state:""
        },
        {
            title:"A7",
            imgUrl:mokumoku,
            state:""
        },
        {
            title:"A8",
            imgUrl:nikumaki,
            state:""
        },
        {
            title:"A9",
            imgUrl:oden,
            state:""
        },
        {
            title:"A10",
            imgUrl:relic,
            state:""
        },
        {
            title:"A11",
            imgUrl:s2,
            state:""
        },
        {
            title:"A12",
            imgUrl:dolce,
            state:""
        },
        {
            title:"A13",
            imgUrl:pasta,
            state:""
        },
        {
            title:"A14",
            imgUrl:satoya,
            state:""
        },
        {
            title:"A15",
            imgUrl:boy,
            state:""
        },
        {
            title:"A16",
            imgUrl:chicken,
            state:""
        },
        {
            title:"A17",
            imgUrl:flidaway,
            state:""
        },
        {
            title:"A18",
            imgUrl:yakitori,
            state:""
        }

    ]
    const Bshops = [
        {
            title:"B1",
            imgUrl:bijutubu,
            state:""       
        },
        {
            title:"B2",
            imgUrl:amyon,
            state:""
        },
        {
            title:"B3",
            imgUrl:beads,
            state:""
        },
        {
            title:"B4",
            imgUrl:ichigeki,
            state:""
        },
        {
            title:"B5",
            imgUrl:aburaya,
            state:""
        },
        {
            title:"B6",
            imgUrl:takoyaki,
            state:""
        },
        {
            title:"B7",
            imgUrl:kyuudou,
            state:""
        },
        {
            title:"B8",
            imgUrl:nyarosu,
            state:""
        },
        {
            title:"B9",
            imgUrl:OB,
            state:""
        },
        {
            title:"B10",
            imgUrl:potato,
            state:""
        },
        {
            title:"B11",
            imgUrl:toritama,
            state:""
        }
    ]
    const gakuseikaikan = [
        {
            title:"➀",
            imgUrl:omotesenke,
            state:""       
        },
        {
            title:"➀",
            imgUrl:karuta,
            state:""
        }
    ]
    const koudou = [
        {
            title:"➀",
            imgUrl:sadoubu,
            state:""
        }
    ]
    const jouhoutou1f = [
        {
            title:"➀",
            imgUrl:cafetto,
            state:""
        }
    ]
    const kougitou1f3f = [
        {
            title:"➀",
            imgUrl:romp,
            state:""
        },
        {
            title:"➂",
            imgUrl:legokart,
            state:""
        },
        {
            title:"➃",
            imgUrl:kimagurecoffee,
            state:""
        }
    ]
    const kougitou4f = [
        {
            title:"➀",
            imgUrl:parapari,
            state:""
        },
        {
            title:"➁",
            imgUrl:rossoebianco,
            state:""
        },
        {
            title:"➂",
            imgUrl:shabondama,
            state:""
        },
        {
            title:"➃",
            imgUrl:nuts,
            state:""
        },
        {
            title:"➄",
            imgUrl:tenmon,
            state:""
        },
        {
            title:"➅",
            imgUrl:gokuraku,
            state:""
        }
    ]
    const kougitou5f = [
        {
            title:"➀",
            imgUrl:olive,
            state:""
        }
    ]
    const geijutsu1f2f = [
        {
            title:"➀",
            imgUrl:untitled,
            state:""
        },
        {
            title:"➁",
            imgUrl:fashonshow,
            state:""
        },
        {
            title:"➂",
            imgUrl:urushi,
            state:""
        },
        {
            title:"➃",
            imgUrl:potesara,
            state:""
        },
        {
            title:"➄",
            imgUrl:creative,
            state:""
        },
        {
            title:"➅",
            imgUrl:koguma,
            state:""
        },
        {
            title:"➆",
            imgUrl:dekoboko,
            state:""
        },
        {
            title:"➇",
            imgUrl:shashinbu,
            state:""
        },
        {
            title:"➈",
            imgUrl:abyad,
            state:""
        },
        {
            title:"➉",
            imgUrl:babu,
            state:""
        },
        {
            title:"11",
            imgUrl:hachiri,
            state:""
        },
        {
            title:"12",
            imgUrl:kotochamu,
            state:""
        },

    ]
    return (
        <div className="mogi">
            <div className="section-title">
                <span>模擬出店</span>
            </div>
            <div className="mogi-a">
                {<div className="mogi-a-map">
                    <h3>模擬出店A</h3>
                    <img className="mogi-map" src={mogimap1} alt="模擬出店Aマップ" />
                </div>}
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
            <div className="mogi-b">
                {<div className="mogi-b-map">
                    <h3>模擬出店B</h3>
                    <img className="mogi-map" src={mogimap2} alt="模擬出店Bマップ" />
                </div>}
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
    );
};