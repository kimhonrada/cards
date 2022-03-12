import React from 'react'
import Avatar from 'react-avatar'

const ComplexCard = () => {
  return (
    <>
      <h2>Complex Card</h2>
      <div id='complex-card'>
        <Avatar size="50" round='20px' id='avatar' />
        <header>Recipe Name</header>
        <span id='date'>Date</span>
        <button id='more'>More</button>
        <img src='http://placekitten.com/200/300' />
        <p id='description'>Lorem ipsum dolor</p>
        <button id='like'>Like</button>
        <button id='share'>Ssare</button>
        <button id='expand'>expand</button>
      </div>
    </>
  )
}

export default ComplexCard;