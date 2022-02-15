import React from "react";
import "./Navigation.css"

function ListItem(props){
    return <li><a href="#">{props.value}</a></li>;
}
const Navigation = (props) =>{
    const nav =[
        { id: 1, title: "News Feed" },
        { id: 2, title: "Messages" },
        { id: 3, title: "Watch" }
    ];
    const navigation = nav.map((navigator) =>
        <ListItem key={navigator.id} value={navigator.title} />)
            return(
                <div class="menu" style={styles.navContainer}>
                    <ul>
                        {navigation}
                    </ul>
                </div>
            )
};

export default Navigation;

const styles ={
    navContainer: {
    backgroundColor: "#7785AC",
    color: "rgb(163,173,194)",
    display: "flex",
    flexDirection: "row",
     width:"25%",
   justifyContent: "left",
    }
}