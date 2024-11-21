import { useCallback, useState } from "react";
// import React,(useCallback,useState) from 'react'

function UseFetchAPI() {
    const[data,setData]=useState([]);
    const response=fetch("https://dummyjson.com/recipes");
    response.then((res)=>{
        console.log(res)
        res.json().then((data)=>{
            console.log(data)
            setData(data)
        })
    })

    
    .catch((error)=>{console.log(error)})
  return (
    <div>{JSON.stringify(data)}UseFetchAPI</div>
  )
}

export default UseFetchAPI