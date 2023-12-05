import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "./Profile";
import "./css/info.css"
import Icons from './icons.jsx';
import LinkChecker from './linkChecker.jsx'

export default function Info(){
    const profile = useContext(ProfileContext)

    const [link1, setLink1] = useState('')
    const [link2, setLink2] = useState('')
    const [link3, setLink3] = useState('')  
    const [link4, setLink4] = useState('')
    const [link5, setLink5] = useState('')

    useEffect(() => {
      if (profile){
        for (let i = 0; i < 5; i++) {
            let cur_link = [[profile.link1, setLink1], [profile.link2, setLink2], [profile.link3, setLink3], [profile.link4, setLink4], [profile.link5, setLink5]][i];
            let cur_link_url = cur_link[0]
                cur_link[1](LinkChecker(cur_link_url))
          }
    }  
    }, [profile])
    

    return <>
        <div className="info-container">
            <div className="info-top">
                <div className="info-left">
                    {profile.location && <div className="info-bit">
                        <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                        {profile.location}
                    </div>}
                    {profile.phone && <div className="info-bit">
                        <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        {profile.phone}
                    </div>}
                    {profile.email && <div className="info-bit">
                        <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                        {profile.email}
                    </div>}
                </div>
                {profile.bio && <div className="info-right">
                    <p>{profile.bio}</p>
                </div>}
            </div>
            <div className="info-links">
                {!profile.location && !profile.phone && !profile.email && !profile.bio && !profile.link1 && !profile.link2 && !profile.link3 && !profile.link4 && !profile.link5 && <h2 className="no-posts">No info</h2>}
                {profile.link1 && <a href={profile.link1} target="blank"><div className="info-link">{Icons(link1)}</div></a>}
                {profile.link2 && <a href={profile.link2} target="blank"><div className="info-link">{Icons(link2)}</div></a>}
                {profile.link3 && <a href={profile.link3} target="blank"><div className="info-link">{Icons(link3)}</div></a>}
                {profile.link4 && <a href={profile.link4} target="blank"><div className="info-link">{Icons(link4)}</div></a>}
                {profile.link5 && <a href={profile.link5} target="blank"><div className="info-link">{Icons(link5)}</div></a>}
            </div>
        </div>
    </>
}