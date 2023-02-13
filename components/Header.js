import React from 'react'
import Image from 'next/image'
import {HiOutlineSearch} from 'react-icons/hi';
import {HiOutlineHome} from 'react-icons/hi';

const Header = () => {
  return (
    <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16 '>
        {/*Left*/}
        <div className='flex min-w-fit'>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png' height={40} width={40}></Image>
            <div className='flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500'>
            <HiOutlineSearch size={20}/>
                <input className='hidden lg:inline-flex bg-transparent focus-outline-none' type="text" placeholder='Search Facebook'></input>
            </div>
        </div>
        {/*Center*/}
        <div className='flex-grow justify-center mx-2'>
            <div className='flex items-center'>
                <div className='flex items-center h-14 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer '>
                <HiOutlineHome size={20}/> 
                </div>
            </div>
        </div>
        {/*Right*/}

    </div>
  )
}

export default Header