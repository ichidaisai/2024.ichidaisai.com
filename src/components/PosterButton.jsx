import "../styles/PosterButton.css";
import { Link } from "react-router-dom";

export const PosterButton = () => {
    return (
        <>
            <h2 className="section-title">ポスター掲示場所</h2>
            <div className="poster">
                <p>
                    市大祭の宣伝ポスターの掲示にご協力をいただいた施設や店舗の皆様をご紹介します！
                    各所に掲示されたポスターをぜひご覧いただき、大学祭の魅力を感じ取ってください。
                </p>
                <Link style={{ textDecoration: 'none' }} to="/poster">
                    <button className="btn">
                        ポスター掲示場所一覧はこちら
                    </button>
                </Link>
            </div>
        </>
    );
};
