import React from 'react';

import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const TableContext = createContext()


export const TableProvider = ({children}) => {
  const [data,setData] = useState([])
const [isClicked,setIsClicked] = useState(false)
  useEffect(() => {
    if(isClicked){
    axios.get("https://reqres.in/api/users")
    .then(response => setData(response.data.data))
    .catch(error => console.log(error.message))
    }
  },[isClicked])
    return(
        <TableContext.Provider value={{data,isClicked,setIsClicked}}>
        {children}
        </TableContext.Provider>
    )
}
