import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import Profile from "./Profile";

function App() {
  return (
  <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} title="Home | Artvessel" />
        <Route exact path="/login" element={<Login/>} title="Login | Artvessel" />
        <Route exact path="/profile" element={<Profile/>} title="Profile | Artvessel" />
      </Routes>
      <Footer/>
    </Router>
  </>
  )
}

export default App