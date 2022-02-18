import React from "react";
import MyImages from "../MyImages"


const Card = (props) => {
    return(
        <article style={styles.myArticle}>
            <div style={styles.imgContainer}>
            <MyImages ImageIcon={props.img} alt={props.alt} />
            </div>
            <div style={styles.cardContent}>
          
            <h1>{props.title}</h1>
            
           
            <p>{props.description}</p>
            
            <div style={styles.buttons}>
             <button type="submit" style={styles.cardButton}>SHARE</button>
             <button type="submit" style={styles.cardButton}>LEARN MORE</button> 
            </div>
            </div>
        </article>
    )
}
export default Card;
/*justify-content is always on main axis*/
/*align-items is always on the cross axis*/
/* an item in a flex container can be a flex container as well*/
const styles = {
    myArticle: {
        display: "flex",
        flexDirection: "column",
        width: "250px",
        height: "350px",
        backgroundColor: "whiteSmoke",
        color: "black"
        
},
  imgContainer: {
display: "flex",
width: "100%",
height: "175px",
justifyContent: "space-around",
backgroundColor: "whiteSmoke"
  },
  cardContent: {
      margin: "1rem",
      marginTop: "0.5rem"
  },

}