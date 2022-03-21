import React from "react";
import "./App.css";
import Card from "./Components/Card";
import OutlinedCard from "./Components/OutlinedCard";
import ComplexCard from "./Components/ComplexCard";
import DarkMode from "./Components/DarkMode.jsx";

const App = () => {
  return (
    <>
      <div className='dark'>
        <h1 className='text-3xl font-bold underline dark:text-zinc-300 dark:bg-zinc-900'>
          Card Component made with React
        </h1>
        <DarkMode />
        <div className='flex flex-col space-y-10 py-10 px-10 dark:bg-zinc-900'>
          <Card />
          <OutlinedCard />
          <ComplexCard />
        </div>
      </div>
    </>
  );
};

export default App;
