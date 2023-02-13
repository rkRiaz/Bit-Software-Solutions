import Layout from '@/components/Layout'
import Link from 'next/link'
import router from 'next/router'
import React, { useState } from 'react'
import  nhost  from '../utils/nhost'

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await nhost.auth.signUp({
            email: email,
            password: password
        })
    
        if(response.error === null) {
            alert("Successfully Signup")
            router.push("/sign-in")
        } else {
            alert("Something wrong! May be email is already used")
        }
    }

  return (
    <Layout>
        <div className="flex items-center justify-center w-screen h-screen">
            <form onSubmit={submit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h4 className="font-bold text-2xl text-center mb-5">Sign Up page</h4>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input onChange={e => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input onChange={e => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="******************" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign Up</button>
                    <Link href="/">Go to Home</Link>
                </div>
            </form>
        
        </div>
    </Layout>
  )
}

export default SignUp