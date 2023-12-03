import React, { useEffect, useState } from "react"
import ProfileCard from "./ProfileCard"
import "./css/profilecards.css"
import DarkButton from "./DarkButton"

function load_more () {
    console.log("Load!")
}

function ProfileCards ({url, title}) {

    const [profiles, setProfiles] = useState("")

    useEffect(() => {
        setTimeout(() => {
            fetch("http://127.0.0.1:8000/" + url)
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setProfiles(data.all_users)
            })
        }, 1000)
    }, [])

    return (
        <>
            <div className="cards-and-title">
                <h1>{title}</h1>
                {!profiles && <ProfileCard username="" pfp="" cover="" posts=""/>}
                {profiles && profiles.map((profile) => {
                    return(
                        <div key={profile.username} className="cards">
                            <ProfileCard username={profile.username} pfp={profile.pfp} cover={profile.cover} posts={profile.posts}/>
                        </div>)    
                    })
                }
                <DarkButton onClick={load_more}>SHOW MORE</DarkButton>
            </div>
        </>
    )
}

export default ProfileCards