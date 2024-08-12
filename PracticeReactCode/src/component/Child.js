import React from 'react'

const Child = ({data, id, removeItem}) => {
    // console.log(data)
  return (
    <div className='main'>
        <h1>{data}</h1>
        <button className='btn' onClick={()=>{{removeItem(id)}}}>❌</button>
    </div>
  )
}

export default Child
