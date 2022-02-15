import React from 'react'
import "./MyBtn.css"

const MyBtn = (props) =>{
    return(
        <button className="button" style={styles.postBtn}>
            {props.btnText} 
        </button>  
    )
}
export default MyBtn

const styles = {
    postBtn: {
        backgroundColor: "#391832",
        border: "none",
        color: "white",
        textAlign: "center",
        textDecoration: "none",
        display: "inlineBlock",
        fontSize: "16px",
        marginTop: "4px",
        marginBottom: "4px",
        marginLeft: "22px",
        marginRight: "2px",
        cursor: "pointer",
        borderRadius: "6px"
    }
}