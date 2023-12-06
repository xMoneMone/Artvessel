import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Footer from "./Footer";
import Profile from "./Profile";
import React, { useEffect, useState } from "react";
import Create from "./Create";
import CreatePost from "./CreatePost";
import CreateShop from "./CreateShop";
import PostDetails from "./PostDetails";

export const UserContext = React.createContext()

function App() {
  const [user, setUser] = useState("")

  useEffect(() => {
        // fetch("http://127.0.0.1:8000/users-api/user")
        // .then(res => {
        //     return res.json()
        // })
        // .then((data) => {
        //     setUser(data)
        // })
        // .catch((err) => {
        //     console.log(err.message)
        // })
        setUser("admin")
  }, [])

  return (
  <>
    <Router>
      <UserContext.Provider value={user}>
        <Navbar/>
        <div className="whole-page">
          <Routes>
            <Route exact path="/" element={<Home/>} title="Home | Artvessel" />
            <Route exact path="/login" element={<Login/>} title="Log in | Artvessel" />
            <Route exact path="/signup" element={<Signup/>} title="Sign up | Artvessel" />
            <Route exact path="/create/post" element={<CreatePost/>} title="Create | Artvessel" />
            <Route exact path="/create" element={<Create/>} title="Create | Artvessel" />
            <Route exact path="/post/:pk" element={<PostDetails/>} title="Create | Artvessel" />
            <Route exact path="/create/shop" element={<CreateShop/>} title="Create | Artvessel" />
            <Route exact path="/:username" element={<Profile section="gallery"/>} title="Profile | Artvessel" />
            <Route exact path="/:username/shop" element={<Profile section="shop"/>} title="Profile | Artvessel" />
            <Route exact path="/:username/info" element={<Profile section="info"/>} title="Profile | Artvessel" />
          </Routes>
        </div>
        <Footer/>
      </UserContext.Provider>
    </Router>
  </>
  )
}

export default App