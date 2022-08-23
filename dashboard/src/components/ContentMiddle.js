import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "../pages/notFound";
import Users from "./Users";
import Tours from "./Tours";

export default function ContentMiddle(){
    return(
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/tours" component={Tours} /> 
                    <Route path="/users" component={Users} />
                    <Route component={NotFound} />
                </Switch>
    )
}