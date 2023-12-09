import React, { useContext, useState } from "react";
import { UserContext } from "./App";
import './css/saved.css'
import ProfileCards from "./ProfileCards";
import Posts from "./posts";

function Saved(){
    const [user, setUser, token] = useContext(UserContext)
    const [section, setSection] = useState('users')

    function change_users(){
        setSection('users')
    }

    function change_posts(){
        setSection('posts')
    }

    return <>
        <div className="saved-sections">
            <a className={section == 'users' ? "saved-option saved-highlight" : "saved-option"} onClick={change_users}><h2>USERS</h2></a>
            <a className={section == 'posts' ? "saved-option saved-highlight" : "saved-option"} onClick={change_posts}><h2>POSTS</h2></a>
        </div>
        {section == 'users' && <ProfileCards profiles={user.saved_users} title=""/>}
        {section == 'users' && user.saved_users.length == 0 && <div className="no-posts-div">
            <div className="no-posts"><h2>No users</h2></div>
        </div>}
        {section == 'posts' && <Posts posts={user.saved_posts}/>}
        
    </>

}

export default Saved