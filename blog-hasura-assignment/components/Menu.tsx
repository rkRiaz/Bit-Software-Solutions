import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import { MouseEvent, useEffect, useState } from 'react'
import  nhost  from '../utils/nhost'


function Menu() {

  const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const isAuthenticated =  nhost.auth.isAuthenticated()
        setAuthenticated(isAuthenticated)
    }, [authenticated])

    const logOut = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      e.preventDefault()
      nhost.auth.signOut()
      setAuthenticated(false)
      Router.push("/")
    }

   
    return (
        <div className=' bg-blue-600 p-2 sticky top-0 z-30'>
         <div className="container mx-auto flex justify-between items-center px-2 sm:px-8">
            <Link href="/" className="py-4"><Image className="w-auto h-auto" width={70} height={70} src='/logo.png' alt="Logo"/></Link>
            <div className="space-x-5 font-semibold text-white">
              <Link className='menuItemHoverEffect' href="#">Feature</Link>
              <Link className='menuItemHoverEffect' href="#">Spend</Link>
              <Link className='menuItemHoverEffect' href="#">Send</Link>
              <Link className='menuItemHoverEffect text-red-400' href="/sign-up">Sign Up</Link>
              {
                !authenticated && <Link className='menuItemHoverEffect text-red-400' href="/sign-in">Sign In</Link>
              }
              {
                authenticated && <Link className='menuItemHoverEffect text-red-400' href="/add-post">Add Post</Link>
              }
              {
                authenticated && <button onClick={(e) => logOut(e)} className='bg-rose-500 text-white font-bold rounded-full px-3 py-1 hover:bg-rose-400' >Log Out</button>
              }
              <button className='bg-zinc-700 text-white font-bold rounded-full px-3 py-1 hover:bg-zinc-900'>Get the app</button>
            </div>
         </div>
        </div>
    )
}

export default Menu


