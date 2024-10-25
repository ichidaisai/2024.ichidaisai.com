import "../styles/Nodojiman.css";
import nodojiman from '../assets/eventIcon/nodojiman_icon.png'
export const Nodojiman = () => {
    return (
        <>
            <div> 
                <h2 className="nodojiman-title">のど自慢大会</h2> 
                <img className="nodojiman-gazou" src={nodojiman} />
                <div className="bor">
                    歌を歌うのが好きな方、聞くのが好きな方！朗報です！
                    <br/>今年の市大祭ではのど自慢大会を開催します！
                    <br/>なんと優勝した方には商品もあります。
                    <br/>ソロでの参加、デュエットでの参加も可能です！
                    <br/>皆さんの歓声や手拍子で一体となって盛り上がりましょう！
                </div>
            </div>
        </>
    );
};