import React from "react";
import ToursList from "../pages/ToursList";
import UsersList from "../pages/UsersList";
import LastUser from "./LastUser";

export default function ContentMiddle(){
    return(
        <div>
            <ToursList />
            <UsersList />
            <LastUser/>
        </div>
    )
}