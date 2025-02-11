// import React, { Component, useState } from 'react'
// const FBCStateEx = () => {
//     const [value ,setValue] = useState(0);
//     console.log(value);
//     const changeValue=()=>{
//         setValue(1000);
//     }
//     return(
//         <div>FBCStateEx
//             <h1>{value}</h1>
//             <button onClick={changeValue}>changeValue</button>

//         </div>
//     )
// }

// export default FBCStateEx




// import React from "react";
// import '.Styles.css'

// function FunctionalComponent(props){
//     console.log(props)
//     let applyStyle = props.apply ? 'heading':' '
//     let inlineStyle = {
//         color:'green',
//         backgroundColor: 'red',
//         fontSize:'50px'
//     }
//     return (
//         <div>
//             <h1 class={${applyStyle} font-style}>Welcome </h1>
//             {props.children}
//             <h2></h2>
//         </div>
//     )
// }