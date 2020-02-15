import React from "react";
import { Link } from "react-router-dom";

import Data from "../Data";

function AvengersList() {

    //console.log(Data)
    return (
        <div className="characters-list-wrapper">
        {Data.map(hero =>  
        <div className="character-card" key={hero.id}>
            
        <img src={hero.thumbnail} alt={hero.name}/>
        <Link to={`/avengers/${hero.id}`}><h3>{hero.name}</h3></Link>
        <h4>({hero.nickname})</h4>
        </div>
        )}
        </div>
    )
}

export default AvengersList;