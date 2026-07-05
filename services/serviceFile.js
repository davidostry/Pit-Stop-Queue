import fs from "fs/promises"

const api = "https://server-for-test-week-13.onrender.com/api/race"



export async function writeFile(path) {
    console.log("loading queue data...");

    let response = await fetch(api)
    if (!response.ok) {
        console.log("HTTP  Error:", response.status);
        return
    }
    let data = await response.json()
    fs.writeFile(path, JSON.stringify(data), "utf-8")


    return
}

export async function readFile(path) {
    const races = await fs.readFile(path, "utf-8")
    // const res = JSON.parse(races)
    return races
}


