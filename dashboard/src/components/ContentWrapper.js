import React from "react";
import ToursList from "../pages/ToursList";
import UsersList from "../pages/UsersList";

export default function ContentMiddle(){
    return(
        <div>
            <ToursList />
            <UsersList />
        </div>
    )
}