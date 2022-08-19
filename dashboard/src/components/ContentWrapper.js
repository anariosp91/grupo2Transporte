import React from "react"
import { Route, Switch } from "react-router-dom"
import ToursList from "../pages/ToursList"
import UsersList from "../pages/UsersList"
import NotFound from "../pages/notFound"

export default function ContentWrapper(){
    return(
                <Switch>
                    <Route path="/tours" component={ToursList} /> 
                    <Route path="/users" component={UsersList} />
                    <Route component={NotFound} />
                </Switch>
    )
}