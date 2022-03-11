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
      <Card />
      <OutlinedCard />
    </>
  );
};

export default App;
