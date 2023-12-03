import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProfileBanner from "./ProfileBanner";
import Posts from "./posts";

export const ProfileContext = React.createContext()

function Profile() {
    const {username} = useParams()
    const [profile, setProfile] = useState("")  

    useEffect(() => {
        setTimeout(() => {
            fetch("http://127.0.0.1:8000/users-api/user/" + username)
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setProfile(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
        }, 1000)
    }, [])

    return <>
        <ProfileContext.Provider value={profile}>
            <ProfileBanner/>
            <Posts/>
        </ProfileContext.Provider>
    </>
}

export default Profile