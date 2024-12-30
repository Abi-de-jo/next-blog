"use client"

import Link from 'next/link'
import React from 'react'
import styles from "./navbar.module.css"
function Navbar() {


  const links = [
    {
      title:"Home",
      id:1,
      link:"/"
    },
    {
      title:"about",
      id:2,
      link:"/about"
    },
    {
      title:"blog",
      id:3,
      link:"/blog"
    },
    {
      title:"contact",
      id:4,
      link:"/contact"
    },
    {
      title:"dashboard",
      id:5,
      link:"/dashboard"
    },
  ]


  return (

    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
      CodeByAbi
      </Link>
<div className={styles.links}>
{links.map((nav)=>(
 <Link href={nav.link} key={nav.id} className={styles.link}>{nav.title}</Link>

))}
<button 
className={styles.button}
onClick={()=>{
  console.log("logout")
}}
>
  Logout
</button>
</div>
    </div>
  )
}

export default Navbar