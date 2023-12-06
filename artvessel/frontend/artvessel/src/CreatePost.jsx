import React, { useState } from "react";
import DarkButton from "./DarkButton"
import "./css/form.css"

function CreatePost() {
    const [title, setTitle] = useState('');
    const [descritpion, setDescription] = useState('');
    const [drawing, setDrawing] = useState('');
    const [drawingPreview, setDrawingPreview] = useState('');

    return <>
        <div className="form-container">
            <div className="form-background">
                <h1>POST DRAWING</h1>
                <form>
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
                        <label>Description:</label>
                        <textarea
                            maxLength="2000"
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

export default CreatePost