const secondsHand = document.querySelector(".sec_hand");
const minHand = document.querySelector(".min_hand");
const hourHand = document.querySelector(".hour_hand");

function convertIntoDegree(value, type){
    let degree;
    if(type === "sec" || type === "min"){
         degree = ((value / 60) * 360) + 90;
    }
    else{
         degree = ((value / 12) * 360) + 90;
    }
    return degree;
}

function changeHandStyle(degree,type){
    let element;
    if(type=== "sec"){
        element = secondsHand;
    }
    else if(type==="min"){
        element = minHand;
    }
    else{
        element = hourHand;
    }

    element.style.transform = `rotate(${degree}deg)`;
    return element;
}

function setdate() {
    const now = new Date();
    console.log(now);

    const seconds = now.getSeconds();
    let secondsToDegree = convertIntoDegree(seconds, "sec");
    changeHandStyle(secondsToDegree, "sec");

    const mins = now.getMinutes();
    let minToDegree = convertIntoDegree(mins, "min");
    changeHandStyle(minToDegree, "min");

    const hours = now.getHours();
    let hoursToDegree = convertIntoDegree(hours, "hour");
    changeHandStyle(hoursToDegree, "hour");
    
}

setInterval(setdate, 1000);