import React from 'react'
import ChatInputBox from './ChatInputBox'

const ChatArea = () => {
  return (
    <div className='w-[76%] flex h-[80.5vh] ml-[20px]'>
      <div className='w-full h-full pt-[65vh]'>
        <ChatInputBox />
      </div>
    </div>
  )
}

export default ChatArea