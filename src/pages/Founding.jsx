import '../styles/Funding.css'
import { Link } from 'react-router-dom'

import ichi1 from '../assets/ichipoppo/106001.png'
import ichi2 from '../assets/ichipoppo/102002.png'
import ichi3 from '../assets/ichipoppo/106003.png'

export const Funding = () => {
    return (
        <div className="funding">
            <h2>クラウドファンディングに</h2>
            <h3>挑戦します！</h3>
            <p>
                <br />
                今年初の試みとして、市大祭はより一層の盛り上がりを目指して、クラウドファンディングに挑戦します！
                <br />
                あなたのご支援が、学生たちの熱い思いを形にする大きな力になります！
                <br />
                ぜひ、皆さまの温かいご支援を、どうぞよろしくお願いいたします！
                <br />
                期間やリターンなどの詳しい内容はこちらをクリック！
                <br />
            </p>

            <Link
                style={{ textDecoration: 'none' }}
                to="https://tarubo.en-jine.com/projects/ichidaisaithirtyfirst?p_token=61fa3df42d1f409cb1d9d658c5da343b"
            >
                <button className="btn">クラファンページはこちら</button>
            </Link>
            <a>
                クラウドファンディングで市大祭を支援し、外部ゲストを招きませんか？！
                <br />
                今年の大学祭のテーマは『Spawn!』です。
                <br />
                このテーマには、新たな挑戦や成長、そして皆さんと共に「化学反応」を起こしたいという強い思いが込められています。
                <br />
                今年は学生同士だけでなく、幅広い世代が楽しめるイベントや、地域の子どもたちに喜んでもらえる企画を数多く用意しています！
                <br />
                しかし、運営資金はOBOG（卒業生）後援会や企業様からの協賛金に支えられているものの、新たな取り組みが多い今年は特に資金面での課題があります。
                <br />
                31年目を迎える市大祭を成功させ、これからも長く続く大学祭を作り上げるために、ぜひ皆さまのご支援をお願いいたします。
            </a>

            <div className="ichipoppo-funding">
                <div>
                    <img src={ichi3} />
                </div>
                <div>
                    <img src={ichi1} />
                </div>
                <div>
                    <img src={ichi2} />
                </div>
            </div>
        </div>
    )
}
