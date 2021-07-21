import React from "react"

import Letter from "../Letter/Letter"

const Keyboard = ({ select }) => {
  return (
    <div className="keyboard">
      <Letter letterSelect={select} />
    </div>
  )
}

export default Keyboard
