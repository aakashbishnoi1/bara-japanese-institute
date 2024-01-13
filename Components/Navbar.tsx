import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <Image 
            className="logo-img"
            src={"/logo-1.png"}
            height={50}
            width={50}
            alt="logo picture"
            /> 
        </div>
        <div className="nav-links">
            <Link className="nav-link" href={"/"}> Home </Link>
            <Link className="nav-link" href={"/courses"}>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar
