import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Report from "../pages/report/Report";
import Print from "../pages/print/Print";
import PreCommittee from "../pages/preCommittee/PreCommittee";
import Committee from "../pages/committee/Committee";
import Self from "../pages/self/Self";
import PreEvaluation from "../pages/preEvaluation/PreEvaluation";
import Evaluation from "../pages/evaluation/Evaluation";

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path ="/" component = { () => <Login/> } />
            <Route exact path ="/home" component = { () => <Home/> } />
            <Route exact path ="/report" component = { () => <Report/> } />
            <Route exact path ="/print" component = { () => <Print/> } />
            <Route exact path ="/precomittee" component = { () => <PreCommittee/> } />
            <Route exact path ="/comittee" component = { () => <Committee/> } />
            <Route exact path ="/self" component = { () => <Self/> } />
            <Route exact path ="/preevaluation" component = { () => <PreEvaluation/> } />
            <Route exact path ="/evaluation" component = { () => <Evaluation/> } />
        </Switch>
    </BrowserRouter>
)

export default Routes;