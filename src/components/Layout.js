import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css';
import '../styles/home.module.css'
export default function Layout({ children }) {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='content'>
            {children}
        </div>

        <footer>
            <p>copyRight@ 2022 WebTaskers</p>
        </footer>
    </div>
  )
}
