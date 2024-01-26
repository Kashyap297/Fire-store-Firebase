import './App.css';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import error from "./Component/images/error-404.png"
import Firestore from './FireStore/Firestore';
import Form from './FireStore/Form';
import { createContext, useState } from 'react';


export const Stud = createContext()

function App() {

  const [input, setInput] = useState()
  const [student, setStudent] = useState([])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Stud.Provider value={{student, setStudent}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/firestore' element={<Firestore />} />
            <Route path='/form' element={<Form />} />
            <Route path='*' element={<h1 className='text-center mt-5'><img src={error} width="250px"></img></h1>} />
          </Routes>
        </Stud.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
