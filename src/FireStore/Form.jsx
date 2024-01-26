import React from 'react'

const Form = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    
    return (
        <>
            <section className='mt-5 gr-text'>
                <div className="container">
                    <div className="col-4 m-auto">
                        <form action="" className='bg-light p-3 bor-rad lightslategrey shadow-lg' onSubmit={handleSubmit}>
                            <h4 className='text-center mb-3'>New Student</h4>
                            <div className="form-group mb-3">
                                <input type="text" placeholder="" name='name' ></input>
                                <label>Name</label>
                                {/* <div className='text-danger text-end'>{errors.name}</div> */}
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <input type="email" placeholder="" name='email'></input>
                                <label>Email</label>
                                {/* <div className='text-danger text-end'>{errors.email}</div> */}
                            </div>
                            <div className='text-danger text-end'></div>
                            <button type='submit' className='button w-100 py-2 mt-3'>Add</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form