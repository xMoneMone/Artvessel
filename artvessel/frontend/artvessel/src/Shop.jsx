import React, { useContext } from "react";
import { ProfileContext } from "./Profile";

export default function Shop(){
    const profile = useContext(ProfileContext)

    return <h2>Shop</h2>
}