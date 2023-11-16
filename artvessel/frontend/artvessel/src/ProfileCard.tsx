import React from "react"


function ProfileCard () {
    return (
    <>
        <a href="#">
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
        </a>
    </>
    )
}

export default ProfileCard