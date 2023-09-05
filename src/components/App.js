
import React, { useContext } from "react";
import './../styles/App.css';
import { TableContext } from "../context/TableContext";
import Table from "./Table";
const App = () => {
  const {isClicked,setIsClicked} = useContext(TableContext)
  return (
    <main>
       <div className="top">
        <h2>Blue Whales</h2>
        <button className="btn" onClick={() => setIsClicked(true)} >Get User List</button>
       </div>
       <Table/>
    </main>
  )
}

export default App
