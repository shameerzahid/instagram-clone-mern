import React from 'react'

const Profile = () => {
  return (
    <div style={{maxWidth: "550px", margin: "0px auto"}}>
      <div style={{display: "flex", 
    justifyContent: "space-around",
    margin: "18px 0px",
    borderBottom: "1px solid grey"}}>
      <div>
        <img style={{width: "160px", height: "160px", borderRadius: "80px"}} src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80" alt="" />
      </div>
      <div>
        <h4>shameer zahid</h4>
        <div style={{display: "flex", justifyContent: "space-between", width: "108%"}}>
          <h6>40 posts</h6>
          <h6>40 followers</h6>
          <h6>40 following</h6>

        </div>
      </div>
    </div>

    <div className='gallery'>
      <img className='item' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80" alt="" />
      <img className='item' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80" alt="" />
      <img className='item' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80" alt="" />
      <img className='item' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80" alt="" />
      <img className='item' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80" alt="" />
      <img className='item' src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80" alt="" />

    </div>
    </div>
  )
}

export default Profile
