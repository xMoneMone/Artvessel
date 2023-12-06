import React, { useContext, useEffect, useState } from "react";
import DarkButton from "./DarkButton"
import "./css/form.css"
import { UserContext } from "./App";

function EditProfile() {
    const user = useContext(UserContext)

    const [title, setTitle] = useState('');
    const [descritpion, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [cover, setCover] = useState('');
    const [coverPreview, setCoverPreview] = useState(''); 
    const [pfp, setPfp] = useState('');
    const [pfpPreview, setPfpPreview] = useState(''); 
    const [height, setHeight] = useState(''); 
    const [width, setWidth] = useState(''); 

    return <>
        <div className="form-container">
            <div className="form-background">
                <h1>SHOP LISTING</h1>
                <form>
                <div className="input-field">
                        <label htmlFor="cover">
                            {!cover &&
                            <div className="cover_label">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                            </div>}
                            {cover &&
                            <div className="cover-preview"><img src={coverPreview} alt="post preview"></img></div>}
                        </label>
                        <input
                            id="cover"
                            type="file"
                            required
                            accept=".png,.jpg,.jpeg"
                            value={cover}
                            onChange={(e) => {
                                setCoverPreview(URL.createObjectURL(e.target.files[0]))
                                setCover(e.target.value)
                                }
                            }
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="pfp">
                            {!pfp &&
                            <div className="pfp_label">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                            </div>}
                            {pfp &&
                            <div className="pfp-preview"><img src={pfpPreview} className={height >= width ? "tall" : "long"} alt="post preview"></img></div>}
                        </label>
                        <input
                            id="pfp"
                            type="file"
                            required
                            accept=".png,.jpg,.jpeg"
                            value={pfp}
                            onChange={(e) => {
                                setPfpPreview(URL.createObjectURL(e.target.files[0]))
                                setPfp(e.target.value)
                                
                                const reader = new FileReader();
                                const fileUpload = document.getElementById('pfp')
                                reader.readAsDataURL(fileUpload.files[0]);
                                reader.onload = (e) => {
                                    const image = new Image();
                                    image.src = e.target.result;
                                    image.onload = () => {
                                        const {height, width} = image;
                                        setHeight(height)
                                        setWidth(width)
                                    }
                                }
                                }
                            }
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
                    <div className="button-div">
                        <DarkButton>POST</DarkButton>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default EditProfile