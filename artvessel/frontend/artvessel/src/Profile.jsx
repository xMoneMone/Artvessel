import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProfileBanner from "./ProfileBanner";
import Posts from "./posts";
import Info from "./Info";
import Shop from "./Shop";
import PageNotFound from "./PageNotFound";

export const ProfileContext = React.createContext()

function Profile({section}) {
    const {username} = useParams()
    const [profile, setProfile] = useState("")
    const [empty, setEmpty] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch("http://127.0.0.1:8000/users-api/user/" + username)
            .then(res => {
                return res.json()
            })
            .then((data) => {
                document.title = data.username + " | Artvessel"
                if (data.username == undefined){
                    setEmpty(true)
                }
                setProfile(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
        }, 1000)
    }, [])

    if (empty){
        return <PageNotFound>User does not exist</PageNotFound>
    }

    return <>
        <ProfileContext.Provider value={profile}>
            <ProfileBanner/>
            {section == "gallery" && <Posts posts={profile.posts}/>}
            {section == "info" && <Info/>}
            {section == "shop" && <Shop/>}
        </ProfileContext.Provider>
    </>
}

export default Profile