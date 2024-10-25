import { Mainvisual } from '../components/Mainvisual'
import { NewsList } from '../components/NewsList'
import { NoticeList } from '../components/NoticeList'
import { PosterButton } from '../components/PosterButton'
import { Event } from '../components/Event'
import { Home_Guest } from '../components/Home_Guest'

export const Home = () => {
    return (
        <>
            <Mainvisual />
            <Home_Guest />
            <Event />
            <PosterButton />
            <NoticeList />
        </>
    )
}
