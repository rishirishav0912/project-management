import React from 'react'
import SearchBar from './SearchBar'

const CalendarTopBar = () => {
  return (
    <div className='w-full h-[80px] flex items-center justify-between'>

      <div className='flex text-black mx-[30px] w-[300px] items-center'>
        <div
          className='material-symbols-outlined text-black text-[35px] pt-[7px] mx-[5px]'>groups</div>
        <h1 className='text-[32px] font-bold tracking-wide'>Team Sync</h1>
      </div>

      <div className='flex w-[30%] items-center justify-between mr-[10px]'>
        <SearchBar placecholder={"Search for team members"} width={'w-[80%]'} borderColor={'border-gray-300'} iconColor={'text-black'} height={'h-[40px]'} />
        <div className='material-symbols-outlined flex items-center font-black'>settings</div>
        <div className='material-symbols-outlined flex items-center font-black'>notifications</div>
      </div>
    </div>
  )
}

export default CalendarTopBar