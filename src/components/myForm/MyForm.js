import React from "react";
import ImageUrl from "../../images/avatar.png"
import MyAvatar from "../MyAvatar"

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
     <div>
     <MyAvatar AvatarIcon={ImageUrl} alt="Avatar" />
        <span style={styles.span}>Keesha Readus</span>
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
  flexDirection: "row",
width:"75%",

     
 }, 
  
    
  myForm: {
      display: "flex",
      flexDirection: "row",
      alignItems: "start",
      height:"25%",
      width: "90%",
      margin: "5%",
      backgroundColor: "black",
      color: "rgb(163, 173, 194)",
      borderRadius: "2%"
  },
  postContainer: {
    border: "1px solid #A3320B",
    display: "flex",
    flexDirection: "row",
    borderRadius: "2px",
    width: "100%",
    justifyContent: "center"
  }, 
  input:{
      padding: "2%",
      margin: "2%",
      width: "80%",
      alignItems: "center"
  }
};