import React from 'react'
import SearchBar from './SearchBar'

const TopBar=()=> {
  return (
    <div className='w-full h-[80px] bg-violet-800 flex items-center'>
        <div className='flex text-white mx-[30px] w-[300px]'>
            <h1 className='text-[20px] font-semibold'>Team Sync Platform</h1>
        </div>
        <SearchBar placecholder={"Search in Team Messages"} width={'w-full'} borderColor={'border-white'} iconColor={'text-white'} height={'h-[50px]'} marginLeft={'ml-[65px]'} marginX={'mx-[30px]'}/>
    </div>
  )
}

export default TopBar