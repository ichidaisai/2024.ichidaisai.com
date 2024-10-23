import '../styles/Event.css'
import { Link } from 'react-router-dom'
import bingo_icon from '../assets/eventIcon/bingo_icon.webp'
import karimono_icon from '../assets/eventIcon/karimono_icon.webp'
import kehaigiri_icon from '../assets/eventIcon/kehaigiri_icon.webp'
import nodojiman_icon from '../assets/eventIcon/nodojiman_icon.webp'
import stamp_icon from '../assets/eventIcon/stamp_icon.webp'

const returnTop = () => {
    window.scrollTo({
        top: 0,
    })
}

export const Event = () => {
    return (
        <>
            <h2 className="section-title">イベント</h2>
            <div className="event-content">
                大学祭を楽しむためのイベントが盛りだくさん！
                <br />
                スタンプラリーやゲーム大会、特別パフォーマンスなど、思い出に残る体験が待っています。
                各イベントの詳細はこちらからチェック！
            </div>

            <div className="event-list">
                <Link
                    className="event-item"
                    style={{ textDecoration: 'none' }}
                    to="/kehaigiri"
                    onClick={returnTop}
                >
                    <div className="event-icon">
                        <img src={kehaigiri_icon} />
                    </div>
                    <div className="event-description">
                        <p className="date">10/26</p>
                        <p className="date">16:40-17:00</p>
                        <h5 className="event-title">気配斬り</h5>
                    </div>
                </Link>

                <Link
                    style={{ textDecoration: 'none' }}
                    to="/stamprally"
                    className="event-item"
                    onClick={returnTop}
                >
                    <div className="event-icon">
                        <img src={stamp_icon} />
                    </div>
                    <div className="event-description">
                        <p className="date">10/26, 27</p>
                        <h5 className="event-title">スタンプラリー</h5>
                    </div>
                </Link>

                <div className="event-item">
                    <div className="event-icon">
                        <img src={bingo_icon} />
                    </div>

                    <div className="event-description">
                        <p className="date">10/26</p>
                        <p className="date">17:10-17:40</p>
                        <h5 className="event-title">ビンゴ</h5>
                    </div>
                </div>

                <div className="event-item">
                    <div className="event-icon">
                        <img src={nodojiman_icon} />
                    </div>

                    <div className="event-description">
                        <p className="date">10/26</p>
                        <p className="date">14:10-14:40</p>
                        <h5 className="event-title">のど自慢</h5>
                    </div>
                </div>

                <div className="event-item">
                    <div className="event-icon">
                        <img src={karimono_icon} />
                    </div>

                    <div className="event-description">
                        <p className="date">10/26</p>
                        <p className="date">12:20-12:50</p>
                        <h5 className="event-title">借りモノ競争 in HCU</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
