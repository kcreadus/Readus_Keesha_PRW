import React from "react";
import MyImages from "../MyImages"
import "./MyAds.css"

const MyAds = (props) => {
    return(
        <article style={styles.myArticle}>
            <div style={styles.flexbox}>
                <MyImages ImageIcon={props.img} alt={props.alt} />
            </div >
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div style={styles.buttons}>
                <button type="submit" style={styles.cardButton}>SHARE</button>
                <button type="submit" style={styles.cardButton}>LEARN MORE</button> 
            </div>
        </article>
    )
}
export default MyAds;

const styles= {
    myArticle: {
        display: "flex",
        flexDirection: "column",
        width: "60%",
        height: "40%",
        backgroundColor: "whiteSmoke",
        color: "black",
      
       
        borderRadius: "5px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        
        margin: "5%"
    },

    buttons:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        fontSize: "0.9rem",
        textAlign: "end"
        
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
        height: "60%",
  justifyContent: "space-around",
  backgroundColor: "whiteSmoke"
    }
}
