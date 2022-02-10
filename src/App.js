import React, { Component } from "react";
import MyHeader from "./components/header/MyHeader";

//ADD IMAGES

class App extends Component {
  render() {
    return (
      <div>
        <MyHeader pgTitle="The Mane Event" placeholder="Search..." />
      </div>
    );
  }
}
export default App;
