import * as React from 'react'


export default function Contact () {
    return (
        <>
         <div id="main" class="bg-black flex items-center justify-center h-96">
   <div id="topography" class="h-full w-full flex items-center justify-center">
    <div id="credit-card-container" class="h-56 w-96 rounded-2xl bg-lime-500 group shadow-xl text-black tracking-wide font-semibold transform transition duration-500 ease-in-out rotate-0 scale-100 hover:rotate-6 hover:scale-105 hover:shadow-2xl">
      <div id="dots-texture" class="h-full w-full relative rounded-2xl">
        <div id="credit-card-body" class="absolute w-full h-full grid grid-flow-row grid-cols-3 grid-rows-7">
          
          <div class="row-span-1 col-span-3 flex flew-wrap content-center">
              <span class="text-lg pl-6 pt-6 w-full font-thin inline-block align-text-top text-black">JAY PATEL</span>
              <span class="text-2xl font-bold italic text-right pr-6 pt-6 text-black">VISA</span>
          </div>
          
          <div id="credit-card-num" class="px-6 tracking-widest row-span-3 col-span-3 w-full flex flex-wrap content-center text-black">
              <div contenteditable> +91 &nbsp; 8 7 7 &nbsp; 9 8 0 &nbsp; 3 6 7 3 </div>
          </div>
          
          <div id=""class="col-span-3 row-span-2 px-6 bg-gray-800 bg-opacity-20 rounded-b-2xl border-t-2 border-indigo-600 w-full grid grid-cols-3 grid-rows-2 w-full text-black text-opacity-70">
              <div id="credit-card-name" class="tracking-widest col-span-2 self-end w-full">JAY90194@GMAIL.COM </div>
              {/* <div id="credit-card-date" class="col-span-3 self-start">AGE 20</div> */}
          </div>
        </div>
      </div>
     </div>
  </div>
</div>    
        </>
    )
}