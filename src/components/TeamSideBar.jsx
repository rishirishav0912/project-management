import React from 'react'

const TeamSideBar = () => {
    return (
        <div className='w-[300px] bg-blue-100 flex flex-col h-[88.5vh]'>
            <h1 className='ml-[20px] w-full pt-[10px] text-[20px]'>Live Chat</h1>
            <hr className='w-full border-slate-300 border-[1px] my-[10px]' />

            <div className='flex flex-col justify-end h-[80.5vh] pb-[20%]'>
                <hr className='w-full border-slate-300 border-[1px] my-[10px]' />
                <div className='flex w-full justify-center items-center'>
                    <div className='material-symbols-outlined mx-[10px]'>Edit</div>
                    <span> New Task</span>
                </div>
            </div>
        </div>
    )
}

export default TeamSideBar