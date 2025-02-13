const { isUtf8 } = require('buffer');

const promise=require('fs').promises;
    const fsp=promise.writeFile("data.txt","hello using fs promises to write data")
    // console.log(fsp);
    fsp.then(()=>{
        console.log("data written successfully")
    }).catch((err)=>{
            console.log("error while writing the data"+err);
    }).finally(()=>{
        console.log("finally closed all resources automatically");
    })



    async function readFileAsync(){
        const data= await promise.readFile('data.txt',{encoding:'utf-8'});
        console.log(data)
    }
    readFileAsync();