import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const words = ["słowo", "słowa", "słówka"]

ReactDOM.render(
  <React.StrictMode>
    <App data={words} />
  </React.StrictMode>,
  document.getElementById("root")
)
