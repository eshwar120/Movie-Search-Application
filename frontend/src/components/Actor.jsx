import React from 'react'
import { useParams } from 'react-router-dom';
import useGetActor from '../hook/useGetActor';
import Loading from './Loading';
import MovieCard from './MovieCard';

export default function Actor() {
    const { id } = useParams();
    const { loading, error, actor } = useGetActor(`${import.meta.env.VITE_SERVER_ADDRESS}/actor`, id);
    console.log(actor);
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
                <div className='vh-100-nav bg-slate-100 dark:bg-gray-900 p-1 sm:p-5 pt-2  w-full max-w-5xl m-auto shadow-md flex flex-col flex-wrap sm:flex-nowrap  text-gray-900 dark:text-gray-100 gap-4'>
                  <div className='flex flex-wrap sm:flex-nowrap gap-4'>
                    <img
                      className='rounded-md w-[200px] sm:w-[300px] sm:max-w-[400px]  h-[300px] sm:h-[400px] sm:max-h-[500px] m-auto sm:m-0'
                      src={`https://image.tmdb.org/t/p/w185/${actor.data.profile_path}`}
                      alt={actor.data.name} />

                    <div className='p-2 sm:w-[2/6] flex flex-col flex-wrap gap-3'>
                      <p
                        className='font-bold text-2xl text-sky-700'>
                        {actor.data.name}
                      </p>
                      <p
                        className='font-semibold text-md'>
                        Bithday: {actor.data.birthday}
                      </p>
                      <p
                        className='font-semibold text-sm'>
                        Biography : <br />
                        <span className='font-normal'>
                          {actor.data.biography}
                        </span>
                      </p>
                      <p className='font-semibold text-sm'>Also Known as :</p>
                      <ul className='flex gap-3 flex-wrap list-none'>
                        {
                          actor.data.also_known_as.map((item, index) => {
                            return <li
                              key={index}
                              className='rounded-full text-sm  border-2 p-1 text-sky-500 border-sky-500 font-semibold'>
                              {item}
                            </li>
                          })
                        }
                      </ul>
                    </div>
                  </div>
                  <div className='w-full'>
                      <p className='text-xl font-bold text-sky-800 pb-4'>Movies</p>
                      <div className='movie-actor-container w-full'>
                        {
                          actor.data.cast !== undefined && actor.data.cast.map((item, index) => {
                            return <MovieCard item={item} key={`${index}movie`}/>
                          })
                        }
                      </div>
                  </div>
                </div>

              )
          )
      }
    </>
  )
}
