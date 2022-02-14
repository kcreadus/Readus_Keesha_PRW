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