import React, { useContext, useEffect, useState } from "react";
import DarkButton from "./DarkButton"
import "./css/form.css"
import { UserContext } from "./App";
import { useNavigate } from "react-router-dom";

function CreateShop() {
    const [title, setTitle] = useState('');
    const [descritpion, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [drawing, setDrawing] = useState('');
    const [drawingFile, setDrawingFile] = useState('');
    const [drawingPreview, setDrawingPreview] = useState('');
    const [user, change_user, token] = useContext(UserContext)
    const [wrong, setWrong] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!document.cookie.replace("current_user=", "")){
           navigate("/login")
        }   
      }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData()

        formData.append('user', user.username)
        formData.append('title', title)
        formData.append('image', drawingFile)
        formData.append('description', descritpion)
        formData.append('price', price)

        const requestOptions = {
            method: 'POST',
            body: formData
        }
        fetch('http://127.0.0.1:8000/posts-api/shop/create', requestOptions)
            .then(response => response.json())
            .then((data) => {
                if (data.status != 'ok'){
                    setWrong(data.status[0])
                }
                else {
                    navigate('/' + user.username + "/shop")
                }
            })
    }


    return <>
        <div className="form-container">
            <div className="form-background">
                <h1>SHOP LISTING</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="drawing">
                            {!drawing &&
                            <div className="drawing_label">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                            </div>}
                            {drawing &&
                            <div className="drawing-preview"><img src={drawingPreview} alt="post preview"></img></div>}
                        </label>
                        <input
                            id="drawing"
                            type="file"
                            required
                            accept=".png,.jpg,.jpeg"
                            value={drawing}
                            onChange={(e) => {
                                setDrawingPreview(URL.createObjectURL(e.target.files[0]))
                                setDrawingFile(e.target.files[0])
                                setDrawing(e.target.value)
                                }}
                        />
                    </div>
                    <div className="input-field">
                        <label>Title:*</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <label>Price:*</label>
                        <input
                            type="text"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <label>Description:</label>
                        <textarea
                            maxLength="400"
                            className="description"
                            value={descritpion}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="wrong"><div className="wrong-div">{wrong}</div></div>
                    <div className="button-div">
                        <DarkButton>POST</DarkButton>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default CreateShop