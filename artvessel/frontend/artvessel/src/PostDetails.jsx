import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./css/post.css"

function PostDetails() {
    const {pk} = useParams()
    const [post, setPost] = useState("")  

    useEffect(() => {
        setTimeout(() => {
            fetch("http://127.0.0.1:8000/posts-api/post/" + pk)
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setPost(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
        }, 1000)
    }, [])

    return <>
        <div className="container">
            <div className="post-details-post">
                <div id="drawingg" className="post-details-image">
                    {post && <img  src={post.image} alt="drawing"></img>}
                    {!post && <div className="loading"></div>}
                </div>
                <div className="post-info">
                    <div className="title-and-icons">
                        <h2 className="title">{post && post.title}{!post && "Loading..."}</h2>
                        <div className="icons">
                            <svg id="save" className="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z"/></svg>
                            <svg id="redact" className="profile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                        </div> 
                    </div>
                    <div className="description">
                        <p id="description">{post.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PostDetails