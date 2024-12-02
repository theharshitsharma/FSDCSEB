import React, { useEffect, useState } from "react";

function UseFetchAPI() {
  const [data, setData] = useState([]);

  function getData() {
    console.log("Inside Get Data");
    const response = fetch("https://dummyjson.com/recipes");
    response
      .then((res) => {
        console.log(res);
        res.json().then((data) => {
          console.log(data.recipes);
          setData(data.recipes);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // useEffect(getData(),[]);

  return (
    <div>
      UseFetchAPI
      {/* {JSON.stringify(data)} */}
      {
        data.map((ele)=>{
          return(
            <div style={{color:'white',marginLeft:'200px', width:'300px', border:'2px solid black', backgroundColor:'black'}}>
<div ><img src={ele.image} height={200} width ={200}/></div>
{/* <div style=></div> */}
<div>{ele.name}</div>
<div>{ele.ingredients}</div>
            </div>
          
          
          )
        })
      }
      <button
        onClick={getData}
        style={{
          padding: 10,
          color: "#2A3663",
          backgroundColor: "#D8DBBD",
          border: "2px dotted black",
        }}
      >
        Fetch Data
      </button>
    </div>
  );
}

export default UseFetchAPI;