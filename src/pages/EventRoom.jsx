import React from 'react'
import Sidebar from '../components/Sidebar'
import CalendarTopBar from '../components/CalendarTopBar'
import CalendarSecondBar from '../components/CalendarSecondBar'
import EventCalendar from '../components/EventCalendar'

const EventRoom =()=> {
  return (
    <div>
        <CalendarTopBar />
        <div className='w-full flex flex-row h-[88.5vh]'>
          <Sidebar height={'h-[88.5vh]'}/>
          <div className='w-full h-auto'>
            <CalendarSecondBar />
            <EventCalendar />
          </div>
        </div>
    </div>
  )
}

export default EventRoom