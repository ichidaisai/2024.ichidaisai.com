import '../styles/Map.css'
import { Link } from 'react-router-dom'

//カフェマップ画像
import gakuseikaikanmap from '../assets/gakuseikaikan.webp'
import geijutsu2fmap from '../assets/geijutsu-2f.webp'
import geijutsu3fmap from '../assets/geijutsu-3f.webp'
import geijutsu4fmap from '../assets/geijutsu-4f.webp'
import geijutsu5fmap from '../assets/geijutsu-5f.webp'
import geijutsu6fmap from '../assets/geijutsu-6f.webp'
import jouhoutou1fmap from '../assets/jouhoutou-1f.webp'
import koudoumap from '../assets/koudou.webp'
import kougitou1fmap from '../assets/kougitou-1f.webp'
import kougitou3fmap from '../assets/kougitou-3f.webp'
import kougitou4fmap from '../assets/kougitou-4f.webp'
import kougitou5fmap from '../assets/kougitou-5f.webp'

//模擬マップ画像
import mogimap1 from '../assets/mogia-map.webp'
import mogimap2 from '../assets/mogib-map.webp'

//カフェアイコン画像
import cafetto from '../assets/cafe_icon/cafetto.webp'
import gokuraku from '../assets/cafe_icon/gokuraku.webp'
import karuta from '../assets/cafe_icon/karuta.webp'
import kimagurecoffee from '../assets/cafe_icon/kimagurecoffee.webp'
import legokart from '../assets/cafe_icon/legokart.webp'
import nuts from '../assets/cafe_icon/nuts.webp'
import olive from '../assets/cafe_icon/olive.webp'
import omotesenke from '../assets/cafe_icon/omotesenke.webp'
import parapari from '../assets/cafe_icon/parapari.webp'
import romp from '../assets/cafe_icon/romp.webp'
import rossoebianco from '../assets/cafe_icon/rossoebianco.webp'
import sadoubu from '../assets/cafe_icon/sadoubu.webp'
import shabondama from '../assets/cafe_icon/shabondama.webp'
import tenmon from '../assets/cafe_icon/tenmon.webp'
//芸術1，2階
import abyad from '../assets/cafe_icon/abyad.webp'
import babu from '../assets/cafe_icon/babu.webp'
import creative from '../assets/cafe_icon/creative.webp'
import dekoboko from '../assets/cafe_icon/dekoboko.webp'
import fashionshow from '../assets/cafe_icon/fashionshow.webp'
import hachiri from '../assets/cafe_icon/hachiri.webp'
import koguma from '../assets/cafe_icon/koguma.webp'
import kotochamu from '../assets/cafe_icon/kotochamu.webp'
import potesara from '../assets/cafe_icon/potesara.webp'
import shashinbu from '../assets/cafe_icon/shashinbu.webp'
import untitled from '../assets/cafe_icon/untitled.webp'
import urushi from '../assets/cafe_icon/uruuruurushi.webp'
//芸術3階
import bijutsubu1 from '../assets/cafe_icon/bijutsubu.webp'
import happiness from '../assets/cafe_icon/happiness.webp'
import mochihako from '../assets/cafe_icon/mochihako.webp'
import mohebi from '../assets/cafe_icon/mohebi.webp'
import nainai from '../assets/cafe_icon/nainai.webp'
import omurauzu from '../assets/cafe_icon/omuraizu.webp'
import shimashimamo from '../assets/cafe_icon/shimashimamo.webp'
import uchucafe from '../assets/cafe_icon/uchucafe.webp'
//芸術4階
import cuicui from '../assets/cafe_icon/cuicui.webp'
import kinkou from '../assets/cafe_icon/kinkou.webp'
import meyomeyo from '../assets/cafe_icon/meyomeyo.webp'
import tdcafe from '../assets/cafe_icon/tdcafe.webp'
import tea from '../assets/cafe_icon/tea.webp'
//芸術5階
import choukoku from '../assets/cafe_icon/choukoku.webp'
import ichinari from '../assets/cafe_icon/ichinari.webp'
import koa from '../assets/cafe_icon/koa.webp'
import mimikiki from '../assets/cafe_icon/mimikiki.webp'
import nihongatenji from '../assets/cafe_icon/nihonga-tenji.webp'
import nihongayuushi from '../assets/cafe_icon/nihonga-yuushi.webp'
//芸術6階
import drawers from '../assets/cafe_icon/drawers.webp'
import aburae2 from '../assets/cafe_icon/aburae2.webp'
import gesshitai from '../assets/cafe_icon/gesshitai.webp'
import sannenaburae from '../assets/cafe_icon/sannenaburae.webp'

