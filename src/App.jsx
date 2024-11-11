
import './App.css'
 import { useState } from 'react';


function App() {
 

   const [color, changeColor]=useState("#e8efa3")
 
 



  return (

   <>
       <h1 className='text-center pt-3' style={{fontSize:'50px',color:'brown'}}>Background Colors</h1>
       <h2 className='text-center p-3'>SELECT A BUTTON TO CHANGE THE BACKGROUND COLOR</h2>
   <div className='w-100' style={{ backgroundColor:`${color}`, height:'100vh'}}>


        <div className='row ' > 
         <div className='col-md-4 mt-5 ps-5'>
<button onClick={()=>changeColor("red")} className='btn btn-danger ' style={{height:'100px',width:'100px',borderRadius:'50%'}}>RED</button>
      </div>

      <div className='col-md-4 mt-5 ps-5'>
      <button onClick={()=>changeColor("blue")} className='btn btn-primary ' style={{height:'100px',width:'100px',borderRadius:'50%'}}>BLUE</button>
      </div> 


      <div className='col-md-4 mt-5 ps-5'>
      <button onClick={()=>changeColor("green")} className='btn btn-success ' style={{height:'100px',width:'100px',borderRadius:'50%'}}>GREEN</button>
      </div> 
      
       </div> 

       <div className='text-center mt-5'>
       <button onClick={()=>changeColor("#e8efa3")} className='btn btn-dark text-center'>REFRESH</button>
       </div>
  </div>     

      </>     
    
   
  )
}

export default App
