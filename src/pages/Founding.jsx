import "../styles/Funding.css";
import funding_img from "../assets/funding_btn.png";
// import { Link } from "react-router-dom";

export const Funding = () => {
    return (
        <div className="funding">
            <p>クラウドファンディングに挑戦します！</p>
            <p>今年初の試みとして、市大祭はより一層の盛り上がりを目指して、クラウドファンディングに挑戦します！</p>
            <p>あなたのご支援が、学生たちの熱い思いを形にする大きな力になります！</p>
            <p>ぜひ、皆さまの温かいご支援を、どうぞよろしくお願いいたします！</p>
            <p>期間やリターンなどの詳しい内容はこちらをクリック！</p>
            {/* <Link to={"https://tarubo.en-jine.com/projects/ichidaisaithirtyfirst?p_token=61fa3df42d1f409cb1d9d658c5da343b"}><img src={funding_img} alt="" className="funding-btn"/></Link> */}
            <img src={funding_img} alt="" className="funding-btn"/>

            <p>今年の大学祭のテーマは、『Spawn!』です。</p>
            <p>このテーマには新たな挑戦や成長、そして皆さんと共に
                化学反応を起こすという強い思いが込められています。</p>
            <p>今年のテーマに沿って本学の学生間のみならず
                幅広い世代の交流の場を提供する地域密着型の大学祭を
                目指しています！</p>
            <p>地域の子供たちに喜んでもらえるお祭りにするために屋台や、
                お化け屋敷、ビンゴ大会など毎年おこなっているものに
                加えて、今年は顔ハメパネルやスタンプラリーなどなど！</p>
            <p>実行委員初の試みとなるイベントを企画しています！</p>
            <p>市大祭はOBOGの方々が所属する後援会からの寄付金、
                企業様からの協賛で運営しております。</p>
            <p>
                上記の通り今年は特により多くの方々を招き
                楽しんでもらえるよう、今年は例年以上に学外から
                多くの方をお招きし、市大祭を楽しんでもらえるよう
                尽力しておりますが、運営資金において苦悩しているのが現状です。</p>
            <p>31年目を迎える市大祭を成功させ、
                学校とともに永続する大学祭を作り上げるために、
                ご支援、応援、シェアなどなどしていただけたら嬉しいです！</p>
            
        </div>
    )
}
