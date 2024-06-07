import React from 'react'
import Start from './pages/Start/Start'
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'

import Question1 from './pages/Question1/Question1'
import Question2 from './pages/Question2/Question2'
import Question3 from './pages/Question3/Question3'
import Question4 from './pages/Question4/Question4'
import Question5 from './pages/Question5/Question5'
import Question6 from './pages/Question6/Question6'
import Question7 from './pages/Question7/Question7'
import Question8 from './pages/Question8/Question8'
import Question9 from './pages/Question9/Question9'
import Question10 from './pages/Question10/Question10'
import Question11 from './pages/Question11/Question11'
import Question12 from './pages/Question12/Question12'
import Question13 from './pages/Question13/Question13'
import Question14 from './pages/Question14/Question14'
import Question15 from './pages/Question15/Question15'
import Question16 from './pages/Question16/Question16'
import Question17 from './pages/Question17/Question17'
import Finish from './pages/Finish/Finish'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Start/>}></Route>
      <Route path='/question1' element={<Question1/>} />
      <Route path='/question2' element={<Question2/>}/>
      <Route path='/question3' element={<Question3/>} />
      <Route path='/question4' element={<Question4/>}/>
      <Route path='/question5' element={<Question5/>}/>
      <Route path='/question6' element={<Question6/>}/>
      <Route path='/question7' element={<Question7/>}/>
      <Route path='/question8' element={<Question8/>}/>
      <Route path='/question9' element={<Question9/>}/>
      <Route path='/question10' element={<Question10/>}/>
      <Route path='/question11' element={<Question11/>}/>
      <Route path='/question12' element={<Question12/>}/>
      <Route path='/question13' element={<Question13/>}/>
      <Route path='/question14' element={<Question14/>}/>
      <Route path='/question15' element={<Question15/>}/>
      <Route path='/question16' element={<Question16/>}/>
      <Route path='/question17' element={<Question17/>}/>
      <Route path='/finish' element={<Finish/>}/>
      </Routes>
    </Router>
  )
}

export default App