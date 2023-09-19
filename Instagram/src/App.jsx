import Navbar from "./components/Navbar"
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Screens/Home"
import Signin from "./components/Screens/Signin"
import Signup from "./components/Screens/Signup"
import Profile from "./components/Screens/Profile"
import CreatePost from "./components/Screens/CreatePost"
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/signin" element={<Signin/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/create" element={<CreatePost/>} />

      </Routes>
    </>
  )
}

export default App
