import React from "react";
import { Route, Link } from "react-router-dom";
import axios from 'axios';

import Home from "./components/Home";
import AvengersList from "./components/AvengersList";
import Avenger from "./components/Avenger";

import Data from "./Data";

function App() {
    const [colors, setColor] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:420/colors')
        .then(response => {
            setColor(response)
        })

    }, [])

    return (
        <div className="App">
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                {colors.map(element => {
                    <li>element.color</li>
                })}
                <li><Link to="/avengers">Avengers</Link></li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route exact path="/avengers" render={props => <AvengersList {...props} data={Data}/>} />
            <Route path="/avengers/:id" render={props => <Avenger {...props} data={Data}/>} />
        </div>
    )
}


export default App;