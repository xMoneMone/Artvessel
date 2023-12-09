import React, { useContext, useState} from "react";
import './css/posts.css'
import { Link } from "react-router-dom";
import { ProfileContext } from "./Profile";

function Posts({profile, posts}) {
    return <div className="posts">
                {profile && posts.length === 0 && <div className="no-posts">
                                        <h2>No posts</h2>
                                     </div>}
                {profile && posts.map((post) => {
                    return <Link key={post.id} to={"/post/" + post.id}><div className="post">
                                <img className={post.height >= post.width ? "tall" : "long"}
                                src={post.image} alt={post.title}></img>
                            </div></Link>
                })}
            </div>
}

export default Posts