import * as React from 'react'
import "../Css/Timeline.css"

export default function Timeline () {
    return (
        <>
          <div class="main">
 <h3 class="heading text-lime-500">[ Responsive Timeline ] </h3>
 
 <div class="container">
     <ul>
         <li>
             <h3 class="title text-lime-500 ">Front End Developer</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
             <span class="circle"></span>
             <span class="date">January 2022</span>
         </li>
         <li>
             <h3 class="title text-lime-500">Back End Developer</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
           
             <span class="circle"></span>
             <span class="date">February 2022</span>
         </li>
         <li>
             <h3 class="title text-lime-500">Full Stack Developer</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
         
                    <span class="circle"></span>
                    <span class="date">March 2022</span>
                </li>
                <li>
                    <h3 class="title text-lime-500">App Developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque quidem esse? Incidunt, odit beatae?</p>
            
                    <span class="circle"></span>
                    <span class="date">April 2022</span>
                </li>
            </ul>
        </div>
    </div>
        </>
    )
}