import React, { Component, useState } from 'react'
const FBCStateEx = () => {
    const [value ,setValue] = useState(0);
    console.log(value);
    const changeValue=()=>{
        setValue(1000);
    }
    return(
        <div>FBCStateEx
            <h1>{value}</h1>
            <button onClick={changeValue}>changeValue</button>

        </div>
    )
}

export default FBCStateEx