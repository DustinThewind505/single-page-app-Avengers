import React, { useState } from "react";

function Home(props) {
  const [singleAccordianSelecion, setSingleAccordianSelection] = useState(null)

  const handleSingleselection = (id) => {
    setSingleAccordianSelection(id);
    console.log(singleAccordianSelecion);
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <img
          src="images/marvel-gif.gif"
          alt="Avengers assembling"
        />
        <img
          onMouseOver={event =>
            (event.target.src =
              "images/avengers1978.jpg")
          }
          onMouseLeave={event =>
            (event.target.src =
              "images/avengers-halloween.jpg")
          }
          src="images/avengers-halloween.jpg"
          alt="Avengers assembling"
        />
      </div>
      {props.data.map(avenger => (
        <div className="home-accordian" onClick={() => handleSingleselection(avenger.id)} key={avenger.id}>
          <h2>{avenger.name}</h2>
          <span>+</span>
          {singleAccordianSelecion === avenger.id ?<p>{avenger.description}</p> : null}
        </div>
      ))}
    </div>
  );
}

export default Home;
