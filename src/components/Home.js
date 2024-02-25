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
          src="https://66.media.tumblr.com/fb2a20c08246e0102e10198ec60988c5/tumblr_oopx94VQTR1v6a1bfo1_400.gif"
          alt="Avengers assembling"
        />
        <img
          onMouseOver={event =>
            (event.target.src =
              "https://i.pinimg.com/736x/8f/7e/8b/8f7e8b2248d6a9a2def7730fc7da2c1c.jpg")
          }
          onMouseLeave={event =>
            (event.target.src =
              "http://majorspoilers.com/wp-content/uploads/2012/10/MarvelZombiesHalloween.jpg")
          }
          src="http://majorspoilers.com/wp-content/uploads/2012/10/MarvelZombiesHalloween.jpg"
          alt="Avengers assembling"
        />
      </div>
      {props.data.map(avenger => (
        <div className="home-accordian" onClick={() => handleSingleselection(avenger.id)}>
          <h2>{avenger.name}</h2>
          <span>+</span>
          {singleAccordianSelecion === avenger.id ?<p>{avenger.description}</p> : null}
        </div>
      ))}
    </div>
  );
}

export default Home;
