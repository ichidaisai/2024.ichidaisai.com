import { Mainvisual } from '../components/Mainvisual'
import { NewsList } from '../components/NewsList'
import { NoticeList } from '../components/NoticeList'
import { PosterButton } from '../components/PosterButton'
import { Event } from '../components/Event'

export const Home = () => {
    return (
        <>
            <Mainvisual />
            <NewsList />
            <NoticeList />
            <Event />
            <PosterButton />
        </>
    )
}
