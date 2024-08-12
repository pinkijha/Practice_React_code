import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
     const [user , setUser] = useState(
        [
            "Pinki",
            "shailesh",
            "santoshi",
            "shreya",
            "Ratnesh",
            "sakshi",
            "punnu"

        ]
     )

     const deleteItem = (deleteID) =>{
        // console.log(deleteID)
        const finalUser = user.filter((value, id)=>{
            return id != deleteID;
        })
        setUser(finalUser);
     }
  return (
    <div>
        {
            user.map((value, index) => {
                return(
                    <>
                     <Child key={index} data={value} id={index} removeItem={deleteItem}/>
                    </>
                )
            })
        }
    </div>
  )
}

export default Parent
