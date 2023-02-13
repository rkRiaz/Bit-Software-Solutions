import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-blue-600 shadow">
        <footer className="container mx-auto md:flex md:items-center md:justify-between px-2 sm:px-8 py-8">
            <span className="text-sm text-white sm:text-center ">© 2023 <Link href="/" className="hover:underline">Blog</Link>. All Rights Reserved.</span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">Licensing</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Contact</Link>
                </li>
            </ul>
        </footer>
    </div>

  )
}

export default Footer