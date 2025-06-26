import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="w-full flex justify-between items-center px-16 py-6 text-sm text-white bg-[#0F172A]">
            <div className="flex items-center gap-3">
                <Link to={'/'}>
                    <div className='flex gap-2'>
                        <img className='w-[50px]' src='https://static.vecteezy.com/system/resources/thumbnails/022/719/513/small_2x/online-medical-clinic-online-medical-consultation-tele-medicine-innovative-medical-app-on-a-smartphone-healthcare-and-technology-concept-3d-illustration-png.png' />
                        <span className="text-lg font-bold">Clin</span>
                    </div>
                </Link>
            </div>
            <ul className="flex gap-8 text-gray-300 text-lg font-medium">
                <li className="hover:text-white cursor-pointer"><a href='#about'>About</a></li>
                <li className="hover:text-white cursor-pointer"><a href='#solutions'>Our Solutions</a></li>
                <li className="hover:text-white cursor-pointer"><a href='#solution-in-action'>In Action Solutions</a></li>
                <li className="hover:text-white cursor-pointer"><a href='#our-technology'>Technology</a></li>
                <li className="hover:text-white cursor-pointer"><a href='#benefits'>Benefits</a></li>
                <li className="hover:text-white cursor-pointer"><a href='#case-use'>Case Use</a></li>
            </ul>
        </nav>

    )
}
