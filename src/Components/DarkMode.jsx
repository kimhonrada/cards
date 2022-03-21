import React, { useState } from 'react'
import { FaToggleOff, FaToggleOn } from 'react-icons/fa'

const DarkMode = ({ toggleDarkMode }) => {
  const [toggle, setToggle] = useState(false)

  const handleDarkMode = () => {
    toggle ? setToggle(false) : setToggle(true)
  }

  return (
    <>
      <span>
        Dark Mode?
      </span>
      {toggle ? <FaToggleOn onClick={() => handleDarkMode()} /> : <FaToggleOff onClick={() => handleDarkMode()} />}
    </>
  )
}

export default DarkMode;
