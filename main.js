import { writeFile, readFile } from "./services/serviceFile.js"
import {details, searchCar} from "./services/serviceRaces.js"

async function start() {

    const path = "./data/races.json"

    console.log(`Pit Stop Queue - Race Team Management System
                Race engineer: Lets check the current queue status on the pit wall.`);


    try {
        await writeFile(path)
        const races = await readFile(path)
        console.log(races);
        
        const res = await details()
        console.log(`=========== PIT STOP QUEUE ===========
           ${res}`)
    }

    catch (e) {
        console.log("error", e);

    }

}

start()