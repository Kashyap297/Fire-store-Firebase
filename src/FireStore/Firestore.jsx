import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from './firebase'
import { getDocs, doc, collection, deleteDoc, getDoc } from 'firebase/firestore'
import bin from '../Component/images/bin.png'
import page  from '../Component/images/page.png'
import edits from '../Component/images/editp.png'
import { Stud } from '../App'

const Firestore = () => {

    const { student, setStudent } = useContext(Stud)
    const { input, setInput } = useContext(Stud)
    const { fetchUser } = useContext(Stud)
    const { id, setId } = useContext(Stud)
    const { edit, isEdit } = useContext(Stud)
    const [noRecord, setNoRecord] = useState(false)

    useEffect(() => {
        if (student.length === 0) {
            setNoRecord(true)
        } else {
            setNoRecord(false)
        }
    }, [student])

    const handleDelete = async (id) => {
        // console.log(id);
        await deleteDoc(doc(db, `users/${id}`))
        fetchUser()
    }

    const handleEdit = async (id) => {
        const studRef = doc(db, `users/${id}`)
        const docSnap = await getDoc(studRef)
        if (docSnap.exists()) {
            var data = docSnap.data()
            setInput({ ...input, ...data })
            isEdit(true)
            setId(id)
        }else{
            alert("Document does not exist!")
        }
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
                                    noRecord ? (
                                        <>
                                            <tr>
                                                <td className='text-center fw-bold pe-0 py-3 fs-3 text-danger' colSpan={6}><img src={page} alt="" className='d-block m-auto' width="150px" />
                                                    Empty Records</td>
                                            </tr>
                                        </>
                                    ) : (
                                        student.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td className=''>
                                                    <Link to={'/form'} className="btn btn-light" onClick={() => handleEdit(item.id)}>
                                                        <img src={edits} alt="" width="24px" />
                                                    </Link></td>
                                                <td className=''>
                                                    <button className="btn btn-light" onClick={() => handleDelete(item.id)}>
                                                        <img src={bin} alt="" width="24px" />
                                                    </button></td>
                                            </tr>
                                        })
                                    )
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