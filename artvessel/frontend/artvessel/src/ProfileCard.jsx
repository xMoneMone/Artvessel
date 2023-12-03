import { Link } from "react-router-dom";
import default_pfp from "./images/default-pfp.png"


function ProfileCard ({username, pfp, cover, posts}) {

    return (
    <>
        <Link to="/profile">
            <div className="profile-card">
                <div className="profile-card-cover">
                    {cover && <img src={cover} alt="profile cover"></img>}
                </div>
                <div className="profile-card-pfp-and-username">
                    <div className="profile-card-pfp">
                        {pfp && <img src={pfp} alt="profile picture"></img>}
                        {!pfp && <img src={default_pfp} alt="profile picture"></img>}
                    </div>
                    {username && <h2 className="profile-card-username">{username}</h2>}
                    {!username && <h2 className="profile-card-username profile-card-loading"><span>Loading...</span></h2>}
                </div>
                <div className="profile-card-posts">
                    <div className="profile-card-post">
                        {posts[0] && <img src={posts[0].image} alt="post preview"></img>}
                    </div>
                    <div className="profile-card-post">
                        {posts[1] && <img src={posts[1].image} alt="post preview"></img>}
                    </div>
                    <div className="profile-card-post">
                        {posts[2] && <img src={posts[2].image} alt="post preview"></img>}
                    </div>
                </div>
            </div>
        </Link>
    </>
    )
}

export default ProfileCard