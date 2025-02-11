const fs=require('fs');
function dataWrite(){
    try{
        fs.writeFileSync("data.txt","Hello Node Js Using fs module");
        console.log("data written successfully");
    }catch(err){
        console.log("error while writing the data "+err);
    }
}
function dataRead(){
    try{
    const rf=fs.readFileSync("data.txt",{encoding:'utf-8'});
console.log(rf)}catch(err){
    console.log("error while reading the data "+err);
}
}

function dataAppend(){
    try{
        fs.appendFileSync("data.txt","appending isinf fs module");
        console.log("data appended successfully");
    }catch(err){
        console.log("error while appending the data "+err);
    }
}
function unlink(){
    try{
        fs.unlinkSync("data.txt");
        console.log("data deleted successfully");
    }catch(err){
        console.log("error while deleting the data "+err);
    }
}
const obj={
    dataWrite:dataWrite,
    dataRead:dataRead,
    dataAppend:dataAppend,
    unlink:unlink
}
module.exports=obj;

