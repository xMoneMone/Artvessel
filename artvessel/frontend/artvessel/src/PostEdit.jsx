import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "./App";
import { useNavigate } from "react-router-dom";
import DarkButton from "./DarkButton";
import PageNotFound from "./PageNotFound";


function PostEdit(){
    const {pk} = useParams()
    const [post, setPost] = useState("") 
    const [user, setUser, token] = useContext(UserContext)
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [descritpion, setDescription] = useState(''); 
    const [wrong, setWrong] = useState('');
    const [empty, setEmpty] = useState(false)

    useEffect(() => {
        document.title = "Edit Post | Artvessel"
        fetch("http://127.0.0.1:8000/posts-api/post/" + pk)
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setPost(data)
            if (document.cookie.replace("current_user=", "") != data.author){
                navigate("/login")
             } 
        })
        .catch((err) => {
            setEmpty(true)
            console.log(err.message)
        })

    }, [])

    function deletePost() {
        if (confirm("Are you sure?")){
            fetch("http://127.0.0.1:8000/posts-api/post/delete/" + pk)
            navigate("/" + user.username)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData()

        formData.append('title', title)
        formData.append('description', descritpion)

        const requestOptions = {
            method: 'POST',
            body: formData
        }
        fetch('http://127.0.0.1:8000/posts-api/post/edit/' + post.id, requestOptions)
            .then(response => response.json())
            .then((data) => {
                if (data.status != 'ok'){
                    setWrong(data.status[0])
                }
                else {
                    navigate('/post/' + post.id)
                }
            })
    }

    if (empty){
        return <PageNotFound>Post does not exist</PageNotFound>
    }

    return <>
        <div className="form-container">
            <div className="form-background">
                <h1>EDIT POST</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                            <div className="drawing-preview"><img src={post.image} alt="post preview"></img></div>
                    </div>
                    <div className="input-field">
                        <label>Title:</label>
                        <input
                            type="text"
                            required
                            value={title ? title : post.title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <label>Description:</label>
                        <textarea
                            maxLength="2000"
                            className="description"
                            value={descritpion ? descritpion : post.description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="wrong"><div className="wrong-div">{wrong}</div></div>
                    <div className="button-div">
                        <DarkButton>SAVE</DarkButton>
                    </div>
                    <a className="edit-button edit-delete edit-center" onClick={deletePost}>Delete</a>
                </form>
            </div>
        </div>
    </>
}

export default PostEdit