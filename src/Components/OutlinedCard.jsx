import React from 'react';

const OutlinedCard = () => {
  return (
    <>
      <h2 className="text-xl bold underline">Outlined Card</h2>
      <div id="outlined-card" className="max-w-sm rounded border border-gray-300 shadow-sm overflow-hidden">
        <header className="px-6 py-2 text-gray-500">Word of the day</header>
        <h4 id="outlined-word" className="px-6 py-1 text-xl bold italic">Benevolent</h4>
        <h6 id="outlined-word-type" className="px-6 text-sm italic text-gray-500">adjective</h6>
        <p id="outlined-meaning" className="px-6 py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        <div className="px-6 pt-4 pb-2">
          <button id="outlined-button" className="inline-blockpx-3 py-1 mr-2 mb-2 text-blue-600 underline text-sm">Learn More</button>
        </div>
      </div>
    </>
  )
}

export default OutlinedCard;