import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <section className='mt-3 gr-text'>
                <div className="container">
                    <header className='bg-dark p-3 bor-rad shadow'>
                        <ul className='m-0 d-flex gap-4 align-items-center'>
                            <li>
                                <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li>
                                <Link className="nav-link" aria-current="page" to='/firestore'>FireStore</Link>
                            </li>
                        </ul>
                    </header>
                </div>
            </section>
        </>
    )
}

export default Header