import React, { useEffect, useState } from "react"
import ProfileCards from "./ProfileCards"

function Home () {
    const [profiles, setProfiles] = useState("")

    useEffect(() => {
        setTimeout(() => {
            fetch("http://127.0.0.1:8000/users-api/users")
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setProfiles(data.all_users)
            })
            .catch((err) => {
                console.log(err.message)
            })
        }, 1000)
    }, [])

    return <ProfileCards profiles={profiles} title="POPULAR PORTFOLIOS"/>
}

export default Home