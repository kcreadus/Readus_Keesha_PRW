import React from "react";


const  Card = (props) => {
    return(
        <article style={styles.myArticle}>
            <div style={styles.flexbox}>
            <MyImages ImageIcon={props.img} alt={props.alt} />
            </div >
            <div>
            <h1>{props.title}</h1>
            </div>
            <div>
            <p>{props.description}</p>
            </div>
            <div style={styles.buttons}>
             <button type="submit" style={styles.cardButton}>SHARE</button>
             <button type="submit" style={styles.cardButton}>LEARN MORE</button> 
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
        width: "300px",
        height: "40%",
        backgroundColor: "whiteSmoke",
        color: "black",
}