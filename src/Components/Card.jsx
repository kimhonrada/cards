import React from 'react';

const Card = () => {
  return (
    <>
      <h2>Basic Card</h2>
      <div id='card'>
        <header>Word of the day</header>
        <h4 id='word'>Be-ne-vo-lent</h4>
        <h6 id='word-type'>adjective</h6>
        <p id='meaning'>well meaning and kindly</p>
        <button>Learn More</button>
      </div>
    </>
  )
}

export default Card;