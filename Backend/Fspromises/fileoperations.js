const promise=require('fs').promises;
    const fsp=promise.writeFile("data.txt","hello using fs promises to write data")
    console.log(fsp);
    fsp.then(()=>{
        console.log("data written successfully")
    }).catch((err)=>{

    }).finally(()=>{
        
    })