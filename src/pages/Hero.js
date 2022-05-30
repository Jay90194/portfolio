import * as React from 'react'
import Heroill from "../images/HERO1.svg"
import {StaticImage} from 'gatsby-plugin-image'
import "../Css/Hero.css"

export default function Hero () {
    return (
        <>
      <div className='w-auto lg:h-128 '>
        <div>
        <h1 className='text-center text-4xl text-white p-5' >WELCOME TO MY PORTFOLIO</h1>
        </div>
            <div className='heroimg w-auto h-96 bg-black'>
            <img className='w-auto m-auto h-96 lg:h-128  ' src={Heroill} alt="Man "/>
            </div>
            </div> 
        </>
    )
}