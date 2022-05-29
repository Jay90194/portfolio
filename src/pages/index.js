import * as React from 'react'
import "./global.css"
import Hero from './Hero'
import Aboutme from '../component/aboutme'
import Timeline from '../component/Timeline'
import Contact from '../component/Contact'

export default function () {
  return (
    <>
    <div className=''>
    <Hero/>
    <Aboutme/>
    <Timeline/>
    <Contact/>
    </div>
   
    </>
  )
}