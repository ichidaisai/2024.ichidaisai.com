import React from 'react'
import { Mainvisual } from '../components/Mainvisual'
import { NewsList } from '../components/NewsList'
import { NoticeList } from '../components/NoticeList'
import { PosterButton } from '../components/PosterButton'

export const Home = () => {
    return (
        <>
            <Mainvisual />
            <NewsList />
            <NoticeList />
            <PosterButton />
        </>
    )
}
