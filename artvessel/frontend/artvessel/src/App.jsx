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
import EditProfile from "./EditProfile";
import PostEdit from "./PostEdit";
import ShopEdit from "./ShopEdit";
import Saved from "./Saved";
import './css/mobile.css'
import PageNotFound from "./PageNotFound";

export const UserContext = React.createContext()

function App() {
  const [user, setUser] = useState("")
  const [token, setToken] = useState("")
  const [username, setUsername] = useState(document.cookie.replace("current_user=", ""))

  function change_user(name) {
    setUsername(name)
  }

  useEffect(() => {
        fetch("http://127.0.0.1:8000/users-api/user/" + username)
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setUser(data)
        })
        .catch((err) => {
            console.log(err.message)
        })

        fetch("http://127.0.0.1:8000/users-api/csrf")
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setToken(data.token)
        })
        .catch((err) => {
            console.log(err.message)
        })
  }, [username])

  return (
  <>
    <Router>
      <UserContext.Provider value={[user, change_user, token]}>
        <Navbar/>
        <div className="whole-page">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/saved" element={<Saved/>} />
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/create/post" element={<CreatePost/>}/>
            <Route exact path="/create" element={<Create/>}/>
            <Route exact path="/post/:pk/edit" element={<PostEdit/>}/>
            <Route exact path="/post/:pk" element={<PostDetails/>}/>
            <Route exact path="/create/shop" element={<CreateShop/>}/>
            <Route exact path="/edit-profile" element={<EditProfile/>}/>
            <Route exact path="/shop/:pk/edit" element={<ShopEdit/>}/>
            <Route exact path="/:username" element={<Profile section="gallery"/>}/>
            <Route exact path="/:username/shop" element={<Profile section="shop"/>}/>
            <Route exact path="/:username/info" element={<Profile section="info"/>}/>
            <Route path="*" element={<PageNotFound>Page not found</PageNotFound>} />
          </Routes>
        </div>
        <Footer/>
      </UserContext.Provider>
    </Router>
  </>
  )
}

export default App