import * as React from 'react'
import "../Css/Hero.css"
import { StaticImage } from 'gatsby-plugin-image'

export default function Hero () {
    return (
        <>
     <div className='w-auto m-auto bg-black lg:w-128'>
     <StaticImage
    //      
        src="../images/Welcome1.png"
        // width={1000}
        height= {500}
        layout="fullWidth"
        quality={100}

     />

     

     </div>
        </>
    )
}