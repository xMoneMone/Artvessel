import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./App";
import './css/saved.css'
import ProfileCards from "./ProfileCards";
import Posts from "./posts";

function Saved(){
    const [user, setUser, token] = useContext(UserContext)
    const [section, setSection] = useState('users')
    const [savedUsers, setSavedUsers] = useState([])

    useEffect(() => {
        const toSend = {
            username: user.username,
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(toSend)
        }
        fetch('http://127.0.0.1:8000/users-api/user/save/saved', requestOptions)
            .then(response => response.json())
            .then((data) => {
                console.log(data.data)
                setSavedUsers(data.data)
            })
    }, [section])

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
        {section == 'users' && <ProfileCards profiles={savedUsers} title=""/>}
        {section == 'users' && savedUsers.length == 0 && <div className="no-posts-div">
            <div className="no-posts"><h2>No users</h2></div>
        </div>}
        {section == 'posts' && <Posts posts={user.saved_posts}/>}
        
    </>

}

export default Saved