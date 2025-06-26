import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAPI, userlogoutAPI } from '../../services/api'
import Navbar from '../../components/Navbar'
import { signOut } from '../../context/redux/authSlice'
import { useNavigate } from 'react-router-dom'

export default function User() {

    const auth = useSelector((state) => state.auth)
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        auth?.email && getUser()
    }, [auth])

    async function getUser() {
        const response = await getUserAPI({ token: auth.access_token })
        if (response?.id) {
            setUser(response)
        }
    }

       async function userLogout(){
            dispatch(signOut())
            const response = await userlogoutAPI({token: auth.access_token})
            navigate("/")
            navigate(0)
        }

    return (
        <div>
            <Navbar />
            <div className='container mx-auto'>
                {auth?.email && user && (
                    <div className='my-10 font-medium text-lg'>
                        <p>User Id: {user.id}</p>
                        <p>Email: {auth.email}</p>
                        <p>Subscription Status: {user.subscription_status}</p>
                        <button onClick={() => {userLogout()}}  class="mt-3 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>
                    </div>
                )}
            </div>
        </div>
    )
}
