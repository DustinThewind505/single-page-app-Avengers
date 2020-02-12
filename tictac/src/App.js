import React from "react";
import { Route, Link } from "react-router-dom";

import Home from "./components/Home";
import AvengersList from "./components/AvengersList";

function App(){

    return (
        <div>
        <Link to="/">Home</Link>
        <Link to="/avengers">Avengers</Link>
        
        <Route exact path="/" component={Home}/>
        <Route path="/avengers" component={AvengersList}/>
        </div>
    )
}


export default App;