import React from 'react';

const Card = ({ title, description, deleteNote, updateNotes, noteId }) => {
  return (
    <div className='parent flex flex-col bg-pink-200 w-80 h-auto rounded-2xl p-4 m-5 shadow-lg'>

      {/* Title */}
      <div className='title bg-pink-600 w-full px-5 py-2 text-2xl text-white rounded-xl font-bold text-center'>
        {title}
      </div>

      {/* Description */}
      <div className='description bg-white h-24 w-full mt-3 border p-2 border-b-pink-700 rounded-xl text-lg font-semibold text-center flex items-center justify-center'>
        {description}
      </div>

      {/* Update Form */}
      <form onSubmit={(e) => updateNotes(e, noteId)} className='mt-3'>
        <input
          type="text"
          name="description"
          placeholder="Enter new description"
          className='bg-white border-2 w-full text-center p-2 rounded font-semibold mb-3'
          required
        />

        {/* Buttons Side by Side */}
        <div className='flex justify-between gap-3'>
          <button
            type="submit"
            className='bg-green-500 text-white w-1/2 py-2 rounded font-bold active:scale-95 transition'
          >
            Update
          </button>

          <button
            type="button"
            onClick={() => deleteNote(noteId)}
            className='bg-red-500 text-white w-1/2 py-2 rounded font-bold active:scale-95 transition'
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default Card;