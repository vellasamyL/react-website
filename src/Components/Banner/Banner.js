import React from 'react'
import "./Banner.css"

const Banner = () => {
  const task=[{
    icon:"fa fa-home",
    heading:"Handpicked Hotels",
    description:"Travels are different. Everything depends on what purpose the traveler has set for himself.",
  },
  {
    icon:"fa fa-globe",
    heading:"World Class Service",
    description:"Experienced travelers are less prone to fear, they have more varied experiences.",
  },
  {
    icon:"fa fa-money",
    heading:"Best Price Guarantee",
    description:"Travelers become more tolerant to representatives of various minorities.",
  }

]
  return (
  <div>
   <div className='whychoose'>
      <div className='container'>
          <div className='row'>
              <div className='col-12 col-md-10 col-lg-12'>
                <div className='sec-title'>
                 <h1>Why Choose Us</h1>
                 <p>Travel Website Template Demo</p>
                 </div>
                 
                <div className='boxes-sec'>
                  {task.map((item,index)=>{
                    return <div className='boxes col-12 col-lg-4 col-md-6' key={index}>
                      <i class={item.icon} aria-hidden="true"></i>
                      <h1>{item.heading} </h1>
                      <p>{item.description}</p>
                    </div>
                  })}

                 {/* <div className='boxes '>
                 <i class="fa fa-home" aria-hidden="true"></i>
                     <h1>Handpicked Hotels</h1>
                     <p>Travels are different. Everything depends on what purpose the traveler has set for himself.</p>
                 </div>
                 <div className='boxes'>
                 <i class="fa fa-globe" aria-hidden="true"></i>
                  <h1>World Class Service </h1>
                  <p>Experienced travelers are less prone to fear, they have more varied experiences. </p>
                 </div>
                 <div className='boxes'>
                 <i class="fa fa-money" aria-hidden="true"></i>
                  <h1> Best Price Guarantee</h1>
                  <p>Travelers become more tolerant to representatives of various minorities. </p>
                 </div> */}
                 </div>
              </div>
          </div>
      </div>
   </div>
  </div>

  )
}

export default Banner