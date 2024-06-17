import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPaperclip } from '@fortawesome/free-solid-svg-icons';

const ChatInputBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEmojiClick = (emojiObject) => {
    setInputValue(inputValue + emojiObject.emoji);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSendClick = () => {
    // Send the message to the server or perform any other action
    console.log('Send button clicked!');
  };

  return (
    <div>
      {showEmojiPicker && (
        <div className='z-20 mt-[-60vh] absolute'><EmojiPicker onEmojiClick={handleEmojiClick} className="h-[100px] w-[100px]" />
        </div>
      )}

      {selectedFile && (
        <div className='z-10 mt-[-10vh] absolute'>
          <div className="flex items-center justify-between p-2 mt-2 bg-gray-100 rounded">
            <p className="text-sm text-gray-600">{selectedFile.name}</p>
            <button
              onClick={() => setSelectedFile(null)}
              className="text-sm text-gray-500 hover:text-gray-800 ml-[5px]"
            >
              Remove
            </button>
          </div>
          </div>
        )}

      <div className="flex flex-col pt-[5px] w-full h-[150px] bg-blue-100">
        <div className="flex flex-col items-center w-full">
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Compose a message..."
            className="w-full p-2 pl-10 text-medium text-gray-700 bg-transparent placeholder:text-[20px] focus:outline-none h-[100px] resize-none"
          />
          <div className='flex flex-row w-full justify-between'>
            <div className="flex items-center ml-3">
              <FontAwesomeIcon
                icon={faSmile}
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="text-lg text-gray-500 cursor-pointer"
              />

              <input
                type="file"
                id="file-input"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="file-input"
                className="text-lg text-gray-500 cursor-pointer ml-2"
              >
                <FontAwesomeIcon icon={faPaperclip} />
              </label>
            </div>
            <button
              className="material-symbols-outlined mr-3"
              onClick={handleSendClick}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInputBox;