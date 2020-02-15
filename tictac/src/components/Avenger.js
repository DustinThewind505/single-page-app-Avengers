import React, {Fragment} from "react";
import Data from "../Data";

function Avenger(props) {

    const avenger = Data.find(hero => Number(props.match.params.id) === hero.id);

    console.log(props.match)
    return (
        <Fragment>
        <img className="character-image" src={avenger.img} alt={avenger.nickname}/>
        <div className="character-info-wrapper">
            <h1>{avenger.name}</h1>
            <h3>({avenger.nickname})</h3>
            <p>{avenger.description}</p>
        </div>
        </Fragment>
    )
}



export default Avenger;