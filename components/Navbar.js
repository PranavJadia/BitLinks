import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white '>
        <div className="logo text-lg font-bold">
        <Link href="/">BitLinks</Link>
        </div>
        <ul className='flex justify-center items-center gap-4'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <div className='flex gap-3'>
                <Link href="shorten"><button className=' bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                <Link href="github"><button className=' bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Github</button></Link>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar
Navbar