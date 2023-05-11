import React from 'react'
import "./Team.css"
import face01 from "../Images/face1.jpg"
import face02 from "../Images/face2.jpg"
import face03 from "../Images/face3.jpg"
import face04 from "../Images/face4.jpg"

const Team = () => {
  const task=[{
    img:face01,
    head:"John Bennett",
    description:"Asia Tour Expert",
  },
  {
    img:face02,
    head:"Jessica Lee",
    description:"Marketing Manager",
  },
  {
    img:face03,
    head:"Oliver Doe",
    description:"Europe Tour Expert",
  },
  {
    img:face04,
    head:"Christina Hardy",
    description:"Customer Support",
  }
  
]
  return (
    <div>
        <div className='team-sec'>
    <div className='container'>
        <div className='row'>
            <h1 style={{textAlign:"center"}}> Our Team</h1>
            {
              task.map((value,index)=>{
                
                return(
                  <div className='col-11 col-md-6 col-lg-3 images pt-5' key={index}>
                      <img src={value.img}/>
                      <h1>{value.head}</h1>
                      <p>{value.description}</p>
                  <div className='teamicon'>
                    <i class="fa fa-google-wallet" aria-hidden="true"></i>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    <i class="fa fa-skype" aria-hidden="true"></i>
                  </div>
                  </div>
                 );
              })
            }
            {/* <div className='col-11 col-md-6 col-lg-3 images pt-5'>
            <img src={face2}/>
            <h1>Jessica Lee </h1>
            <p> Marketing Manager</p>
            <div className='teamicon'>
                <i class="fa fa-google-wallet" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-skype" aria-hidden="true"></i>
                </div>
            </div>
            <div className='col-11 col-md-6 col-lg-3 images pt-5'>
            <img src={face3}/>
            <h1>Oliver Doe </h1>
            <p>Europe Tour Expert </p>
            <div className='teamicon'>
                <i class="fa fa-google-wallet" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-skype" aria-hidden="true"></i>
                </div>
            </div>
            <div className='col-11 col-md-6 col-lg-3 images pt-5'>
            <img src={face4}/>
            <h1>Christina Hardy </h1>
            <p> Customer Support</p>
            <div className='teamicon'>
                <i class="fa fa-google-wallet" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-skype" aria-hidden="true"></i>
                </div>
            </div> */}
            
        </div>
    </div>
  </div>
    </div>
  )
}

export default Team