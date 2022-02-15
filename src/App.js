import React, { Component } from "react";
import MyHeader from "./components/header/MyHeader";
import Navigation from "./components/nav/Navigation";
import MyForm from "./components/myForm/MyForm";
import MyAds from "./components/ads/MyAds"
import Hydrate from "./images/hydrate.jpg"
import NaturalHair from "./images/naturalHair.jpg"


//ADD IMAGES

class App extends Component {
  render() {
    return (
      <div>
        <MyHeader pgTitle="Curls" placeholder="Search..." />
        <div style={styles.container}>
          <Navigation style={styles.nav} />
          <div style={styles.main}>
            <MyForm placeholder="Create Post"/>
          </div>
          <aside style={styles.ads}>
            <MyAds img={Hydrate}
            title="Hydration" description="The amount of water you should be drinking is likely to vary depending on your age/height/weight but I personally would recommend 2-3 litres daily!"  />
            <MyAds  img={NaturalHair}
            title="Nutition Tips" description="A study showed that 38% of women who experience hair loss were found to have a biotin deficiency."/>
          </aside>
        </div>
      </div>
    );
  }
}
export default App;

const styles = {
  wrapper: {
    fontFamily: ''
  },
  
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: '100vh',
    width: '100vw'
  },

  nav: {
    display: 'flex',
  },
  main: {
    display: 'flex',
    flex: 1
  },
  ads: {
    backgroundColor: "#7785AC",
    color: "rgb(163,173,194)",
    display: "flex",
    flexDirection: "column",
    width:"25%",
    alignItems: "center"
  }
}
