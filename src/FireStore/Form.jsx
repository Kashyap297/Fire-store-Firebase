import React, { useContext, useState } from 'react'
import { Stud } from '../App';
import { db } from './firebase';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const { input, setInput } = useContext(Stud)
    const { student, setStudent } = useContext(Stud)
    const { fetchUser } = useContext(Stud)
    const { edit, isEdit } = useContext(Stud)
    const { id, setId } = useContext(Stud)
    const {init} = useContext(Stud)
    const navigate = useNavigate()

    const [errors, setErrors] = useState({})

    const checkValidation = (input) => {
        const errors = {}

        if (input.name.trim() === "") {
            errors.name = "Invalid Name*"
        } if (input.email.trim() === "") {
            errors.email = "Invalid Email-ID*"
        }

        return errors
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // error handle
        const validate = checkValidation(input)
        setErrors(validate)
        const check = Object.keys(validate)
        if (check.length < 1) {
            if (edit && id) {
                const studRef = doc(db, `users/${id}`)
                await updateDoc(studRef, input)
                isEdit(false)
                navigate(-1)
            } else {
                try {
                    const studRef = await addDoc(collection(db, "users"), input)

                    navigate(-1)
                } catch (e) {
                    console.error('error', e)
                }
            }
            fetchUser()
            setInput(init)
        }
        // console.log(input);
    }

    return (
        <>
            <section className='mt-5 gr-text'>
                <div className="container">
                    <div className="col-4 m-auto">
                        <form action="" className='bg-light p-3 bor-rad lightslategrey shadow-lg' onSubmit={handleSubmit}>
                            <h4 className='text-center mb-4'>{edit ? "Update Student" : "Add Student"}</h4>
                            <div className="form-group mb-3">
                                <input type="text" placeholder="" name='name' value={input ? input.name : ''} onChange={handleChange}></input>
                                <label>Name</label>
                                <div className='text-danger text-end'>{errors.name}</div>
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <input type="email" placeholder="" name='email' value={input ? input.email : ''} onChange={handleChange}></input>
                                <label>Email - ID</label>
                                <div className='text-danger text-end'>{errors.email}</div>
                            </div>
                            <div className='text-danger text-end'></div>
                            <button type='submit' className='button w-100 py-2 mt-3'>{edit ? "Update" : "Add"}</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form;