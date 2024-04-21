import React from 'react'

const Card = ({src,text}) => {
    return (
        <div className="card relative h-52 flex-1 bg-gray-300 rounded-2xl m-2 p-3 hover:bg-gray-400 cursor-pointer">
            <p>{text}</p>
            <img src={src} className='w-8 bg-gray-400 rounded-full p-1 absolute bottom-4 right-5' alt="" />
        </div>
    )
}

export default Card