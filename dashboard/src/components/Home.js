import React from "react";
import BestSellingTour from "./BestSellingTour";
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
            <BestSellingTour/>
            <LastTour />
            <LastUser/>
            {/* <Tours /> Sofi me parece que los listados se podrian sacar de la home y que queden disponibles solo con el link de la navbar, queda mas bonito pero tu decides
            <Users /> */} 
        </div>
    )
}