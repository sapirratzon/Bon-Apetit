import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import HomePage from "./Components/HomePage/HomePage";
import Recipe from "./Components/Recipes/Recipe";

import './App.css';

function App() {
    return (
        <BrowserRouter >
            <div className="App" >
                <Route component={ NavigationBar } />
                <div className="content" >
                    <Route exact path="/" component={ HomePage } />
                    <Route
                        path="/Recipe/:RecipeId"
                        render={ (props) => <Recipe { ...props }
                                                    info={ "aa" } /> } />/>
                    {/*<Route*/ }
                    {/*    path="/Discussion/:isSimulation/:simulationCode"*/ }
                    {/*    render={(props) => <Discussion {...props}*/ }
                    {/*                                   isSimulation={props.match.params.isSimulation}*/ }
                    {/*                                   simulationCode={props.match.params.simulationCode} />} />*/ }
                    {/*<Route path="/login/" component={Login} />*/ }
                    {/*<Route path="/registration/" component={Registration} />*/ }
                    {/*<Route path="/moderatorsManagement/" component={Moderators} />*/ }
                </div >
            </div >
        </BrowserRouter >
    );
}

export default App;
