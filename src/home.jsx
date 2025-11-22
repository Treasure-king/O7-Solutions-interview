import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex justify-center items-center h-screen bg-linear-to-r from-cyan-500 to-blue-500'>
        <div className='flex flex-col gap-4'>
            <Link to={'/quiz'} className='px-4 py-2 bg-black text-white text-lg font-bold cursor-pointer'>Take the Quiz</Link>
            <Link to={'/quizForm'} className='px-4 py-2 bg-black text-white text-lg font-bold cursor-pointer'>Create A Quiz</Link>
        </div>
    </div>
  )
}

export default Home