import React from "react"

import Letter from "../Letter/Letter"

const Keyboard = ({ resultUpdate, select }) => {
  return (
    <div className="keyboard">
      <Letter letterSelect={select} result={resultUpdate} />
    </div>
  )
}

export default Keyboard