//模擬アイコン画像
import fest from '../assets/mogi_icon/mogi-a1.webp'
import imojo from '../assets/mogi_icon/mogi-a2.webp'
import happycorn from '../assets/mogi_icon/mogi-a3.webp'
import wangel from '../assets/mogi_icon/mogi-a4.webp'
import tenchi from '../assets/mogi_icon/mogi-a5.webp'
import manpukutei from '../assets/mogi_icon/mogi-a6.webp'
import mokumoku from '../assets/mogi_icon/mogi-a7.webp'
import nikumaki from '../assets/mogi_icon/mogi-a8.webp'
import oden from '../assets/mogi_icon/mogi-a9.webp'
import relic from '../assets/mogi_icon/mogi-a10.webp'
import s2 from '../assets/mogi_icon/mogi-a11.webp'
import dolce from '../assets/mogi_icon/mogi-a12.webp'
import pasta from '../assets/mogi_icon/mogi-a13.webp'
import satoya from '../assets/mogi_icon/mogi-a14.webp'
import boy from '../assets/mogi_icon/mogi-a15.webp'
import chicken from '../assets/mogi_icon/mogi-a16.webp'
import flidaway from '../assets/mogi_icon/mogi-a17.webp'
import yakitori from '../assets/mogi_icon/mogi-a18.webp'
import bijutsubu2 from '../assets/mogi_icon/mogi-b1.webp'
import amyon from '../assets/mogi_icon/mogi-b2.webp'
import beads from '../assets/mogi_icon/mogi-b3.webp'
import ichigeki from '../assets/mogi_icon/mogi-b4.webp'
import aburaya from '../assets/mogi_icon/mogi-b5.webp'
import takoyaki from '../assets/mogi_icon/mogi-b6.webp'
import kyuudou from '../assets/mogi_icon/mogi-b7.webp'
import nyarosu from '../assets/mogi_icon/mogi-b8.webp'
import OB from '../assets/mogi_icon/mogi-b9.webp'
import potato from '../assets/mogi_icon/mogi-b10.webp'
import toritama from '../assets/mogi_icon/mogi-b11.webp'

