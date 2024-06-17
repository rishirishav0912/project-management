import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({height}) => {
    return (
        <div className={`w-[70px] bg-blue-100 flex ${height}`}>
            <div className='flex-row w-full h-[55%] mt-[70px]'>
                <Link to="/" className='flex w-full justify-center my-[30px]'>
                <div className='material-symbols-outlined'>Space_dashboard</div>
                </Link>

                <Link to="/" className='flex w-full justify-center my-[30px]'>
                    <div className='material-symbols-outlined'>share</div>
                </Link>

                <Link to="/" className='flex w-full justify-center my-[30px]'>
                <div className='material-symbols-outlined'>groups</div>
                </Link>

                <Link to="/" className='flex w-full justify-center my-[30px]'>
                <div className='material-symbols-outlined'>Event_note</div>
                </Link>
            </div>

        </div>
    )
}

export default Sidebar