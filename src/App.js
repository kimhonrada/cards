import React from "react";
import "./App.css";
import Card from "./Components/Card";
import OutlinedCard from "./Components/OutlinedCard.jsx";

const App = () => {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>
        Card Component made with React
      </h1>
      <div className='flex flex-col space-y-10 py-10 px-10'>
        <Card />
        <OutlinedCard />
      </div>
    </>
  );
};

export default App;
