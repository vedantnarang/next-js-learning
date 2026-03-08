import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <Image src="/not-found.svg" alt="Not-Found-Image" width={500} height={500} />
        <h1 className='text-2xl font-bold'>Page Not Found</h1>
        <Link className="bg-indigo-500 border rounded-lg text-white mt-10 p-3" href="/">Back to Home</Link>
    </div>
  )
}

export default NotFound