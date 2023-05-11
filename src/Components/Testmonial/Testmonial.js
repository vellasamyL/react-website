import React from 'react'
import "./Testmonial.css"
import testimg from "../Images/face1.jpg";

const task=[{
  head:" Accomodation",
  icon:"fa fa-star-o",
},
{
  head:" Destination",
  icon:"fa fa-star-o",
},
{
  head:" Meals",
  icon:"fa fa-star-o",
},
{
  head:" Transport",
  icon:"fa fa-star-o",
},
{
  head:" Price",
  icon:"fa fa-star-o",
},
{
  head:"Overall",
  icon:"fa fa-star-o",
}
]

const Testmonial = () => {
  return (
    <div>
        <div className='test-sec'>
            <div className='container'>
                <div className='row'>
                    <h1 style={{textAlign:"center",fontWeight:"650",color:"gray"}}> Testimonials</h1>
                    <div className='col-8 col-lg-2 col-md-2 pt-3 crop'>
                       <img src={testimg}/>
                    </div>
                    <div className='col-10 col-md-10 testpara'>
                         <h1 style={{fontSize:"28px",fontWeight:"600"}}>Tom Wilson</h1>
                          <h4 style={{color:"grey pt-4",fontSize:"17px"}}>December 15, 2018 at 11:17 am</h4>
                          <p className='para'>Booked a vacation through your company in Cyprus at the end of April. The hotel is very decent, the quality of food is good, the area is large, so even the pool is there. Azure water and white velvet sand will not leave anyone indifferent. The nearest beach is about 150 meters from this hotel. 
                            Thank you very much, guys, I look forward to a new meeting with you.</p>
                           
                            <div className='col-12 col-lg-12 col-md-12 d-flex flex-wrap'>
                            {task.map((item,index)=>{
                              return(
                                <>
                                <div className='col-6 col-lg-3 col-md-3 rating'>
                                     <h3>{item.head}</h3>
                                 </div>
                               <div className='col-6 col-lg-3 col-md-3 rating'>
                                     <i class={item.icon} aria-hidden="true"></i>
                                      <i class={item.icon} aria-hidden="true"></i>
                                      <i class={item.icon} aria-hidden="true"></i>
                                      <i class={item.icon} aria-hidden="true"></i>
                                </div>
                                </>
                              );
                            })}
                  
                           {/* <div className='col-6 col-lg-3 col-md-3 rating'>
                           <h3> Destination</h3>
                       </div>
                     <div className='col-6 col-lg-3 col-md-3 rating'>
                           <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                           </div>

                     </div>

                     <div className='col-12 col-lg-12 col-md-12 d-flex flex-wrap'>
                      <div className='col-6 col-lg-3 col-md-3 rating'>
                           <h3> Meals</h3>
                       </div>
                     <div className='col-6 col-lg-3 col-md-3 rating'>
                           <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                           </div>
                           <div className='col-6 col-lg-3 col-md-3 rating'>
                           <h3> Transport</h3>
                       </div>
                     <div className='col-6 col-lg-3  col-md-3 rating'>
                           <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                           </div>
                     </div>
                     <div className='col-12 col-lg-12 col-md-12 d-flex flex-wrap'>
                      <div className='col-6 col-lg-3 col-md-3 rating'>
                           <h3>Price </h3>
                       </div>
                     <div className='col-6 col-lg-3 col-md-3 rating'>
                           <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                           </div>
                           <div className='col-6 col-lg-3 col-md-3 rating'>
                           <h3> Overall</h3>
                       </div>
                     <div className='col-6 col-lg-3 col-md-3 rating'>
                           <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                           </div> */}

                      </div> 
                           
                    </div>
                </div>

                <hr></hr>
            </div>
        </div>
    </div>
  )
}

export default Testmonial