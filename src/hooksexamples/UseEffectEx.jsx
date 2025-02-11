import React, { useEffect, useState} from 'react'
const useEffectEx = () => {
    const [count , setCount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(1000);

        },5000);
        document.title = count;
    },[])
    return(
        <div>useEffectEx
            <h1>{count}</h1>
        </div>
    )
}
export default useEffectEx 
