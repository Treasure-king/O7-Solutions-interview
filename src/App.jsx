import './App.css'

import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './home'
import Quiz from './quiz'
import QuizForm from './quizForm'


function App() {

  return (
    <Routes>
      <Route element={<Home/>} path='/'>Home</Route>
      <Route element={<Quiz/>} path='/quiz'>Quiz</Route>
      <Route element={<QuizForm/>} path='/quizForm'>Create Quiz Form</Route>
    </Routes>
  )
}

export default App
