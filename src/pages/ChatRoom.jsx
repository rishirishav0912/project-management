import React from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import TeamSideBar from '../components/TeamSideBar'
import ChatArea from '../components/ChatArea'

function ChatRoom() {
    return (
        <div className='flex w-full h-screen'>
            <Sidebar height={'h-screen'}/>
            <div className='flex flex-col w-full h-screen'>
                <TopBar />
                <div className='flex flex-row w-full h-auto'>
                    <TeamSideBar />
                    <ChatArea />
                </div>
            </div>
        </div>
    )
}

export default ChatRoom