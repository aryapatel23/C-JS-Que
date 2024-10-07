// 7. Write a function that simulates a traffic light system. The function should take the current light color (red, yellow, green) as input and print the corresponding action:
// "red" → "Stop"
// "yellow" → "Slow down"
// "green" → "Go"

function trafficlight(light){
    const trafficred="red"
    const trafficyellow="yellow"
    const trafficgreen="green"
    if(light===trafficred){
        console.log("Stop")
    }else if(light===trafficyellow){
        console.log("Slow down")
    }else if(light==trafficgreen){
        console.log("Go")
    }
}
console.log(trafficlight("red"))