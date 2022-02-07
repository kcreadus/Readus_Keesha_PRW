import React, { Component } from 'react';
//ADD IMAGES
import AvatarIcon from '../src/images/1female.png';
import MyAvatar from '../src/components/MyAvatar';

//REACT icons
import { GiWomanElfFace } from "react-icons/gi";


class App extends Component() {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <h1>Avatar Examples:</h1>
          <MyAvatar AvatarIcon={AvatarIcon}/>
          <img src={AvatarIcon} alt="Logo" style={styles.logo} />
        </div>
          <div style={styles.box}>
           <h1>Icon Examples:</h1>
           <p style={styles.icons}>
             <GiWomanElfFace />
           </p>
          </div>
        
      </div>
    );
  }
}
export default App;


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  box:{
    backgroundColor: 'lightgrey',
    borderRadius: '2%',
    padding: '2%',
    marginRight: '2%'
  },
  avatar: {
    padding: '2%'
  },
  logo: {
    width: '50px',
    height: '50px'
  },
  icons:{
    fontSize: '2rem',
  }

}
