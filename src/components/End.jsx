import '../styles/End.css'
import stage_background from '../assets/stage_background.webp'

export const End = () => {
    return (
        <>

                <h2 className='section-title'>第31回市大祭は終了いたしました。</h2>
                <div className='end'>    
                    <div className='content'>
                    <p>
                    10月26日、27日に行われた第31回市大祭は無事終了いたしました。
                    <br />
                    たくさんのご来場、温かいご支援、そしてご協力ありがとうございました！
                    </p>
                </div>
                <div className='picture'>
                    <img src={stage_background} />
                </div>
            </div>
        </>
    )
}