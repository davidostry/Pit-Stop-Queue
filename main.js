import {readFile} from "./services/serviceFile.js"

try{
    console.log(await readFile());
}
catch(e){
console.log("error", e);

}
