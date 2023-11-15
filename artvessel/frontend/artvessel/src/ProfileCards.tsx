import React from "react"
import ProfileCard from "./ProfileCard"
import "./css/profilecards.css"

function ProfileCards () {
    return (
        <>
            <div className="cards-and-title">
                <h1>POPULAR PORTFOLIOS</h1>
                <div className="cards">
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                    <ProfileCard/>
                </div>
            </div>
        </>
    )
}

export default ProfileCards