export const Map = () => {
    const Ashops = [
        {
            title: 'A1',
            imgUrl: fest,
            imgdis: 'fest出店',
            state: '',
        },
        {
            title: 'A2',
            imgUrl: imojo,
            state: '',
        },
        {
            title: 'A3',
            imgUrl: happycorn,
            state: '',
        },
        {
            title: 'A4',
            imgUrl: wangel,
            state: '',
        },
        {
            title: 'A5',
            imgUrl: tenchi,
            state: '',
        },
        {
            title: 'A6',
            imgUrl: manpukutei,
            state: '',
        },
        {
            title: 'A7',
            imgUrl: mokumoku,
            state: '',
        },
        {
            title: 'A8',
            imgUrl: nikumaki,
            state: '',
        },
        {
            title: 'A9',
            imgUrl: oden,
            state: '',
        },
        {
            title: 'A10',
            imgUrl: relic,
            state: '',
        },
        {
            title: 'A11',
            imgUrl: s2,
            state: '',
        },
        {
            title: 'A12',
            imgUrl: dolce,
            state: '',
        },
        {
            title: 'A13',
            imgUrl: pasta,
            state: '',
        },
        {
            title: 'A14',
            imgUrl: satoya,
            state: '',
        },
        {
            title: 'A15',
            imgUrl: boy,
            state: '',
        },
        {
            title: 'A16',
            imgUrl: chicken,
            state: '',
        },
        {
            title: 'A17',
            imgUrl: flidaway,
            state: '',
        },
        {
            title: 'A18',
            imgUrl: yakitori,
            state: '',
        },
    ]
    const Bshops = [
        {
            title: 'B1',
            imgUrl: bijutsubu2,
            state: '',
        },
        {
            title: 'B2',
            imgUrl: amyon,
            state: '',
        },
        {
            title: 'B3',
            imgUrl: beads,
            state: '',
        },
        {
            title: 'B4',
            imgUrl: ichigeki,
            state: '',
        },
        {
            title: 'B5',
            imgUrl: aburaya,
            state: '',
        },
        {
            title: 'B6',
            imgUrl: takoyaki,
            state: '',
        },
        {
            title: 'B7',
            imgUrl: kyuudou,
            state: '',
        },
        {
            title: 'B8',
            imgUrl: nyarosu,
            state: '',
        },
        {
            title: 'B9',
            imgUrl: OB,
            state: '',
        },
        {
            title: 'B10',
            imgUrl: potato,
            state: '',
        },
        {
            title: 'B11',
            imgUrl: toritama,
            state: '',
        },
    ]
    const gakuseikaikan = [
        {
            title: '➀',
            imgUrl: omotesenke,
            state: '',
        },
        {
            title: '➀',
            imgUrl: karuta,
            state: '',
        },
    ]
    const koudou = [
        {
            title: '➀',
            imgUrl: sadoubu,
            state: '',
        },
    ]
    const jouhoutou1f = [
        {
            title: '➀',
            imgUrl: cafetto,
            state: '',
        },
    ]
    const kougitou1f3f = [
        {
            title: '➀',
            imgUrl: romp,
            state: '',
        },
        {
            title: '➂',
            imgUrl: legokart,
            state: '',
        },
        {
            title: '➃',
            imgUrl: kimagurecoffee,
            state: '',
        },
    ]
    const kougitou4f = [
        {
            title: '➀',
            imgUrl: parapari,
            state: '',
        },
        {
            title: '➁',
            imgUrl: rossoebianco,
            state: '',
        },
        {
            title: '➂',
            imgUrl: shabondama,
            state: '',
        },
        {
            title: '➃',
            imgUrl: nuts,
            state: '',
        },
        {
            title: '➄',
            imgUrl: tenmon,
            state: '',
        },
        {
            title: '➅',
            imgUrl: gokuraku,
            state: '',
        },
    ]
    const kougitou5f = [
        {
            title: '➀',
            imgUrl: olive,
            state: '',
        },
    ]
    const geijutsu1f2f = [
        {
            title: '➀',
            imgUrl: untitled,
            state: '',
        },
        {
            title: '➁',
            imgUrl: fashionshow,
            state: '',
        },
        {
            title: '➂',
            imgUrl: urushi,
            state: '',
        },
        {
            title: '➃',
            imgUrl: potesara,
            state: '',
        },
        {
            title: '➄',
            imgUrl: creative,
            state: '',
        },
        {
            title: '➅',
            imgUrl: koguma,
            state: '',
        },
        {
            title: '➆',
            imgUrl: dekoboko,
            state: '',
        },
        {
            title: '➇',
            imgUrl: shashinbu,
            state: '',
        },
        {
            title: '➈',
            imgUrl: abyad,
            state: '',
        },
        {
            title: '➉',
            imgUrl: babu,
            state: '',
        },
        {
            title: '⑪',
            imgUrl: hachiri,
            state: '',
        },
        {
            title: '⑫',
            imgUrl: kotochamu,
            state: '',
        },
    ]
    const geijutsu3f = [
        {
            title: '➀',
            imgUrl: bijutsubu1,
            state: '',
        },
        {
            title: '➁',
            imgUrl: omurauzu,
            state: '',
        },
        {
            title: '➂',
            imgUrl: shimashimamo,
            state: '',
        },
        {
            title: '➃',
            imgUrl: mochihako,
            state: '',
        },
        {
            title: '➄',
            imgUrl: mohebi,
            state: '',
        },
        {
            title: '➅',
            imgUrl: nainai,
            state: '',
        },
        {
            title: '➆',
            imgUrl: happiness,
            state: '',
        },
        {
            title: '➇',
            imgUrl: uchucafe,
            state: '',
        },
    ]
    const geijutsu4f = [
        {
            title: '➀',
            imgUrl: cuicui,
            state: '',
        },
        {
            title: '➁',
            imgUrl: meyomeyo,
            state: '',
        },
        {
            title: '➂',
            imgUrl: kinkou,
            state: '',
        },
        {
            title: '➃',
            imgUrl: tdcafe,
            state: '',
        },
        {
            title: '➄',
            imgUrl: tea,
            state: '',
        },
    ]
    const geijutsu5f6f = [
        {
            title: '➀',
            imgUrl: nihongatenji,
            state: '',
        },
        {
            title: '➁',
            imgUrl: nihongayuushi,
            state: '',
        },
        {
            title: '➂',
            imgUrl: ichinari,
            state: '',
        },
        {
            title: '➃',
            imgUrl: choukoku,
            state: '',
        },
        {
            title: '➄',
            imgUrl: mimikiki,
            state: '',
        },
        {
            title: '➅',
            imgUrl: koa,
            state: '',
        },
        {
            title: '➆',
            imgUrl: aburae2,
            state: '',
        },
        {
            title: '➇',
            imgUrl: gesshitai,
            state: '',
        },
        {
            title: '➈',
            imgUrl: drawers,
            state: '',
        },
        {
            title: '➉',
            imgUrl: sannenaburae,
            state: '',
        },
    ]
    return (
        <div className="MAP">
            <div className="mogi">
                <div className="section-title">
                    <span>模擬出店</span>
                </div>
                <div className="mogi-a">
                    {
                        <div className="mogi-a-map">
                            <h3>模擬出店A</h3>
                            <img
                                className="mogi-map"
                                src={mogimap1}
                                alt="模擬出店Aマップ"
                            />
                        </div>
                    }
                    <div className="mogi-div">
                        {Ashops.map((shopa) => {
                            return (
                                <div className="mogi-icon">
                                    <p>{shopa.title}</p>
                                    <img src={shopa.imgUrl} alt="出店" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mogi-b">
                    {
                        <div className="mogi-b-map">
                            <h3>模擬出店B</h3>
                            <img
                                className="mogi-map"
                                src={mogimap2}
                                alt="模擬出店Bマップ"
                            />
                        </div>
                    }
                    <div className="mogi-div">
                        {Bshops.map((shopb) => {
                            return (
                                <div className="mogi-icon">
                                    <p>{shopb.title}</p>
                                    <img src={shopb.imgUrl} alt="出店" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="cafe">
                <div className="section-title">
                    <span>学生会館，講堂前，情報科学部棟，国際学部棟</span>
                </div>
                <div className="gakuseikaikan">
                    <h3>学生会館</h3>
                    <img
                        className="cafe1-map"
                        src={gakuseikaikanmap}
                        alt="学生会館マップ"
                    />
                    <div className="cafe2-container">
                        {gakuseikaikan.map((shop1) => {
                            return (
                                <div className="cafe-icon">
                                    <p>{shop1.title}</p>
                                    <img src={shop1.imgUrl} alt="出店" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                {
                    <div className="koudou">
                        <h3>講堂前</h3>
                        <div className="cafe1-container">
                            <img
                                className="cafe1-map"
                                src={koudoumap}
                                alt="講堂前マップ"
                            />
                            {koudou.map((shop2) => {
                                return (
                                    <div className="cafe-icon">
                                        <p>{shop2.title}</p>
                                        <img src={shop2.imgUrl} alt="出店" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                {
                    <div className="jouhoutou1f">
                        <h3>情報科学部棟1F</h3>
                        <div className="cafe1-container">
                            <img
                                className="cafe1-map"
                                src={jouhoutou1fmap}
                                alt="情報科学部棟マップ"
                            />
                            {jouhoutou1f.map((shop3) => {
                                return (
                                    <div className="cafe-icon">
                                        <p>{shop3.title}</p>
                                        <img src={shop3.imgUrl} alt="出店" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                {
                    <div className="kokusai">
                        <h3>国際学部棟（講義棟）1F,3F</h3>
                        <div className="cafe1-container">
                            <img
                                className="kokusai1f-map"
                                src={kougitou1fmap}
                                alt="国際学部棟1Fマップ"
                            />
                            <img
                                className="kokusai3f-map"
                                src={kougitou3fmap}
                                alt="国際学部棟3Fマップ"
                            />
                        </div>
                        <div className="cafe2-container">
                            {kougitou1f3f.map((shop4) => {
                                return (
                                    <div className="cafe-icon">
                                        <p>{shop4.title}</p>
                                        <img src={shop4.imgUrl} alt="出店" />
                                    </div>
                                )
                            })}
                        </div>
                        <h3>国際学部棟（講義棟）4F</h3>
                        <img
                            className="kokusai-map"
                            src={kougitou4fmap}
                            alt="国際学部棟4Fマップ"
                        />
                        <div className="cafe2-container">
                            {kougitou4f.map((shop5) => {
                                return (
                                    <div className="cafe-icon">
                                        <p>{shop5.title}</p>
                                        <img src={shop5.imgUrl} alt="出店" />
                                    </div>
                                )
                            })}
                        </div>
                        <h3>国際学部棟（講義棟）5F</h3>
                        <img
                            className="kokusai-map"
                            src={kougitou5fmap}
                            alt="国際学部棟5Fマップ"
                        />
                        <div className="cafe2-container">
                            {kougitou5f.map((shop6) => {
                                return (
                                    <div className="cafe-icon">
                                        <p>{shop6.title}</p>
                                        <img src={shop6.imgUrl} alt="出店" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                <div className="section-title">
                    <span>芸術学部棟</span>
                </div>
                {
                    <div className="geijututou">
                        <h3>芸術学部棟1F,2F</h3>
                        <img
                            className="geijutu1f2f-map"
                            src={geijutsu2fmap}
                            alt="芸術学部棟1F,2Fマップ"
                        />
                        <div className="cafe2-container">
                            {geijutsu1f2f.map((shop7) => {
                                return (
                                    <div className="cafe-icon">
                                        <p>{shop7.title}</p>
                                        <img src={shop7.imgUrl} alt="出店" />
                                    </div>
                                )
                            })}
                        </div>
                        <h3>芸術学部棟3F</h3>
                        <img
                            className="geijutu3f-map"
                            src={geijutsu3fmap}
                            alt="芸術学部棟3Fマップ"
                        />
                        <div className="cafe2-container">
                            {geijutsu3f.map((shop8) => {
                                return (
                                    <div className="cafe-icon">
                                        <p>{shop8.title}</p>
                                        <img src={shop8.imgUrl} alt="出店" />
                                    </div>
                                )
                            })}
                        </div>
                        <h3>芸術学部棟4F</h3>
                        <img
                            className="geijutu4f-map"
                            src={geijutsu4fmap}
                            alt="芸術学部棟4Fマップ"
                        />
                        <div className="cafe2-container">
                            {geijutsu4f.map((shop9) => {
                                return (
                                    <div className="cafe-icon">
                                        <p>{shop9.title}</p>
                                        <img src={shop9.imgUrl} alt="出店" />
                                    </div>
                                )
                            })}
                        </div>
                        <h3>芸術学部棟5F,6F</h3>
                        {/* <div className="cafe2-container"> */}
                        <img
                            className="geijutu5f-map"
                            src={geijutsu5fmap}
                            alt="芸術学部棟5Fマップ"
                        />
                        <img
                            className="geijutu6f-map"
                            src={geijutsu6fmap}
                            alt="芸術学部棟6Fマップ"
                        />
                        <div className="cafe3-container">
                            {geijutsu5f6f.map((shop10) => {
                                return (
                                    <div className="cafe-icon">
                                        <p>{shop10.title}</p>
                                        <img src={shop10.imgUrl} alt="出店" />
                                    </div>
                                )
                            })}
                        </div>
                        {/* </div> */}
                    </div>
                }
            </div>
        </div>
    )
}
