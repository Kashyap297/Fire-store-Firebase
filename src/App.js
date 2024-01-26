import './App.css';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import error from "./Component/images/error-404.png"
import Firestore from './FireStore/Firestore';
import Form from './FireStore/Form';
import { createContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './FireStore/firebase';


export const Stud = createContext()

function App() {

  const init = {
    name: "",
    email: ""
  }

  const [input, setInput] = useState(init)
  const [student, setStudent] = useState([])
  const [edit, isEdit] = useState(false)
  const [id, setId] = useState()

  const fetchUser = async () => {
    // const docRef = doc(db, 'users')
    const querySnapshot = await getDocs(collection(db, 'users'))

    var list = []
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      var data = doc.data()
      list.push({ id: doc.id, ...data, })
    });
    // list.push({ ...input })
    setStudent(list)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Stud.Provider value={{ student, setStudent, input, init, setInput, fetchUser, edit, isEdit, id, setId }}>
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
