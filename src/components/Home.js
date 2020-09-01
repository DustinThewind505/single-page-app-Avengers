import React from "react";

function Home() {
  return (
    <div className="home">
      <img
        src="https://66.media.tumblr.com/fb2a20c08246e0102e10198ec60988c5/tumblr_oopx94VQTR1v6a1bfo1_400.gif"
        alt="Avengers assembling"
      />
      <img
        onMouseOver={event =>
          (event.target.src =
            "https://comicvine1.cbsistatic.com/uploads/original/11/117763/2598672-marvel_zombies___dead_days___page_5.jpg")
        }
        onMouseLeave={event =>
          (event.target.src =
            "http://majorspoilers.com/wp-content/uploads/2012/10/MarvelZombiesHalloween.jpg")
        }
        src="http://majorspoilers.com/wp-content/uploads/2012/10/MarvelZombiesHalloween.jpg"
        alt="Avengers assembling"
      />
    </div>
  );
}

export default Home;
