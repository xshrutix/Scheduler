import React from 'react';
import Navigation from './components/Navigation'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TimeTable from './components/TimeTable'
import ClassTimeTable from './components/ClassView';
import Guide from './components/Guide';

const App = () => {
  return (
    <div  style={{"backgroundColor" : "black"}}>
      <Navigation />
      <BrowserRouter>
        <Routes>
          
          
          <Route path='/' element= {<Home/>}/>
          <Route path='/guide' element= {<Guide/>}/>
          <Route path='/generate' element={<TimeTable />} />
          <Route path='/generateClass' element={<ClassTimeTable/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App