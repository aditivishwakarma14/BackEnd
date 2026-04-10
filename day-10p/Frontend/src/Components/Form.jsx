import React from 'react'


const Form = ({formSubmit}) => {

    
  return (
    <div>
        <form className='m-10 '
        onSubmit={formSubmit}>

            <input type="text" placeholder='Enter Title' name="title"
            className='bg-white border-2 text-2xl text-center p-3 rounded font-bold m-2'
            />

            <input type="text" placeholder='Enter Description' name="description" 
            className='bg-white border-2 text-2xl text-center p-3 rounded font-bold m-2 '
            />
           
           <button className='bg-blue-500 text-white px-4 py-3  m-2 text-center font-bold text-2xl rounded active:scale-95'>Submit</button>
        </form>
    </div>
  )
}

export default Form