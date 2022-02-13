
import React, { Component } from "react";
import MyHeader from "./components/header/MyHeader";
import Navigation from "./components/nav/Navigation";

//ADD IMAGES

class App extends Component {
  render() {
    return (
      <div>
        <MyHeader pgTitle="Curls" placeholder="Search..." />
        <div style={styles.container}>
      <div style={styles.nav}>
<Navigation />
      </div>
        </div>
         
      </div>
    );
  }
}
export default App;

const styles = {
  container:{
   display: 'flex',
    flexDirection: 'row',
    backgroundColor: "white",
   height:"100vh,"
},

nav:{
  display: "flex",
  
},
main: {
  display: "flex",
  flex:2
},
ads: {
 
  flexDirection: "column",
  alignItems: "center",
  paddingLeft: 20,
  paddingRight: 20,
  color: "lightgrey"

}

}
