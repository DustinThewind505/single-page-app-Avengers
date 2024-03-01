import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

import Home from "./components/Home";
import AvengersList from "./components/AvengersList";
import Avenger from "./components/Avenger";
import Footer from './components/Footer';

import Data from "./Data";
import axios from "axios";

function App() {
  const [avengersData, setAvengersData] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:8000/avengers`)
    .then(response => {
      setAvengersData(response.data);
    })
    .catch(err => {
      console.log('Axios Error', err)
    })
  }, [])

  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </ul>
      <Route 
        exact 
        path="/" 
        render={props => <Home {...props} data={avengersData ? Data : avengersData} />}
      />
      <Route
        exact
        path="/avengers"
        render={props => <AvengersList {...props} data={avengersData ? Data : avengersData} />}
      />
      <Route
        path="/avengers/:id"
        render={props => <Avenger {...props} data={avengersData ? Data : avengersData} />}
      />
      <Footer />
    </div>
  );
}

export default App;
