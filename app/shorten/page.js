"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    }

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
          seturl("")
          setshorturl("")
        }
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-3'>
        <input onChange={e => seturl(e.target.value)} className='px-4 py-2 focus:outline-purple-600 bg-white rounded-md' value={url} type="text" placeholder='Enter Your URL' />
        <input onChange={e => setshorturl(e.target.value)} className='px-4 py-2 focus:outline-purple-600 bg-white rounded-md' value={shorturl} type="text" placeholder='Enter Your Preferred Short URL' />
        <button onClick={generate} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Generate</button>
      </div>
      {generated && (
        <div>
          <div className='font-bold text-lg'>
            
          <span>Your Link </span>
          </div>
          <code><Link target="_blank" href={generated}>{generated}</Link></code>
        </div>
      )}
    </div>
  )
}

export default Shorten
