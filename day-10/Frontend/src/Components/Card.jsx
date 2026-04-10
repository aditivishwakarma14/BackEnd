import React from 'react'

const Card = ({title , description}) => {
  return (
    <div>
       <div className='parent flex flex-wrap bg-pink-200 w-80 h-80 rounded-2xl p-3 m-5 relative'>
        <div className='title bg-pink-600 w-80 h-fit px-5 py-2 text-3xl text-white rounded-2xl font-bold text-center m-2'>{title} </div>
        <div className='description bg-white h-40 w-80 m-3 border p-2 border-b-pink-700 rounded-2xl text-2xl font-bold text-center'>{description} </div>
        <button className='bg-blue-400 text-white w-80 text-center font-bold mx-28 rounded active:scale-95  rounded'>Delete</button>
       </div>
    </div>
  )
}

export default Card