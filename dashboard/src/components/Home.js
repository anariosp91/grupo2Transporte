import React from "react";
import LastTour from "./LastTour";
import LastUser from "./LastUser";
import TotalTours from "./TotalTours";
import TotalUsers from "./TotalUsers";
import Tours from "./Tours";
import Users from "./Users";

export default function Home(){
    return(
        <div>
            <TotalTours />
            <TotalUsers />
            <LastTour />
            <LastUser/>
            <Tours />
            <Users />
        </div>
    )
}