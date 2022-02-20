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
        id: 1,
        title: "Nutrition",
        description:
          "A study showed that 38% of women who experience hair loss were found to have a biotin deficiency.",
        img: NaturalHair,
        alt: "Natural Hair",
      },
      {
        id: 2,
        title: "Nutrition",
        description:
          "A study showed that 38% of women who experience hair loss were found to have a biotin deficiency.",
        img: NaturalHair,
        alt: "Natural Hair",
      },
    ],
    color: "whiteSmoke",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "#A3320B" });
    }, 5000);
  }

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
          id: Date.now(),
          title: this.state.title,
          description: this.state.description,
          img: Image2,
        },
      ],
    });
    e.target.reset();
  };

  removeItem = (key) => {
    let filteredList = this.state.pList.filter((list) => list.id !== key);
    this.setState({
      pList: filteredList,
    });
  };

  render() {
    let pList = this.state.pList.map((element, i) => {
      //Pass through the key and value from the props comp.
      return (
        <MyAds
          key={i}
          val={element}
          deleteMe={() => this.removeItem(element.id)}
        />
      );
    });
    return (
      <div style={styles.wrapper}>
        <MyHeader pgTitle="Curls" placeholder="Search..." />
        <main style={styles.container}>
          <div style={styles.pageView}>
            <h1 style={{ color: this.state.color }}>Page Active</h1>
          </div>
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
    marginBottom: "50px",
  },
  pageView: {},
};
