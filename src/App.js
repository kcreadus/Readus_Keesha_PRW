import React, { Component } from "react";
import MyHeader from "./components/header/MyHeader";
import Navigation from "./components/nav/Navigation";
import MyForm from "./components/myForm/MyForm";

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


          </aside>
        </div>
      </div>
    );
  }
}
export default App;

const styles = {
  wrapper: {
    display: "flex",
    flexFlow: "row Wrap"

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
    flex: 2 
  },
  ads: {
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    color: "lightgrey",
  },
};
