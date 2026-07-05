import fs from "fs/promises"

const api = "https://server-for-test-week-13.onrender.com/api/race"

export async function readFile() {
    console.log("loading queue data...");
    
     let response = await fetch(api)
     if (!response.ok){
        console.log("HTTP  Error:", response.status);
        return
     }
     let data = await response.json() 
     return data
    }

