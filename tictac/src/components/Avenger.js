import React, {Fragment} from "react";
import { Route, Link } from "react-router-dom";

import Movies from "./Movies";
import Details from "./Details";

function Avenger(props) {

    const avenger = props.data.find(hero => Number(props.match.params.id) === hero.id);

    console.log("This one", avenger)
    return (
        <Fragment>
        <img className="character-image" src={avenger.img} alt={avenger.nickname}/>
        <div className="character-info-wrapper">
            <h1>{avenger.name}</h1>
            <h3>({avenger.nickname})</h3>
            <p>{avenger.description}</p>
            <Link to="/avengers/:id/details">Bio</Link>
            <Link to="/avengers/:id/movies">Movies</Link>
            <Route path="/avengers/:id/details" render={() => <Details {...props} data={avenger}/>}/>
            <Route path="/avengers/:id/movies" render={() => <Movies {...props} data={avenger}/>}/>
        </div>
        </Fragment>
    )
}



export default Avenger;