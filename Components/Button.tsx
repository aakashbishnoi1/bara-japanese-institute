import Link from 'next/link'
import React from 'react'

const Button = ({btnName, path}) => {
  return (
  <Link className="btn-main" href={path}>{btnName}</Link> 
  )
}

export default Button
