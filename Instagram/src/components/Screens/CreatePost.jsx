import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import M from 'materialize-css'
const CreatePost = () => {
   const navigate = useNavigate()
  const [title, setTitle] = useState("")
   const [body, setBody] = useState("")
   const [image, setImage] = useState()
   const [url, setUrl] = useState()
   const [isLoading, setIsLoading] = useState(false)

  useEffect(() => { // only take place when url is updated and image is uploaded
    if(url) { //using if to avoid the taking place for the first time
 axios.post("http://localhost:5000/createpost",{
  title,
  body,
  pic: url
}, {
  headers: {
    "Content-Type" : "application/json",
    "Authorization" : "Bearer "+localStorage.getItem("jwt")
  }
}
).then(res => {
  const data = res.data
  console.log(data)
   if (data.error) {
      M.toast({ html: data.error, classes: "#e53935 red darken-1" });
    } else {
      M.toast({ html: "Success", classes: "#43a047 green darken-1" });
      navigate('/');
    }
})
.catch(error => {
    // Handle any errors that occur during the request
     M.toast({ html: error, classes: "#43a047 red darken-1" });
  }) } 
  }, [url])
const postDetails = async () => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "Insta-app");
  data.append("cloud_name", "dxtdjozjh");

  try {
    const response = await fetch("https://api.cloudinary.com/v1_1/dxtdjozjh/image/upload", {
      method: "post",
      body: data
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const imageData = await response.json();
    setUrl(imageData.url)
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

  return (
    <div className='card input-field' style={{ margin : '30px auto', maxWidth: "500px", padding:"20px", textAlign:"center"
     }}>
        <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder='body' value={body} onChange={(e) => setBody(e.target.value)}  />
            <div className="file-field input-field">
      <div className="btn  #64b5f6 blue darken-1">
        <span>Upload Image</span>
        <input type="file" onChange={(e) => setImage(e.target.files[0])}  />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text" />
      </div>
    </div>
            <button className="waves-effect waves-light btn #64b5f6 blue darken-1" onClick={() => postDetails()}  >Submit Post</button>

    </div>
  )
}

export default CreatePost
