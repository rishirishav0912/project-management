import React from 'react'

const SearchBar = ({ placecholder, width, borderColor, iconColor, height ,marginLeft, marginX}) => {
    return (
        <div className={`${height} ${width} ${borderColor} border-[1px] rounded-[5px] flex ${marginLeft} ${marginX} items-center`}>
            <button className={`flex material-symbols-outlined ${iconColor} ml-[5px] font-black text-[20px]`}>Search</button>
            <input type='text' placeholder={placecholder} className='flex w-full h-full justify-end bg-transparent text-black placeholder:text-black placeholder:font-normal rounded-[5px] ml-[5px] focus:outline-none' />
        </div>

    )
}

export default SearchBar