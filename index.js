let maxValue;
let dayValue;
printDays();

async function fetchData() {
    let response = await fetch('./data.json');
    let data = await response.json();
    return data;
}

async function printDays() {
    let salesObject = await fetchData();
    for (let i = 0; i < 7; i++) {
        let height = (salesObject[i].amount) + "%";
        $(".chart-area").append("<div class='" + salesObject[i].day + " day' data-value='$" + salesObject[i].amount + "'>" + "<span></span>" + "<p>" + salesObject[i].day + "</p>" + "</div>");
        $("." + salesObject[i].day + ">span").css("height", height);
        if (i === 0) {
            maxValue = salesObject[i].amount;
            dayValue = salesObject[i].day;

        } else {
            if (salesObject[i].amount > maxValue) {
                maxValue = salesObject[i].amount;
                dayValue = salesObject[i].day;
            }
        }
        console.log(maxValue);
        console.log(dayValue);
        if (i + 1 === 7) {
            $("." + dayValue + ">span").css("background-color", "hsl(186, 34%, 60%)");
        }
    }
}
