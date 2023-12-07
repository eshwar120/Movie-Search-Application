import React from 'react'
import { Link } from 'react-router-dom';

export default function MovieCard({ item }) {
    // console.log(item)
    const { backdrop_path, original_title, character,name } = item;
    return (
        <Link to={`/movie/${item.id}`}  className=' overflow-hidden rounded-md cast-card'>
            <div className='w-full h-full   relative'>
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={original_title} className=' object-fill rounded' />
                <div className='bg-sky-600 absolute bottom-0 left-0 right-0 translate-y-[50%] text-slate-300 font-semibold text-center transition-all'>
                    <p className='text-[12px] sm:text-sm overflow-ellips '>{original_title || name}</p>
                    <p className='text-[10px] sm:text-xs overflow-ellips'>{character}</p>
                </div>
            </div>
        </Link>
    )
}
