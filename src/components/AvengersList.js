import React, { useState } from "react";


function AvengersList(props) {
  const [singleAccordianSelection, setSingleAccordianSelection] = useState("villians");


  return (
    <div className="characters-list-wrapper">
      <div  onClick={() => setSingleAccordianSelection("heros")}>
        <h2>Heros</h2>
          {
            singleAccordianSelection === "heros" ?
              props.data.map(hero => (
                <div
                  className="character-card"
                  key={hero.id}
                  onClick={() => props.history.push(`/avengers/${hero.id}/details`)}
                >
                  <img src={hero.thumbnail} alt={hero.name} />
                  <h3>{hero.name}</h3>
                  <h4>({hero.nickname})</h4>
                </div>
              ))
              :
              null
          }
      </div>
      <div  onClick={() => setSingleAccordianSelection("villians")}>
        <h2>Villians</h2>
        {
            singleAccordianSelection === "villians" ?
              props.data.map(hero => (
                <div
                  className="character-card"
                  key={hero.id}
                  onClick={() => props.history.push(`/avengers/${hero.id}/details`)}
                >
                  <img src={hero.thumbnail} alt={hero.name} />
                  <h3>{hero.name}</h3>
                  <h4>({hero.nickname})</h4>
                </div>
              ))
              :
              null
          }
      </div>
      

      {/* {props.data.map(hero => (
        <div
          className="character-card"
          key={hero.id}
          onClick={() => props.history.push(`/avengers/${hero.id}/details`)}
        >
          <img src={hero.thumbnail} alt={hero.name} />
          <h3>{hero.name}</h3>
          <h4>({hero.nickname})</h4>
        </div>
      ))} */}
    </div>
  );
}

export default AvengersList;
