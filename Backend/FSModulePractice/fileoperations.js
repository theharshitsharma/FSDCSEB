const promise=require('fs').promise;
function datacopy(){
    async function readFileAsync(){
        const data= await promise.readFile('studentdata.json',{encoding:'utf-8'});
        console.log(data)
    }
    readFileAsync();

}