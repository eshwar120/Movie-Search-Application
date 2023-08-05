import React from 'react'
import brandLogo from '../assets/brand.svg'
import { Link } from 'react-router-dom'
import landingImage from '../assets/landing-img.jpg'

export default function LandingPage() {
  return (
    <div
      className='h-screen p-5 bg-slate-100 dark:bg-gray-900 w-full max-w-5xl m-auto shadow-md overflow-hidden'>
      <Link
        to={"/home"}>
        <img
          className='h-[50px] sm:h-[70px]'
          src={brandLogo}
          alt="Brand logo" />
      </Link>
      <p
        className='text-2xl py-8 px-2 sm:text-3xl sm:p-10 md:text-5xl md:p-12 font-extrabold text-center leading-10'>
        <p className='dark:text-slate-100'>
          Discover Your Movie Magic:
          <br />
        </p>
        <p
          className=' sm:mt-2 md:mt-4 text-gradient bg-gradient-to-r from-violet-500 to-fuchsia-500'>
          A Search Adventure!
        </p>
      </p>
      <p
        className='text-center text-slate-400 dark:text-slate-100'>
        Welcome to the mesmerizing world of movies, where the magic unfolds with every search.
      </p>
      <Link to={"/home"}>
        <button
          className="bg-sky-500 w-[180px] text-gray-100 rounded-full p-2 font-semibold hover:bg-sky-800 m-auto block mt-4">
          Visit Home Page
        </button>
      </Link>
      <div className=''>
        <img className="mt-8 sm:mt-5 sm:w-4/6 md:mt-4 md:w-4/6 m-auto" src={landingImage} alt="" />
      </div>
    </div >
  )
}
