import React from 'react'


const PostBtn = (props) =>{
    return(
        <button className="button" style={styles.postBtn}>
         {props.btnText} 
         </button>  
    )

}
export default PostBtn

const styles = {
    postBtn: {
        background: "none",
	border: "none",
	padding: 0,
	font: "inherit",
	cursor: "pointer",
	outline: "inherit",
    color: "#A3320B"
    },
}