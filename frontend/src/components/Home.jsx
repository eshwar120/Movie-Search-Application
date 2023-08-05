import React, { useContext, useState, useRef, useCallback } from 'react'
import '../styles/home.css'
import Card from './Card';
import { UserContext } from '../context/UserContext';
import useMoviesSearch from '../hook/useMoviesSearch';
import Loading from './Loading';
import Notfound from './Notfound';
import Error from './Error';

export default function Home() {

    console.log("rendered")
    const { search } = useContext(UserContext)
    const [pageNumber, setPageNumber] = useState(1)
    const { loading, error, movies, hasMore, notFound } = useMoviesSearch(import.meta.env.VITE_SERVER_ADDRESS, search, pageNumber);

    const observer = useRef(null)
    const lastMovieCard = useCallback((node) => {
        // console.log(node)
        if (loading) return
        if (observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(pageNumber => pageNumber + 1)
            }
        })

        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <div
            className='p-1 sm:p-5 pt-2  w-full max-w-5xl m-auto shadow-md vh-100-nav bg-slate-100 dark:bg-gray-900'>
            {
                <div className='p-4 w-full movies-container'>
                    {
                        (movies.length === 0 && !error && !notFound) ?
                            <div className='grid-full -my-4'>
                                <Loading />
                            </div>
                            :
                            (error && !notFound ?
                                <div className='grid-full -mt-4'>
                                    <Error />
                                </div> :
                                (
                                    notFound ?
                                        <div className='grid-full -mt-4'>
                                            <Notfound />
                                        </div> :
                                        movies.map((item, index) => {
                                            if (movies.length === index + 1) {
                                                return <Card observerRef={lastMovieCard} key={index} item={item} />
                                            }
                                            return <Card key={index} item={item} />
                                        })
                                )
                            )

                    }
                </div>
            }

        </div>
    )
}
