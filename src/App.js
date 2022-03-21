import React, { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import OutlinedCard from "./Components/OutlinedCard";
import ComplexCard from "./Components/ComplexCard";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleDarkMode = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <>
      <div className={toggle ? "dark" : ""}>
        <div>
          <h1 className='text-3xl font-bold underline dark:text-zinc-300 dark:bg-zinc-900'>
            Card Component made with React
          </h1>
          <div className='px-6 pt-4 pb-2 dark:text-zinc-300 dark:bg-zinc-900'>
            <span>dark mode?</span>
            {toggle ? (
              <FaToggleOn
                onClick={() => handleDarkMode()}
                className='dark:text-zinc-300 dark:bg-zinc-900'
              />
            ) : (
              <FaToggleOff
                onClick={() => handleDarkMode()}
                className='dark:text-zinc-300 dark:bg-zinc-900'
              />
            )}
          </div>
        </div>
        <div className='flex flex-col space-y-10 py-10 px-10 dark:bg-zinc-900 '>
          <Card />
          <OutlinedCard />
          <ComplexCard />
        </div>
      </div>
    </>
  );
};

export default App;
