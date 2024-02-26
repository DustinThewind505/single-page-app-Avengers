import React, { useState } from "react";

function Home(props) {
  const [singleAccordianSelecion, setSingleAccordianSelection] = useState(null);
  const [multipleAccordianSelection, setMultipleAccordianSelection] = useState([]);
  const [accordianStateButton, setAccordianStateButton] = useState(false);

  const handleSingleSelection = (id) => {
    setSingleAccordianSelection(id);
  }

  const handleMultipleSelection = (id) => {
    let newArray = [...multipleAccordianSelection];
    const selectionIndex = newArray.indexOf(id);

    if(newArray.includes(id)) {
      newArray.splice(selectionIndex, 1);
    } else {
      newArray.push(id);
    };

    setMultipleAccordianSelection(newArray);
    console.log(multipleAccordianSelection)
  }

  const handleAccordianStateButton = () => {
    setSingleAccordianSelection(null);
    setMultipleAccordianSelection([]);

    setAccordianStateButton(!accordianStateButton);
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
      <button className="accordian-state-button" onClick={() => handleAccordianStateButton()}>Enable Multiple selections</button>
      {props.data.map(avenger => (
        <div className="home-accordian" onClick={!accordianStateButton ? () => handleSingleSelection(avenger.id) : () => handleMultipleSelection(avenger.id)} key={avenger.id}>
          <h2>{avenger.name}</h2>
          <span>+</span>
          {singleAccordianSelecion === avenger.id || multipleAccordianSelection.indexOf(avenger.id) !== -1 ?<p>{avenger.description}</p> : null}
        </div>
      ))}
    </div>
  );
}

export default Home;
