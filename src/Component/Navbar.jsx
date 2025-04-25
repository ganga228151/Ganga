import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div className="w-full px-4 py-2 flex justify-between items-center text-white bg-blue-900 bg-opacity-80">
               <Link to={"/"}> <h1 className="text-2xl font-bold">Home</h1></Link>
                <Link to={"/gallery"}>Gallery</Link>
                <Link to={"/video"}>Video</Link>
                 <button className="bg-green-500 px-4 py-2 rounded text-white font-semibold"></button>
            </div>
        </div>
    )
}
