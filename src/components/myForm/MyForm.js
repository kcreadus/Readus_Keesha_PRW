import React from "react";

import ImageUrl from "../../images/avatarLarge.png"
import MyAvatar from "../MyAvatar"
import MyBtn from "../buttons/MyBtn"
import "../buttons/MyBtn.css"



const MyForm = props => {

  
return (
  
   
    <form style={styles.myForm}
    onSubmit={props.addItem}>
    
        <div style={styles.intro}>
     <MyAvatar AvatarIcon={ImageUrl} alt="Avatar" />
        <span style={styles.span}>What's on you mind, Keesha?</span>
        </div>
  
     
   <div style={styles.inputContainer}>
        <input 
        style={styles.input}
        name="title"
        value={props.title}
        onChange={props.getInput}
        type="text"
        placeholder="Title..."
        />
        <input 
        style={styles.input}
        name="description"
        value={props.description}
        onChange={props.getInput}
        type="text"
        placeholder="Description..."
        />
        
      </div>
    
         <div style={styles.btn}>
       <MyBtn btnText="Post" />  
        </div>
    </form>
  

  
  )
}
export default MyForm;

const styles = { 
  
  myForm: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      height:"225px",
      width: "700px",
      margin: "5%",
      backgroundColor: "#9AC6C5",
      color: "black",
      borderRadius: "2%",
      alignSelf: "center"
  },
  inputContainer: {
    display: "flex", 
    flexDirection: "row",  
    width: "100%",
    justifyContent: "center"
  
  }, 
  input:{
      padding: "2%",
      margin: "2%",
      width: "321px",
      color: "grey"
  },
  
  span: {
    whiteSpace: "nowrap",
   marginLeft: "0%"
  },
   intro:{
    display: "flex",
    flexDirection: "row",
    marginTop: "15px",
    marginLeft: "22px",
    alignItems: "center",
    fontSize: "1.2rem",
justifyContent: "center"
   },
    
  btn:{
   alignSelf: "center",
  }
 
}