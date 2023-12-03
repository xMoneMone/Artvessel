import React, { useContext } from "react";
import { ProfileContext } from "./Profile";

export default function Info(){
    const profile = useContext(ProfileContext)

    return <h2>Info</h2>
}