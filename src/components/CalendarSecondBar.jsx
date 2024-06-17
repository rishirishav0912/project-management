import React from 'react'
import { Link } from 'react-router-dom'

const CalendarSecondBar=()=> {
  return (
    <div className='h-[65px] bg-blue-100 w-full flex items-center justify-around'>
        <Link to={"/"} className='font-normal'>Dashboard</Link>
        <Link to={"/"} className='font-normal'>Chat</Link>
        <Link to={"/"} className='font-normal'>Tasks</Link>
        <Link to={"/"} className='font-normal'>Sort by</Link>
        <Link to={"/"} className='font-normal'>Calendar</Link>
        <Link to={"/"}><span className='font-black material-symbols-outlined'>Search</span></Link>
    </div>
  )
}

export default CalendarSecondBar