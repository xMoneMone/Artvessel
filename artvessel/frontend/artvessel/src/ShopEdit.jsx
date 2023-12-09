import React, { useContext, useEffect, useState } from "react";
import DarkButton from "./DarkButton"
import "./css/form.css"
import { useParams } from "react-router"
import { UserContext } from "./App";
import { useNavigate } from "react-router-dom";

function ShopEdit() {
    const {pk} = useParams()
    const [title, setTitle] = useState('');
    const [descritpion, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [user, change_user, token] = useContext(UserContext)
    const [shop, setShop] = useState('')
    const [wrong, setWrong] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://127.0.0.1:8000/posts-api/shop/" + pk)
        .then(res => {
            return res.json()
        })
        .then((data) => {
            setShop(data)
            if (document.cookie.replace("current_user=", "") != data.author){
                navigate("/login")
             } 
        })
        .catch((err) => {
            console.log(err.message)
        })
      }, [])

    function deleteShop() {
        if (confirm("Are you sure?")){
            fetch("http://127.0.0.1:8000/posts-api/shop/delete/" + pk)
            navigate("/" + user.username + "/shop")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let formData = new FormData()

        formData.append('title', title)
        formData.append('description', descritpion)
        formData.append('price', price)

        const requestOptions = {
            method: 'POST',
            body: formData
        }
        fetch('http://127.0.0.1:8000/posts-api/shop/edit/'+ shop.id, requestOptions)
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
                <h1>EDIT SHOP LISTING</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                            <div className="drawing-preview"><img src={shop.image} alt="post preview"></img></div>
                    </div>
                    <div className="input-field">
                        <label>Title:</label>
                        <input
                            type="text"
                            required
                            value={title ? title : shop.title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <label>Price:</label>
                        <input
                            type="text"
                            required
                            value={price ? price : shop.price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <label>Description:</label>
                        <textarea
                            maxLength="400"
                            className="description"
                            value={descritpion ? descritpion : shop.description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="wrong"><div className="wrong-div">{wrong}</div></div>
                    <div className="button-div">
                        <DarkButton>SAVE</DarkButton>
                    </div>
                    <a className="edit-button edit-delete edit-center" onClick={deleteShop}>Delete</a>
                </form>
            </div>
        </div>
    </>
}

export default ShopEdit