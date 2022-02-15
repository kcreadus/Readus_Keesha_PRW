import React from "react";
import MyImages from "../MyImages"
import "./MyAds.css"

const MyAds = (props) => {
    return(
        <article style={styles.myArticle}>
            <div style={styles.flexbox}>
            <MyImages ImageIcon={props.img} alt={props.alt} />
            </div>
           <div style={styles.cardContent}>
            <div>
            <h1>{props.title}</h1>
            </div>
            <div>
            <p>{props.description}</p>
            </div>
            <div style={styles.buttonContainer}>
             <button type="submit" style={styles.cardButton}>SHARE</button>
             <button type="submit" style={styles.cardButton}>LEARN MORE</button> 
            </div>
            </div>
        </article>
    )
}
export default MyAds;

const styles= {
    myArticle: {
        display: "flex",
        flexDirection: "column",
        width: "250px",
        height: "350px",
        backgroundColor: "whiteSmoke",
        color: "black",
      
        overflow: "hidden",
        borderRadius: "15px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        
        marginTop: "20px" ,
     
    },

    buttonContainer:{
     display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        fontSize: "1rem",
        marginBottom: "0.7rem",
    
    },
    cardButton: {
        background: "none",
	border: "none",
	padding: 0,
	font: "inherit",
	cursor: "pointer",
	outline: "inherit",
    color: "#A3320B"
    },
    flexbox: {
        display: "flex",
        width: "100%",
        height: "175px",
      overflow: "hidden",
  justifyContent: "space-around",
  backgroundColor: "whiteSmoke"
    },
    cardContent: {
      textAlign: "center",
      
    },
    
}
