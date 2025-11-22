
import React, { useState } from 'react'

function QuizForm() {

  const [questionsCount,setQuestionCount] = useState(0)



  return (
    <>
      <h1 className='text-2xl font-bold text-center pt-10'>Create the Logical Thinking and Programming Quiz</h1>
      <div className='flex justify-center items-center h-screen'>
        <form className='flex flex-col justify-center gap-4 bg-gray-50 p-12'>

          <div className='flex justify-between gap-x-2'>
            <label htmlFor="Quiz Title" className='text-lg font-semibold'>Quiz Title</label>
            <input type="text" name="Quiz Title" id="Quiz Title"  className='border'/>
          </div>

          <div className='flex justify-between gap-x-2'>
            <label htmlFor="Subject">Subject</label>
            <input type="text" name="Subject" id="Subject"  className='border'/>
          </div>

          <div className='flex justify-between gap-x-2'>

            <label htmlFor="Difficulty">Difficulty (1 to 5)</label>
            <input type="number" name="Difficulty" id="Difficulty"  className='border'/>
          </div>

          <div className='flex justify-between gap-x-2'>

            <label htmlFor="Duration">Duration (in Hours)</label>
            <input type="Number" name="Duration" id="Duration"  className='border'/>
          </div>

          <div className='flex justify-between gap-x-2'>

            <label htmlFor="Questions">no. of Questions</label>
            <input type="number" name="Questions" id="Questions" value={questionsCount} className='border' onChange={(e)=>setQuestionCount(e.target.value)}/>
          </div>

        </form>
      </div>
    </>
  )
}

export default QuizForm