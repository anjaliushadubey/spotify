import React from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import HomePage from "./components/HomePage"
import Play from "./components/play"

const App = () => {
  return (
  <div>
  <Navbar/>
  < div className="flex">
  <Sidebar/>
  <HomePage/>
  </div>
  <Play/>
  </div>
  )
}
export default App