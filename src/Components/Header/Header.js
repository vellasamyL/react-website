import React from 'react'
import './Header.css'
import myimg from "../Images/logo.png"

const Header = () => {
  return (
    <div>
   <div className='header-sec'>
      <div className='container'>
         <div className='row'>
            <div className='col-6 col-xs-12'>
               <div className='mylogo'>
               <img src={myimg}/>
                <h1> TravelM4 </h1>
                </div>
             </div> 
             <div className='col-6 d-none d-lg-block buy'>
             <button> Buy now  <i class="fa fa-chevron-right" style={{fontSize:"15px"}} aria-hidden="true"></i></button>
             </div>
             </div>
             <div className='row'>
                <div className='col-10 d-none d-lg-block'>
                <nav class="navbar">
                    <ul class="menubar">
                    <li class="nav-link"><a href="#" class="active">Home</a></li>
                    <li class="nav-link"><a href="#">Site Examples</a></li>
                    <li class="nav-link"><a href="#">Live Demo Blocks</a></li>
		</ul>
			</nav>
         
                </div> 
                </div> 
  
   <div className='row'>
      <div className='col-11 col-xs-12'>
            <div className='banner-sec'>
      <h1 className='hea'>Go on a journey of your dreams</h1>
      <p className='hea'> Sometimes the problem is not that there is no time to travel, 
        but that there is no time to plan it. We are always in a hurry, and we can not slow down and take the time to plan our vacations. But you are lucky,
         you have us. Save time and use our service.</p>
          </div>
      </div>
      </div>
      </div>
   </div>
   </div>
  )
}

export default Header