import React,{useEffect,useState} from 'react'

function MyUseEffect() {
    const[count,setCount]=useState(10);
    const[pointer,setPointer]=useState(20);
    useEffect(()=>{
        console.log("update Count:"+count);
    },[count,pointer])
    function doIncrement(){
        setCount(count+30)
    };
    function doPointer(){
        setPointer(pointer+100)
    };

  return (
    <div>
        <h2>{count}</h2>
        <br />
        <h2>{pointer}</h2>
        <button onClick={doIncrement}>Increment</button>
        <button onClick={doPointer}>Pointer</button>
            </div>
  )
}

export default MyUseEffect