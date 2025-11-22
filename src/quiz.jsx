import React, { useEffect, useState } from 'react'
import { quiz } from '../quizQuestions'

function Quiz() {
  const [marks, setMarks] = useState(0)
  const [answer, setAnswer] = useState('')

  const addMarks = (q) => {
    if (answer == q.correct_answer) {
      setMarks(prev => prev + 1)
    }
    setAnswer('')
  }

  useEffect(() => {
    console.log("answer " + answer);
  }, [answer])

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex justify-between items-center gap-20 p-10'>
        <h1 className='text-2xl text-blue-600 text-center font-extrabold'>Logical Thinking and Programming Quiz</h1>
        <h2 className='bg-green-600 p-4 text-white text-xl font-bold rounded-full'>Total Marks :- {marks}</h2>
      </div>
      <div className='bg-gray-100 rounded w-1/2 p-8'>
        <div>
          <div>
            <label htmlFor="S_name">Name</label>
            <input type="text" name="S_name" id="S_name" />
          </div>
          <div>
            <label htmlFor="S_roll">Roll Number</label>
            <input type="text" name="S_roll" id="S_roll" />
          </div>
        </div>
        {quiz.map((q, idx) => (
          <div key={idx} className='flex flex-col justify-center '>
            <div className='flex justify-between'>
              <h2>{q.question}</h2>
              <p className='text-green-600'>{q.marks}</p>
            </div>
            <ul className='flex flex-col items-start '>
              {q.answers.map((answers, idx) => (
                <div key={idx} className='flex gap-2'>
                  <input type='radio' name='quiz' value={answers} onChange={e => setAnswer(e.target.value)
                  } />
                  <p>{answers}</p>
                </div>
              ))}
            </ul>
            <button className='p-4 bg-black text-white rounded w-1/2 self-center' onClick={() => addMarks(q)}>submit</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quiz