import React, { useState } from "react";
import axios from "axios";


function AvengersList(props) {

  const [test123, setTest123] = useState()

  // var test123 

  // Wont connect with localhost http://localhost:3005/anasazi, needs IP adress to work http://127.0.0.1:3000/anasazi
  axios.get(`http://127.0.0.1:3000/anasazi`)
  .then(response => {
    console.log(response.data)
    setTest123(response.data);
    console.log(typeof test123)
  })
  .catch(err => {
    console.log('There is an error ----->', err)
  })
  // const response = fetch("http://localhost:3005/anasazi");
  // console.log(response)


  console.log(test123)
  return (
    <div className="characters-list-wrapper">
      {test123}
      <p>TEST!@#</p>
      {props.data.map(hero => (
        <div
          className="character-card"
          key={hero.id}
          onClick={() => props.history.push(`/avengers/${hero.id}/details`)}
        >
          <img src={hero.thumbnail} alt={hero.name} />
          <h3>{hero.name}</h3>
          <h4>({hero.nickname})</h4>
        </div>
      ))}
    </div>
  );
}

export default AvengersList;
