import React, { useContext } from 'react'
import { TableContext } from '../context/TableContext'
const Table = () => {
   const {data} = useContext(TableContext);
console.log(data)
  return (
    <table>
      <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
        </tr>
      </thead>
      <tbody>
        { data.length === 0 ? <tr>
            <td colSpan="4">
            No data found to display.
            </td>
            </tr> :
        data.map(item => {
            return (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td><img src = {item.avatar} alt='avatar'/></td>
                </tr>
            )
        })
        
    }
      </tbody>
    </table>
  )
}

export default Table
