import React, { useEffect, useState } from "react"
import ProfileCard from "./ProfileCard"
import "./css/profilecards.css"
import DarkButton from "./DarkButton"

function load_more () {
    console.log("Load!")
}

function ProfileCards ({profiles, title}) {

    return (
        <>
            <div className="cards-and-title">
                {profiles && <h1>{title}</h1>}
                {!profiles && <h1>Loading...</h1>}
                {!profiles && <ProfileCard username="" pfp="" cover="" posts=""/>}
                {!profiles && <ProfileCard username="" pfp="" cover="" posts=""/>}
                {!profiles && <ProfileCard username="" pfp="" cover="" posts=""/>}
                {profiles && profiles.map((profile) => {
                    return(
                        <div key={profile.username} className="cards">
                            <ProfileCard username={profile.username} pfp={profile.pfp} cover={profile.cover} posts={profile.posts} height={profile.height} width={profile.width}/>
                        </div>)    
                    })
                }
                {/* <DarkButton onClick={load_more}>SHOW MORE</DarkButton> */}
            </div>
        </>
    )
}

export default ProfileCards