import * as React from 'react'
import "../Css/Hero.css"
import { StaticImage } from 'gatsby-plugin-image'

export default function Hero () {
    return (
        <>
     <div className='w-auto m-auto bg-black lg:w-128'>
    <StaticImage
        src='../images/Portfolio.png'
        quality={100}
    />
     

     </div>
        </>
    )
}