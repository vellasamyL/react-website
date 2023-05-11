import React from 'react'
import "./Form.css"


const Form = () => {
  return (
    <div>
        <div className='form-back'>
       <div className='container '>
          <div className='row p-5'>
          <div className='rightform'>
             <div className='col-12 col-lg-6 col-md-8 form-sec'>
                <h1>Get In Touch With Us</h1>
                <h3>Our manager will contact you soon</h3>
                <form>
                    <label for="first"> Full Name</label><br></br>
                 <input type="text " id="first" placeholder='Your Name'></input><br></br>

                 <label for="Email"> Eamil Address</label><br></br>
                 <input type="text " id="Email" placeholder='Your Eamil'></input><br></br>

                 <label for="number"> Phone Number</label><br></br>
                 <input type="text " id="number" placeholder='Your Number'></input><br></br>

                 <label for="inter"> Interested In</label><br></br>
                 <input type="text " id="inter" placeholder='Interest In Tarvel'></input><br></br>

                 <label for="person"> Number Of Person</label><br></br>
                 <input type="text " id="person" placeholder='How Many People Will Travel'></input><br></br>

               <button className='btn'> Send Messages</button>
                 </form>
                 </div>
             </div>
          </div>
       
     </div>
        </div>
    
    </div>
  )
}

export default Form