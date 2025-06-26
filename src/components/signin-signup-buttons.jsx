import React from 'react'
import { Link } from 'react-router-dom'

export default function SigninSignupButtons() {
    return (
        <div className='flex gap-4'>
            <Link to="/login">
                <button className="px-8 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white transition font-medium">
                    Login
                </button>
            </Link>
            <Link to="/signup">
            <button className="px-8 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition font-medium shadow-lg animated-card">
                Signup
            </button>
            </Link>
        </div>
    )
}
