import React from "react"
import ProfileCard from "./ProfileCard"
import "./css/profilecards.css"
import DarkButton from "./DarkButton"

function load_more () {
    console.log("Load!")
}

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
                <DarkButton onClick={load_more}>SHOW MORE</DarkButton>
            </div>
        </>
    )
}

export default ProfileCards