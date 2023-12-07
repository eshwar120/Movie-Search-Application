import React from 'react'
import { Link } from 'react-router-dom';

export default function CastCard({ item }) {
    console.log(item)
    const { profile_path, character, name } = item;
    return (
        <Link to={`/actor/${item.id}`}  className=' overflow-hidden rounded-md cast-card'>
            <div className='w-full h-full   relative'>
                <img src={`https://image.tmdb.org/t/p/w154/${profile_path}`} alt={name} className=' object-fill rounded' />
                <div className='bg-sky-600 absolute bottom-0 left-0 right-0 translate-y-[50%] text-slate-300 font-semibold text-center transition-all'>
                    <p className='text-[12px] sm:text-sm overflow-ellips'>{character}</p>
                    <p className='text-[10px] sm:text-xs overflow-ellips'>{name}</p>
                </div>
            </div>
        </Link>
    )
}
