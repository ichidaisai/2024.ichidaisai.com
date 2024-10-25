import '../styles/About.css'
import cafe from '../assets/kyoku/cafe.webp'
import iinnchou from '../assets/kyoku/iinnchou.webp'
import kaikei from '../assets/kyoku/kaikei.webp'
import kikaku from '../assets/kyoku/kikaku.webp'
import kouhou from '../assets/kyoku/kouhou.webp'
import mogi from '../assets/kyoku/mogi.webp'
import soumu from '../assets/kyoku/soumu.webp'
import soushoku from '../assets/kyoku/soushoku.webp'
import system from '../assets/kyoku/system.webp'

export const About = () => {
    const teams = [
        {
            name: '委員長局',
            leader: '浦川千歌',
            subLeader: '中岡知優',
            description:
                '委員長局では、大学祭全体の統括や花火の手続き、駐車場の管理などを行っています。\n最高の大学祭を作れるよう局員で力を合わせて頑張ります。\n 是非、2日間の大学祭をお楽しみください！',
            img: iinnchou,
        },
        {
            name: '会計局',
            leader: '是澤采',
            subLeader: '升尾妃那妥',
            description:
                '会計局は、主にお金の管理と協賛活動をしています！\n1〜3年生みんなの力を合わせて紆余曲折しながらも必ず市大祭を成功させます！！\n2日間一緒に全力で楽しみましょう！',
            img: kaikei,
        },
        {
            name: 'カフェ局',
            leader: '巽亮太',
            subLeader: '',
            description:
                'カフェ局では大学祭での構内出店団体の管理，サポート，総括を行っています。\n姉妹局の模擬局とも連携しながら、出店団体の方々と全員が楽しく盛り上がる大学祭を創り上げていきます！',
            img: cafe,
        },
        {
            name: '企画局',
            leader: '大平悠真',
            subLeader: '安冨七海',
            description:
                '企画局では、大学祭のステージ運営を担当しています。\n外部ゲストの招待や実委企画の運営、タイムテーブル管理が主な仕事です。\n色々な方々との化学反応を起こすべく、市大生だけでなく来場していただいた方全員に楽しんでもらえるステージ企画を用意しますので是非足を運んでください！',
            img: kikaku,
        },
        {
            name: '広報局',
            leader: '浦木奈由',
            subLeader: '中川裕彩',
            description:
                '広報局では、パンフレットの作成や大学祭の宣伝が主な仕事です。\nより多くの方に市大祭を知ってもらい、足を運んでもらえるように全員で全力で取り組んでいます！\n市大祭へのご来場お待ちしてます！',
            img: kouhou,
        },
        {
            name: 'システム局',
            leader: '沖本千幸',
            subLeader: '住吉官施',
            description:
                'システム局では、大学祭のホームページの制作、出店者と実行委員会のやり取りをするシステムの管理を主に行っています。\nこの年の大学祭を最高に楽しいものにできるように、一生懸命サポートしていきますので、よろしくお願いします！',
            img: system,
        },
        {
            name: '装飾局',
            leader: '瀬戸真琴',
            subLeader: '村上日和',
            description:
                '装飾局は、一番大きい局で、デザインや制作を行っています。\n見ているだけでも楽しくなれるような装飾品を頑張って作っています！\nスタンプラリーや顔はめパネルなど新しいことをたくさん準備しているので是非是非ご参加ください！',
            img: soushoku,
        },
        {
            name: '総務局',
            leader: '小林奏太',
            subLeader: '上野太睦',
            description:
                '総務局では、出店者団体に貸し出す備品の管理をしています。\n大学祭の裏で支える縁の下の力持ちのような役割を担っているため、ボランティア精神が溢れすぎている人の集団です。\n今年度も片づけを含め最後まで気持ちよく運営していくためにも、ともに盛り上げていきましょう！',
            img: soumu,
        },
        {
            name: '模擬局',
            leader: '石倉綺乃',
            subLeader: '米澤凪沙',
            description:
                '模擬局では大学祭の模擬店出店団体の管理、出店者のサポート、総括を行っています。\nたくさんの挑戦と困難がありますが、今年も大学祭を盛り上げていけるように全力でがんばりますので、よろしくお願いいたします！',
            img: mogi,
        },
    ]

    return (
        <div className="about">
            <h2>大学祭実行委員会</h2>
            <div className="about-description">
                <p>
                    大学祭実行委員会は9個の局に分かれて仕事を分担し、中心となって大学祭を盛り上げる活動をしています。
                </p>
                <p>
                    ここではそれぞれの局がどのような仕事をしているか紹介しています。
                </p>
                <p>学年、時期問わず興味のある方はいつでも大歓迎！</p>
                <p>学生会館2階に大祭室があるので、気軽にお立ち寄りください！</p>
            </div>

            <div className="about-teams">
                {teams.map((team, i) => (
                    <div className="team" key={i}>
                        <h3 className="section-title">{team.name}</h3>
                        <div className="team-container">
                            <div className="team-main">
                                <div className="team-member">
                                    <h4>局長：{team.leader}</h4>
                                    {team.subLeader && (
                                        <h4>副局長：{team.subLeader}</h4>
                                    )}
                                </div>
                                <img src={team.img} alt="" />
                            </div>
                            <p>{team.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
