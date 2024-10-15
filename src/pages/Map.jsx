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
import cafetto from "../cafe_icon/cafetto.png";
import gokuraku from "../cafe_icon/gokuraku.png";
import karuta from "../cafe_icon/karuta.png";
import kimagurecoffee from "../cafe_icon/kimagurecoffee.png";
import legokart from "../cafe_icon/legokart.png";
import nuts from "../cafe_icon/nuts.png";
import olive from "../cafe_icon/olive.png";
import omotesenke from "../cafe_icon/omotesenke.png";
import parapari from "../cafe_icon/parapari.png";
import romp from "../cafe_icon/romp.png";
import rossoebianco from "../cafe_icon/rossoebianco.png";
import sadoubu from "../cafe_icon/sadoubu.png";
import shabondama from "../cafe_icon/shabondama.png";
import tenmon from "../cafe_icon/tenmon.png";

//模擬アイコン画像
import fest from "../mogi_icon/mogi-a1.png";
import imojo from "../mogi_icon/mogi-a2.png";
import happycorn from "../mogi_icon/mogi-a3.png";
import wangel from "../mogi_icon/mogi-a4.png";
import tenchi from "../mogi_icon/mogi-a5.png";
import manpukutei from "../mogi_icon/mogi-a6.png";
import mokumoku from "../mogi_icon/mogi-a7.png";
import nikumaki from "../mogi_icon/mogi-a8.png";
import oden from "../mogi_icon/mogi-a9.png";
import relic from "../mogi_icon/mogi-a10.png";
import s2 from "../mogi_icon/mogi-a11.png";
import dolce from "../mogi_icon/mogi-a12.png";
import pasta from "../mogi_icon/mogi-a13.png";
import satoya from "../mogi_icon/mogi-a14.png";
import boy from "../mogi_icon/mogi-a15.png";
import chicken from "../mogi_icon/mogi-a16.png";
import flidaway from "../mogi_icon/mogi-a17.png";
import yakitori from "../mogi_icon/mogi-a18.png";
import bijutubu from "../mogi_icon/mogi-b1.png";
import amyon from "../mogi_icon/mogi-b2.png";
import beads from "../mogi_icon/mogi-b3.png";
import ichigeki from "../mogi_icon/mogi-b4.png";
import aburaya from "../mogi_icon/mogi-b5.png";
import takoyaki from "../mogi_icon/mogi-b6.png";
import kyuudou from "../mogi_icon/mogi-b7.png";
import nyarosu from "../mogi_icon/mogi-b8.png";
import OB from "../mogi_icon/mogi-b9.png";
import potato from "../mogi_icon/mogi-b10.png";
import toritama from "../mogi_icon/mogi-b11.png";


export const Map = () => {
    return (
            <div>
                <div className="geijutsu1">
                    <h2>芸術棟 1F,2F</h2>
                    <img src={geijutsu2f} alt="芸術学部棟1,2Fマップ" />
                </div>
            </div>  
    );
};