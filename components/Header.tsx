import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className = "flex justify-between max-w-7xl mx-auto md:p-5 sticky top-0 bg-white">
        <div className="flex items-center mx-auto space-x-5">
            <div className = "hidden md:inline-flex items-center space-x-5">
                <Link href="/" ><h3 className = "cursor-pointer">Home</h3></Link>
                {/* <Link href="https://scott-foster.netlify.app/"><h3 className = "cursor-pointer">About</h3></Link> */}
                <Link href="https://www.linkedin.com/in/scottfo/"><h3 className = "cursor-pointer">Contact</h3></Link>
                <Link href="https://github.com/Scott-fo"><h3 className='text-black bg-yellow-500 px-4 py-1 rounded-full cursor-pointer'>GitHub</h3></Link>
            </div>
        </div>
    </header>
  )
}

export default Header;
