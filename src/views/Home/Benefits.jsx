import React from 'react'
import SigninSignupButtons from '../../components/signin-signup-buttons'

export default function Benefits() {
    return (
        <div id='benefits' className='py-20 text-center bg-[#1E293B]'>
            <div className='w-full md:w-7/12 px-3 mx-auto'>
                <p className='text-3xl font-extrabold custom-blue-text mb-5'>Benefits</p>
                <p className='text-white mb-4 text-justify'>
                   Healthcare providers using Clin Technologies solutions report:
                </p>
                <ul className='flex flex-col items-start list-disc text-white'>
                    <li>
                        <p className='text-white'>Reduction in documentation time by 40-60%</p>
                    </li>
                     <li>
                        <p className='text-white'>Improved work-life balance with less after-hours charting</p>
                    </li>
                     <li>
                        <p className='text-white'>Enhanced patient interaction due to less focus on note-taking</p>
                    </li>
                     <li>
                        <p className='text-white'>More comprehensive and consistent clinical documentation</p>
                    </li>
                    <li>
                        <p className='text-white'>Reduced risk of documentation errors and omissions</p>
                    </li>
                    
                </ul>

                <div className='mt-5 flex justify-center'>
                     <SigninSignupButtons />

                </div>

            </div>

        </div>
    )
}
