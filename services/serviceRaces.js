    import { readFile} from "./serviceFile.js"

    const path ="../data/races.json"
    
    export async function details(){
    const races = readFile(path)
    const raceName = races.raceName
    const currentLap = races.currentLap / races.totalLaps
    const totalCars = races.cars.length
    const doneCars = races.cars.reduce(car => car.status === "done")
    const weitingCars = races.cars.filter(car => car.status === "waiting")
    const nextCar = weiting[0]
    const message = `Box box box, ${nextCar.driverName}, pit this lap!`
    return {
        raceName,
        currentLap,
        totalCars,
        doneCars,
        weitingCars,
        nextCar,
        message
    }
}

export async function searchCar(num){
    const races = readFile(path)
    const car = races.cars.find(car=>car.carNumber === num)
    if (!car){
        throw new Error("car not found");
        
    }
}