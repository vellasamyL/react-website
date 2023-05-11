import React from 'react'
import "./Footer.css"
import myimg2 from "../Images/logo.png"
import foot1 from "../Images/foot01.jpg"
import foot2 from "../Images/foot02.jpg"
import foot3 from "../Images/foot03.jpg"
import foot4 from "../Images/foot04.jpg"
import foot5 from "../Images/foot05.jpg"
import foot6 from "../Images/foot06.jpg"

const Footer = () => {
  return (
    <div>
        <div className='footer-sec'>
            <div className='container'>
                <div className='row foot'>
                    <div className='col-12 col-lg-4 pt-3'>
                        <h2> Company Info</h2>
                        <p> Travel Website Template Demo</p>
                        <div className='nila'>
                        <img src={myimg2}/>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 pt-3'>
                        <h2>Contacts</h2>
                        <p> <i class="fa fa-mobile" aria-hidden="true"></i> 123-456-78901</p>
                        <p> <i class="fa fa-map-marker" aria-hidden="true"></i> London, 51 Street, 43</p>
                        <p> <i class="fa fa-clock-o" aria-hidden="true"></i> Mon - Sat 8.00 - 18.00</p>
                        <div className='btn-flex'>
                        <a href="#" class="face"><i class="fa fa-facebook" aria-hidden="true"></i> </a>
                            <a href="#" class="watts"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                            <a href="#" class="twit"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#" class="insta"><i class="fa fa-instagram" aria-hidden="true"></i> </a>
                           <a href="#" class="google"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                       </div>
                    </div>
                   
                    <div className='col-12 col-lg-4 col-md-12 minicontent'>
                        <h2 style={{marginLeft:"40px"}}>Recent Trips</h2>
                    <div className='row myimg'>
                       <div className='col-4 col-lg-2 col-md-2 mini'>
                         <img src={foot1}/>
                       </div>
                       <div className='col-4 col-lg-2 col-md-2 mini'>
                       <img src={foot2}/>
                        </div>
                        <div className='col-4 col-lg-2 col-md-2 mini'>
                        <img src={foot3}/>
                        </div>
                       <div className='col-4 col-lg-2 col-md-2 mini'>
                         <img src={foot4}/>
                       </div>
                       <div className='col-4 col-lg-2 col-md-2 mini'>
                       <img src={foot5}/>
                        </div>
                        <div className='col-4 col-lg-2 col-md-2 mini'>
                        <img src={foot6}/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='sign-sec'>
                   <h1 style={{fontSize:"20px"}}>Copyright (c) 2023 Vellasamy</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer