import React from "react";

function ListItem(props){
    return <li>{props.value}</li>;
}
const Navigation = (props) =>{
    const nav =[
        { id: 1, title: "Watch" },
        { id: 2, title: "Read" }
    ];
 
const navigation = nav.map((navigator) =>
<ListItem key={navigator.id} value={navigator.title} />
)
    return(
        <ul>
            {navigation}
        </ul>
    )

    
    
};


export default Navigation;

