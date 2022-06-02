const weekday = ["sun","mon","tue","wed","thu","fri","sat"];
const d = new Date();
let day = weekday[d.getDay()];
printDays();
console.log(day);

async function fetchData(){
    let response = await fetch('/data.json');
    let data = await response.json();
    return data;
}

async function printDays(){
    let salesObject = await fetchData();
    for (let i = 0; i < 7; i++){
        let height = (salesObject[i].amount) + "%";
        $(".chart-area").append("<div class='" + salesObject[i].day + " day'><span></span><p>"+ salesObject[i].day +"</p></div>");
        $("." + salesObject[i].day + ">span").css("height", height);
        if (salesObject[i].day === day){
        $("." + salesObject[i].day + ">span").css("background-color", "hsl(186, 34%, 60%)");
    }
    }
}