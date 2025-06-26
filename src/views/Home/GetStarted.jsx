import React from 'react'
import SigninSignupButtons from '../../components/signin-signup-buttons'

export default function GetStarted() {
    return (
        <div className='py-20 text-center bg-[#1E293B]'>
            <div className='w-full md:w-7/12 px-3 mx-auto'>
                <p className='text-3xl font-extrabold custom-blue-text mb-5'>Get Started</p>
                <p className='text-white mb-4 text-justify'>
                   Ready to transform your clinical documentation process? Contact our team to learn how Clin Technologies can be tailored to your specific healthcare setting.
                </p>
                <div className='flex justify-center text-white'>
                    <div className='py-6 px-10 border border-gray-600 rounded-xl'>
                    Or reach us directly via email at <span className='custom-blue-text'>support@clintechso.com</span>
                </div>
                </div>
                <div className='mt-5 flex justify-center'>
                    <SigninSignupButtons />
                </div>
            </div>
            
        </div>
    )
}
