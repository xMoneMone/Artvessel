import React from "react"
import { Link } from "react-router-dom";


function ProfileCard () {
    return (
    <>
        <Link to="/profile">
            <div className="profile-card">
                <div className="profile-card-cover">
                    <img src="" alt=""></img>
                </div>
                <div className="profile-card-pfp-and-username">
                    <div className="profile-card-pfp">
                        <img src="" alt=""></img>
                    </div>
                    <h2 className="profile-card-username">Username</h2>
                </div>
                <div className="profile-card-posts">
                    <div className="profile-card-post"><img src="" alt=""></img></div>
                    <div className="profile-card-post"><img src="" alt=""></img></div>
                    <div className="profile-card-post"><img src="" alt=""></img></div>
                </div>
            </div>
        </Link>
    </>
    )
}

export default ProfileCard