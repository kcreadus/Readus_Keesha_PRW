import React, { Component } from "react";

import MyHeader from "./components/header/MyHeader";
import MyForm from "./components/myForm/MyForm";
import MyAds from "./components/ads/MyAds";
import NaturalHair from "./images/naturalHair.jpg";

//ADD IMAGES

class App extends Component {
  state = {
    pList: [
      {
        title: "Nutrition",
        description:
          "A study showed that 38% of women who experience hair loss were found to have a biotin deficiency.",
        img: NaturalHair,
        alt: "Natural Hair",
      },
      {
        title: "Nutrition",
        description:
          "A study showed that 38% of women who experience hair loss were found to have a biotin deficiency.",
        img: NaturalHair,
        alt: "Natural Hair",
      },
    ],
  };

  getInput = (e) => {
    const value = e.target.value
    this.setState({
       ...this.state.pList,
     [e.target.name]: value
    });
  };

  addItem = (e) => {
    e.preventDefault();

    this.setState({
      pList: [
        ...this.state.pList,
        { title: this.state.title, description: this.state.description, },
      ],
    });
    e.target.reset();
  };

  render() {
    let pList = this.state.pList.map((element, i) => {
      //Pass through the key and value from the props comp.
      return <MyAds key={i} val={element} />;
    });
    return (
      <div style={styles.wrapper}>
        <MyHeader pgTitle="Curls" placeholder="Search..." />
        <main style={styles.container}>
          <MyForm getInput={this.getInput} addItem={this.addItem} />
          <div style={styles.main}>{pList}</div>
        </main>
      </div>
    );
  }
}
export default App;

const styles = {
  wrapper: {
    height: "100vh",
    width: "100vw",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    flex: "wrap",
  },

  nav: {
    display: "flex",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    flex: "wrap",
    width: "100%",

    justifyContent: "space-around",
  },
};
