import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from './firebase'
import { getDocs, doc, collection } from 'firebase/firestore'
import bin from '../Component/images/bin.png'
import edit from '../Component/images/editp.png'
import { Stud } from '../App'

const Firestore = () => {

    const Global = useContext(Stud)
    // console.log(Global);
    const student = Global.student
    const setStudent = Global.setStudent
    // console.log(student);

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        // const docRef = doc(db, 'users')
        const querySnapshot = await getDocs(collection(db, 'users'))

        var list = []
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            var data = doc.data()
            list.push({ id: doc.id, ...data })
        });
        setStudent(list)
    }


    return (
        <>
            <section className='my-5'>
                <div className="container">
                    <div className="area p-4 px-5 bg-white bor-rad shadow">
                        <table className='table table-hover table-bordered table-rounded p-3 text-center caption-top align-middle'>
                            <caption className='mb-3'>
                                <div className="d-flex justify-content-between">
                                    <h3 className='m-0'>Cloud FireStore Firebase </h3>
                                    <div>
                                        <Link to='/form' className='btn btn-dark'><i className="fa-solid fa-user-group me-2"></i> Add Student </Link>
                                    </div>
                                </div>
                            </caption>
                            <thead className='table-dark'>
                                <tr>
                                    <th className='gr-text'>Sr.</th>
                                    <th className='gr-text'>Name</th>
                                    <th className='gr-text'>Email-ID</th>
                                    <th className='gr-text col-2' colSpan={2}>Action</th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'>
                                {
                                    student && student.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td className=''>
                                                <Link to={'/form'} className="btn btn-light">
                                                    <img src={edit} alt="" width="24px" />
                                                </Link></td>
                                            <td className=''>
                                                <button className="btn btn-light">
                                                    <img src={bin} alt="" width="24px" />
                                                </button></td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Firestore