import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut } from '../../context/redux/authSlice'
import { useNavigate } from 'react-router-dom'
import { signUpAPI } from '../../services/api'

export default function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector((state) => state.auth)
    const [msg, setMsg] = useState("")

    async function userSignUp(){

        if(!email || !password) return

        const response = await signUpAPI({email, password})
        if(response?.message === "User created successfully"){
             dispatch(signIn(response))
            navigate("/")
            navigate(0)
        }
        else{
            setMsg(response?.message)
        }
       
    }

    async function userLogout(){
        dispatch(signOut())
        navigate(0)
    }

    return (
        <div>
            <Navbar />
            <div>

                {auth?.email ? (
                    <div className='container md:w-5/12 mx-auto p-3 border border-gray-300 my-10'>
                        <h1 className='font-medium text-2xl mb-3'>You are Logged in, Logout now?</h1>
                        <div>
                                <button onClick={() => {userLogout()}}  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>
                            </div>
                    </div>
                ) : (
                    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img class="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create an account</h2>
                    </div>

                    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <div class="space-y-6">
                            <div>
                                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                                <div class="mt-2">
                                    <input onChange={e => setEmail(e.target.value)} value={email} type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                                    <div class="text-sm">
                                        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <input onChange={e => setPassword(e.target.value)} value={password} type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div>
                                <button onClick={() => {userSignUp()}}  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
                            </div>
                        </div>

                        <p class="mt-10 text-center text-sm/6 text-gray-500">
                            Not a member?
                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                        </p>
                        {msg && <p className='text-base my-2 text-black'>{msg}</p>}
                    </div>
                </div>
                )}

            </div>
        </div>
    )
}
