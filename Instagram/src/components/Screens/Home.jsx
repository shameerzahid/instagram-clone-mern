import React from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className="card home-card">
        <h5>Shameer</h5>
        <div className='card-image'>
          <img src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
        
         </div>
         <div className="card-content">
            <i className="material-icons" style={{color: "red"}}>favorite</i>
          <h6>title</h6>
          <p>this is amazing here</p>
          <input type="text" name="text" placeholder='add a comment' />
         </div>
      </div>

       <div className="card home-card">
        <h5>Shameer</h5>
        <div className='card-image'>
          <img src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="" />
        
         </div>
         <div className="card-content">
          <i className="material-icons" style={{color: "red"}}>favorite</i>
          <h6>title</h6>
          <p>this is amazing here</p>
          <input type="text" name="text" placeholder='add a comment' />
         </div>
      </div>
      
    </div>
  )
}

export default Home
