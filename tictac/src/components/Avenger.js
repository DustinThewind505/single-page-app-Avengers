import React from "react";
import Data from "../Data";

function Avenger(props) {

    const avenger = Data.find(hero => Number(props.match.params.id) === hero.id);

    console.log(props.match)
    return (
        <div>
            <h1>{avenger.nickname}</h1>
            <h3>Ello Poppet</h3>
            <h3>Ello Poppet</h3>
        </div>
    )
}



export default Avenger;