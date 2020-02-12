import React from "react";
import { Link } from "react-router-dom";

import Data from "../Data";

function AvengersList() {

    console.log(Data)
    return (
        <div>
        <h2>AvengersList</h2>
        {Data.map(hero =>  
        <div key={hero.id}>
            
        <img src={hero.thumbnail} alt={hero.name}/>
        <Link to={`/avenger/${hero.id}`}><h3>{hero.name}</h3></Link>
        </div>
        )}
        </div>
    )
}

export default AvengersList;