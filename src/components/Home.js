import React from "react";

function Home() {
  return (
    <div className="home">
      <img
        // onMouseOver={event =>
        //   (event.target.src =
        //     "https://66.media.tumblr.com/fb2a20c08246e0102e10198ec60988c5/tumblr_oopx94VQTR1v6a1bfo1_400.gif")
        // }
        // onMouseLeave={event =>
        //   (event.target.src =
        //     "http://getwallpapers.com/wallpaper/full/9/4/b/1191411-marvel-avengers-desktop-wallpaper-1920x1080-for-android-40.jpg")
        // }
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
            "http://getwallpapers.com/wallpaper/full/9/4/b/1191411-marvel-avengers-desktop-wallpaper-1920x1080-for-android-40.jpg")
        }
        src="http://getwallpapers.com/wallpaper/full/9/4/b/1191411-marvel-avengers-desktop-wallpaper-1920x1080-for-android-40.jpg"
        alt="Avengers assembling"
      />
    </div>
  );
}

export default Home;
