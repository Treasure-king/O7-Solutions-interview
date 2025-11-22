import React from 'react'

function QuizForm() {
  return (
    <div className='flex justify-center items-center'>

    <form className='flex flex-col justify-center items-center'>
        <h1>Create the Logical Thinking and Programming Quiz</h1>
        <label htmlFor="Quiz Title">Quiz Title</label>
        <input type="text" name="Quiz Title" id="Quiz Title" />

        <label htmlFor="Subject">Subject</label>
        <input type="text" name="Subject" id="Subject" />

        <label htmlFor="Difficulty">Difficulty (1 to 5)</label>
        <input type="number" name="Difficulty" id="Difficulty" />

        <label htmlFor="Duration">Duration</label>
        <input type="time" name="Duration" id="Duration" />

        <label htmlFor="Questions">no. of Questions</label>
        <input type="number" name="Questions" id="Questions" />
    </form>
    </div>
  )
}

export default QuizForm