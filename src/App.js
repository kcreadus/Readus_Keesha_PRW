import React, { Component } from "react";

import MyHeader from "./components/header/MyHeader";
import MyForm from "./components/myForm/MyForm";
import MyAds from "./components/ads/MyAds";
import NaturalHair from "./images/naturalHair.jpg";
import Image2 from "./images/avatarLarge.png";

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
    this.setState({
      ...this.state.pList,
      [e.target.name]: e.target.value,
    });
  };

  addItem = (e) => {
    e.preventDefault();

    this.setState({
      pList: [
        ...this.state.pList,
        {
          title: this.state.title,
          description: this.state.description,
          img: Image2,
        },
      ],
    });
    e.target.reset();
  };

  removeItem = (key) => {
    let pListNew = this.state.pList.filter(pList => {
      return pListNew !== key.target.value;
    });
    this.setState({
      pList: [...pListNew]
    });
  };

  render() {
    let pList = this.state.pList.map((element, i) => {
      //Pass through the key and value from the props comp.
      return (
        <MyAds key={i} val={element} deleteMe={() => this.removeItem(i)} />
      );
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
    height: "100%",
    width: "100%",
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
