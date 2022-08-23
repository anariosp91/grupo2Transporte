import React from "react";
import BestSellingTour from "./BestSellingTour";
import LastTour from "./LastTour";
import LastUser from "./LastUser";
import TotalTours from "./TotalTours";
import TotalUsers from "./TotalUsers";


export default function Home(){
    return(
        <div>
            <div className="last-container total-div">
                <TotalTours />
                <TotalUsers />
            </div>
            <BestSellingTour/>
            <div className="last-container">
                <LastTour />
                <LastUser/>
            </div>
        </div>
    )
}