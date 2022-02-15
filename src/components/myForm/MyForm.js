import React from "react";
import ImageUrl from "../../images/avatarLarge.png"
import MyAvatar from "../MyAvatar"
import MyBtn from "../buttons/MyBtn"
import "../buttons/MyBtn.css"
import "./MyForm.css"

const MyForm = (props) => {

return (
    <div style={styles.formContainer}>
      
    <form style={styles.myForm}
    onSubmit={props.addName}>
    
        <div style={styles.intro}>
     <MyAvatar AvatarIcon={ImageUrl} alt="Avatar" />
        <span style={styles.span}>What's on you mind, Keesha?</span>
        </div>
        
         
   <div style={styles.postContainer}>
        <input 
     
        style={styles.input}
        type="text"
        placeholder={props.title}
        />
        <input 
     
     style={styles.input}
     type="text"
     placeholder={props.description}
     />
        
       
     </div>
    
         <div style={styles.btn}>
        <MyBtn btnText="Post" /> 
        </div>
    </form>
  
    </div>
  )
}
export default MyForm;

const styles = { 
 formContainer: {
  backgroundColor: "whiteSmoke",
  color: "rgb(163,173,194)",
  display: "flex",
  flexDirection: "column",
width:"100%"
 },   
  myForm: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      height:"225px",
      width: "90%",
      margin: "5%",
      backgroundColor: "#9AC6C5",
      color: "black",
      borderRadius: "2%"
  },
  postContainer: {
    display: "flex", 
    flexDirection: "row",  
    width: "100%",
    justifyContent: "center"
  }, 
  input:{
      padding: "2%",
      margin: "2%",
      width: "321px",
   
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