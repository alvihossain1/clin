import React from 'react'
import SigninSignupButtons from '../../components/signin-signup-buttons'
import Navbar from '../../components/Navbar'
import { useSelector } from 'react-redux'

export default function Main() {

    const auth = useSelector((state) => state.auth)


    return (
        <div className="min-h-screen bg-[#0A0F2C] text-white font-sans relative overflow-hidden">
          
            <Navbar />
      

            <section className="flex flex-col items-center text-center px-6 py-28 relative z-10">
                <img className='w-[200px]' src='https://static.vecteezy.com/system/resources/thumbnails/022/719/513/small_2x/online-medical-clinic-online-medical-consultation-tele-medicine-innovative-medical-app-on-a-smartphone-healthcare-and-technology-concept-3d-illustration-png.png' />
                
                {auth?.email && (
                    <div>
                        <h1 className="text-2xl font-extrabold text-emerald-600 mb-1">Hey {auth.name}</h1>
                        <h1 className="text-base font-extrabold text-emerald-600 mb-3">{auth.email}</h1>
                    </div>
                )}
                <h1 className="text-5xl font-extrabold custom-blue-text mb-6">Clin Technologies</h1>

                <p className="text-3xl font-semibold text-gray-400 md:w-8/12">
                    Revolutionizing clinical documentation through <span className="text-yellow-400 font-bold">HIPAA COMPLIANT</span> advanced artificial
                    intelligence, giving healthcare providers more time for what truly matters — patient care. Try it for <span className="text-yellow-400 font-bold">FREE</span> today.
                </p>

                <p className="text-2xl text-white mt-6 max-w-2xl">
                    Our sophisticated AI platform intelligently processes clinical conversations, creating accurate documentation that integrates with your existing EMR system.
                </p>

                <div className="mt-10">
                    <SigninSignupButtons />
                </div>
            </section>

            {/* <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-10 left-[-5rem] w-72 h-72 bg-[#1f2a4a] opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute top-40 right-32 w-48 h-48 bg-[#1f2a4a] opacity-20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 right-[-6rem] w-96 h-96 bg-[#1f2a4a] opacity-20 rounded-full blur-3xl"></div>
            </div> */}
        </div>
    )
}
