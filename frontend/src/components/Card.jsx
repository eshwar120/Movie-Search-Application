import React, { forwardRef, useContext, useState } from 'react'
import startLogo from '../assets/star.svg'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

export default forwardRef(function Card({ item, observerRef }) {

    const { clearSearch } = useContext(UserContext)

    return (
        <div
            ref={observerRef}
            className=' h-[200px] max-w-[150px] sm:h-[300px] sm:max-w-[200px] shadow-sm inline-block rounded-md overflow-hidden hover:shadow-2xl dark:bg-gray-800 p-1 hover:bg-sky-500 dark:hover:bg-sky-500 bg-gray-200 dark:text-gray-200 transition ease-in-out delay-150 duration-300'>
            <Link to={`/movie/${item.id}`}>
                <img
                    onClick={clearSearch}
                    className='h-5/6 w-full object-fill rounded-[4px]'
                    src={`https://image.tmdb.org/t/p/w185/${item.poster_path}`}
                    alt="" />
            </Link>
            <p
                className='flex h-1/6 items-center p-2 justify-between '>
                <span className='truncate w-4/6 text-dark dark:text-white font-normal sm:font-bold'>
                    {item.original_title}
                </span>
                <span
                    className='text-yellow-500 flex font-normal sm:font-semibold items-center'>
                    <img className='h-6' src={startLogo} alt="star" />
                    <span className='align-bottom p-top'>{item.vote_average}</span>
                </span>
            </p>

        </div>
    )
})
