import React from "react";
import { Route, Switch } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import ToursList from "../pages/ToursList";
import UsersList from "../pages/UsersList";
import NotFound from "../pages/notFound";

export default function ContentMiddle(){
    return(
                <Switch>
                    <Route exact path="/" component={ContentWrapper} />
                    <Route path="/tours" component={ToursList} /> 
                    <Route path="/users" component={UsersList} />
                    <Route component={NotFound} />
                </Switch>
    )
}