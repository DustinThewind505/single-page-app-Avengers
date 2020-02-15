import React from "react";
import { Route, Link } from "react-router-dom";

import Home from "./components/Home";
import AvengersList from "./components/AvengersList";

function App() {

    return (
        <div className="App">
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/avengers">Avengers</Link></li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/avengers" component={AvengersList} />

        </div>
    )
}


export default App;