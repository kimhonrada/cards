import React, { useState } from 'react'
import Avatar from 'react-avatar'

const ComplexCard = () => {

  const [expand, setExpand] = useState(false)

  const handleClick = () => {
    console.log('you clicked me')
  }

  const handleExpand = () => {
    if (!expand) {
      setExpand(true)
    } else {
      setExpand(false)
    }
  }

  return (
    <>
      <h2 className="text-xl bold underline">Complex Card</h2>
      <div id='complex-card' className="max-w-sm rounded shadow-lg overflow-hidden">
        <div className="flex flex-row px-6 pt-4 pb-2">
          <Avatar size="50" round='20px' id='avatar' className="mr-2" />
          <div>
            <header className='text-md text-gray-800'>Recipe Name</header>
            <span id='date' className='text-xs text-gray-600'>January 1, 2020</span>
          </div>
          <div className="flex-grow text-right">
            <button id='more'>More</button>
          </div>
        </div>
        <img className="w-full" src='http://placekitten.com/200/300' alt='cat' />
        <p id='description' className="px-6 py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        <div className='flex px-6 pb-2'>
          <button onClick={handleClick} id='like' className="inline-block px-3 py-1 mr-2 mb-2 text-blue-500 rounded-full text-sm">Like</button>
          <button onClick={handleClick} id='share' className="inline-block px-3 py-1 mr-2 mb-2 text-blue-500 rounded-full text-sm">Share</button>
          <div className="flex-grow text-right">
            <button onClick={handleExpand} id='expand' className="inline-block px-3 py-1 mr-2 mb-2 text-blue-500 rounded-full text-sm">Expand</button>
          </div>
        </div>
        <div>
          {expand &&
            <p className="px-6 py-3">You may embed expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element:</p>
          }
        </div>
      </div>
    </>
  )
}

export default ComplexCard;