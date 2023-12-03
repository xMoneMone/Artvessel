import React, { useContext, useState} from "react";
import './css/posts.css'
import { Link } from "react-router-dom";
import { ProfileContext } from "./Profile";

function Posts() {
    const profile = useContext(ProfileContext)

    return <div className="posts">
                {profile && profile.posts.length === 0 && <div className="no-posts">
                                        <h2>No posts</h2>
                                     </div>}
                {profile && profile.posts.map((post) => {
                    return <div key={post.id} className="post">
                                <Link to=""><img src={post.image} alt={post.title}></img></Link>
                            </div>
                })}
            </div>
}

export default Posts