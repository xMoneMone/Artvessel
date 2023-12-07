import React, { useContext, useEffect, useState } from "react";
import DarkButton from "./DarkButton"
import "./css/form.css"
import { UserContext } from "./App";

function EditProfile() {
    const user = useContext(UserContext)

    const [cover, setCover] = useState('');
    const [coverPreview, setCoverPreview] = useState(''); 
    const [pfp, setPfp] = useState('');
    const [pfpPreview, setPfpPreview] = useState(''); 
    const [height, setHeight] = useState(''); 
    const [width, setWidth] = useState(''); 

    const [bio, setBio] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');
    const [link3, setLink3] = useState('');
    const [link4, setLink4] = useState('');
    const [link5, setLink5] = useState('');
    const [shopInfo, setShopInfo] = useState('');
    const [shopTheme1, setShopTheme1] = useState('');
    const [shopTheme2, setShopTheme2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("this submits")

        const toSend = {
            user: user.username,
            cover: cover,
            pfp: pfp,
            bio: bio,
            location: location,
            phone: phone,
            email: email, 
            link1: link1,
            link2: link2,
            link3: link3,
            link4: link4,
            link5: link5,
            shop_info: shopInfo,
            shop_theme1: shopTheme1,
            shop_theme2: shopTheme2
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(toSend)
        }
        fetch('http://127.0.0.1:8000/users-api/user/edit', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }))
    }

    return <>
        <div className="form-container">
            <div className="form-background">
                <h1>EDIT PROFILE</h1>
                <form onSubmit={handleSubmit}>
                <div className="input-field">
                        <label htmlFor="cover">
                            {!user.cover && !cover &&
                            <div className="cover_label">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                            </div>}
                            {cover &&
                            <div className="cover-preview"><img src={coverPreview} alt="post preview"></img></div>}
                            {!cover && user.cover &&
                            <div className="cover-preview"><img src={user.cover} alt="post preview"></img></div>}
                        </label>
                        <input
                            id="cover"
                            type="file"
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
                            {!user.pfp && !pfp &&
                            <div className="pfp_label">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                            </div>}
                            {pfp &&
                            <div className="pfp-preview"><img src={pfpPreview} className={height >= width ? "tall" : "long"} alt="post preview"></img></div>}
                            {user.pfp && !pfp &&
                            <div className="pfp-preview"><img src={user.pfp} className={user.height >= user.width ? "tall" : "long"} alt="post preview"></img></div>}
                        </label>
                        <input
                            id="pfp"
                            type="file"
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
                    <h2>INFO</h2>
                    <div className="input-field">
                        <label>Bio:</label>
                        <textarea
                            maxLength="400"
                            className="description"
                            value={bio ? bio : user.bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <label>Location:</label>
                        <input
                            type="text"
                            maxLength="45"
                            value={location ? location : user.location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <label>Phone:</label>
                        <input
                            type="text"
                            value={phone ? phone : user.phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <label>Email:</label>
                        <input
                            type="text"
                            value={email ? email : user.email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-field links">
                        <label>Links:</label>
                        <input
                            type="text"
                            value={link1 ? link1 : user.link1}
                            onChange={(e) => setLink1(e.target.value)}
                        />
                    </div>
                    <div className="input-field links">
                        <input
                            type="text"
                            value={link2 ? link2 : user.link2}
                            onChange={(e) => setLink2(e.target.value)}
                        />
                    </div>
                    <div className="input-field links">
                        <input
                            type="text"
                            value={link3 ? link3 : user.link3}
                            onChange={(e) => setLink3(e.target.value)}
                        />
                    </div>
                    <div className="input-field links">
                        <input
                            type="text"
                            value={link4 ? link4 : user.link4}
                            onChange={(e) => setLink4(e.target.value)}
                        />
                    </div>
                    <div className="input-field links">
                        <input
                            type="text"
                            value={link5 ? link5 : user.link5}
                            onChange={(e) => setLink5(e.target.value)}
                        />
                    </div>
                    <h2>SHOP</h2>
                    <div className="input-field">
                        <label>Shop info:</label>
                        <textarea
                            maxLength="2000"
                            className="description"
                            value={shopInfo ? shopInfo : user.shop_info}
                            onChange={(e) => setShopInfo(e.target.value)}
                        />
                    </div>
                    <div className="input-field links">
                        <label className="color-input-label">Shop theme (hexcodes):</label>
                        <div className="color-input">
                            <div className="color-preview" style={{"backgroundColor": shopTheme1 ? shopTheme1 : user.shop_theme1}}></div>
                            <input
                                type="text"
                                maxLength="7"
                                value={shopTheme1 ? shopTheme1 : user.shop_theme1}
                                placeholder={user.shop_theme1}
                                onChange={(e) => setShopTheme1(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-field links">
                        <div className="color-input">
                            <div className="color-preview" style={{"backgroundColor": shopTheme2 ? shopTheme2 : user.shop_theme2}}></div>
                            <input
                                type="text"
                                maxLength="7"
                                value={shopTheme2 ? shopTheme2 : user.shop_theme2}
                                placeholder={user.shop_theme2}
                                onChange={(e) => setShopTheme2(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="button-div">
                        <input id="submit-button" type="submit"></input>
                        <label htmlFor="submit-button"><DarkButton>SAVE</DarkButton></label>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default EditProfile