import React from 'react'
import { useParams } from 'react-router-dom'
import useGetMovie from '../hook/useGetMovie';
import startLogo from '../assets/star.svg'
import Loading from './Loading';
import Error from './Error';

export default function MovieInfo() {

  const { id } = useParams()
  const { loading, error, movie } = useGetMovie(`${import.meta.env.VITE_SERVER_ADDRESS}/search`, id);

  // console.log("movie info rendered")

  return (
    <>
      {
        loading && !error ?
          <div className='w-full vh-100-nav'>
            <Loading />
          </div> :
          (
            error ?
              <div className='vh-100-nav p-1 ssm:p-3 lg:p-5'>
                <Error />
              </div> :
              (
                <div className='vh-100-nav bg-slate-100 dark:bg-gray-900 p-1 sm:p-5 pt-2  w-full max-w-5xl m-auto shadow-md flex flex-wrap sm:flex-nowrap  text-gray-900 dark:text-gray-100 gap-4'>
                  <img
                    className='rounded-md w-[200px] sm:w-[300px] sm:max-w-[400px]  h-[300px] sm:h-[400px] sm:max-h-[500px] m-auto sm:m-0'
                    src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    alt={movie.original_title} />

                  <div className='p-2 sm:w-[2/6] flex flex-col flex-wrap gap-3'>
                    <p
                      className='font-bold text-2xl text-sky-700'>
                      {movie.original_title}
                    </p>
                    <p
                      className='font-semibold text-lg flex items-center gap-4'>
                      Rating:<span
                        className='text-yellow-500 flex font-normal sm:font-semibold items-center'>
                        <img className='h-6 ' src={startLogo} alt="star" />
                        <span className='align-bottom p-top'>{movie.vote_average}</span>
                      </span>
                    </p>
                    <p
                      className='font-semibold text-md'>
                      Release data: {movie.release_date}
                    </p>
                    <p
                      className='font-semibold text-sm'>
                      Overview : <br />
                      <span className='font-normal'>
                        {movie.overview}
                      </span>
                    </p>
                    <ul className='flex gap-3 flex-wrap list-none'>
                      {
                        movie.genres.map((item, index) => {
                          return <li
                            key={index}
                            className='rounded-full text-sm  border-2 p-1 text-gray-500 border-gray-500 font-semibold'>
                            {item.name}
                          </li>
                        })
                      }
                    </ul>
                    <a
                      href={`${movie.homepage}`}
                      target='_blank'>
                      <button
                        className="bg-sky-500 w-[180px] text-gray-100 rounded-full p-2 font-semibold hover:bg-sky-800">
                        Visit Home Page
                      </button>
                    </a>
                  </div>
                </div>
              )
          )


      }
    </>
  )
}
