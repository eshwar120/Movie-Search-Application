import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import brandLogo from '../assets/brand.svg'
import searchLogo from '../assets/search.svg'
import '../styles/navbar.css'
import Theme from './Theme'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {

    const { search, updateSearch } = useContext(UserContext);

    const navigate = useNavigate();
    const location = useLocation()
    if (search.length > 0 && location.pathname !== "/home") navigate('/home')

    return (
        <>

            {
                location.pathname === "/" ?
                    <div className='toggle-in-landing'>
                        <Theme />
                    </div> :
                    <nav className='h-fit px-1 py-4 dark:bg-dark-nav  shadow border-gray-400 sm:p-4 flex sticky top-0 z-10 bg-gray-200 dark:bg-gray-950 justify-around items-center navbar-container'>
                        <Link to={"/home"}><img className='h-12' src={brandLogo} alt="Brand logo" /></Link>
                        <form
                            className='form-group field relative w-4/6 '>
                            <img className='h-7 absolute m-2' src={searchLogo} alt="Search logo" />
                            <input
                                onChange={updateSearch}
                                value={search}
                                type="text"
                                className="block px-2.5 border pl-12 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                                placeholder=' '
                                id='search-bar'
                            />
                            <label
                                htmlFor="search-bar"
                                className='absolute text-sm ml-12 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-200 dark:bg-gray-950 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 italic overflow-x-hidden '
                            >
                                Search for movie...
                            </label>
                        </form>
                        <Theme />
                    </nav>
            }
        </>
    )
}
