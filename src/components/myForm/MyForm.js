import React from "react";
import ImageUrl from "../../images/avatarLarge.png"
import MyAvatar from "../MyAvatar"
import MyBtn from "../buttons/MyBtn"
import "../buttons/MyBtn.css"
import { VscChromeClose } from "react-icons/vsc";
import MyImages from '../MyImages'
import BackGround from "../../images/hair.jpg"
import "./MyForm.css"

const MyForm = (props) => {

return (
    <div style={styles.formContainer}>
    <form style={styles.myForm}
    onSubmit={props.addName}>
   <div style={styles.postContainer}>
        <input 
     
        style={styles.input}
        type="text"
        placeholder={props.placeholder}
        />
        
       
     </div>
     <div style={styles.inputContainer}>
        <div style={styles.intro}>
     <MyAvatar AvatarIcon={ImageUrl} alt="Avatar" />
        <span style={styles.span}>What's on you mind, Keesha?</span>
        </div>
        <div style={styles.btn}>
        <MyBtn btnText="Post" /> 
        </div>
         </div> 
         
    </form>
    <form style={styles.myForm2}>
    <div style={styles.outputContainer}>
    <div style={styles.intro}>
     <MyAvatar AvatarIcon={ImageUrl} alt="Avatar" />
        <span style={styles.span}>Curls For Days</span>
        </div>
        <div style={styles.btn}>
        <VscChromeClose  style={styles.close} /> 
        </div>
        </div>
        <div style={styles.postContainer}>
            <p>
              I deep condition my hair least twice a month.
             </p>
        </div>
        <div style={styles.flexbox}>
        <MyImages ImageIcon={BackGround} alt="Woman with curly hair" />
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
      height:"25%",
      width: "90%",
      margin: "5%",
      backgroundColor: "#9AC6C5",
      color: "black",
      borderRadius: "2%"
  },
  myForm2: {
    display: "flex",
    flexDirection: "column",
   
    height:"60%",
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#9AC6C5",
    color: "black",
    borderRadius: "2%",
   
},

  postContainer: {
    display: "flex", 
  
    flexDirection: "row",  
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    
  }, 
  input:{
      padding: "2%",
      margin: "2%",
      width: "80%",
      alignItems: "center"
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
   alignItems: "center",
justifyContent: "space-between",
    width: "80%",
    marginLeft: "7%",
    marginTop: "5%",
    fontSize: "1.4rem"
  },
  outputContainer: {
    display: "flex",
    flexDirection: "row",
   alignItems: "start",
justifyContent: "space-between",
    width: "85%",
    marginLeft: "7%",
    marginTop: "5%",
    fontSize: "1.4rem"
  },
  span: {
    whiteSpace: "nowrap",
   marginLeft: "0%"
  },
   intro:{
    display: "flex",
    flexDirection: "row",
   alignItems: "center",
justifyContent: "space-between"
   },
   close: {
    height: "2em",
    width: "2em",
    cursor: "pointer"
    
  },
  flexbox: {
      display: "flex",
      width: "100%",
      height: "70%",
justifyContent: "space-around",
backgroundColor: "white"
  }
 
}