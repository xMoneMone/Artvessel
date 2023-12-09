import React, { useContext, useState} from "react";
import './css/shop.css'
import { Link } from "react-router-dom";
import { ProfileContext } from "./Profile";

function Shop() {
    const profile = useContext(ProfileContext)
    
    return <div className="shop-container">
                {profile && !profile.shop_info && profile.shop.length === 0 && <div className="no-posts">
                                        <h2>No shop</h2>
                                     </div>}
                {profile && profile.shop_info && <div className="shop-info">
                <div className="roof">
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme1}}></div>
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme2}}></div>
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme1}}></div>
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme2}}></div>
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme1}}></div>
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme2}}></div>
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme1}}></div>
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme2}}></div>
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme1}}></div>
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme2}}></div>
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme1}}></div>
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme2}}></div>
                    <div className="shop-roof" style={{"backgroundColor": profile.shop_theme1}}></div>
                </div>
                <p>
                {profile.shop_info}
                </p>
                </div>}
                {profile && profile.shop.map((shopListing) => {
                    return <Link key={shopListing.id} to={"/shop/" + shopListing.id + "/edit"}>
                            <div className="shop">
                                <h2 className="shop-title">{shopListing.title}</h2>
                                <h3 className="shop-price">{shopListing.price}</h3>
                                <p className="shop-description">{shopListing.description}</p>
                                <div className="shop-image">
                                    <img className={shopListing.height >=shopListing.width ? "tall" : "long"}
                                    src={shopListing.image} alt={shopListing.title}></img>
                                </div>
                            </div>
                        </Link>
                })}
            </div>
}

export default Shop