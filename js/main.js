
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let result = document.getElementById("result");
let showResult = document.getElementById("showResult");
let reload = document.getElementsByClassName("reload")[0];
let chart = document.getElementById("chart");
let bmiChart = [
    {
        color: "#1c80d9",
        name: "Very Severely Underweight",
        value: "<16"
    },
    {
        color: "#21a6f3",
        name: "Severely Underweight",
        value: "16.0 - 16.9"
    },
    {
        color: "#34c9ff",
        name: "Underweight",
        value: "17.0 - 18.4"
    },
    {
        color: "#40bc64",
        name: "Normal",
        value: "18.5 - 24.9"
    },
    {
        color: "#fbbc00",
        name: "Overweight",
        value: "25.0 - 29.9"
    },
    {
        color: "#ff9900",
        name: "Obese Class I",
        value: "30.0 - 34.9"
    },
    {
        color: "#fc5448",
        name: "Obese Class II",
        value: "35.0 - 39.9"
    },
    {
        color: "#ea3c30",
        name: "Obese Class III",
        value: ">40.0"
    }
]


function calculate() {
    let heightValue = height.value;
    let weightValue = weight.value;

    if (heightValue && weightValue) {
        let bmi = ((weightValue * 703) / Math.pow(heightValue, 2)).toFixed(2);
        result.style.display = "block";
        showResult.innerHTML = bmi;
        showChart(bmi);
    }
}


let showChart = (bmi) => {

    let index;

    if (bmi < 16) {
        index = 0;
    } else if (bmi >= 16 && bmi < 16.9) {
        index = 1;
    } else if (bmi >= 17 && bmi < 18.4) {
        index = 2;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        index = 3;
    } else if (bmi >= 25 && bmi < 29.9) {
        index = 4;
    } else if (bmi >= 30 && bmi < 34.9) {
        index = 5;
    } else if (bmi >= 35 && bmi <= 39.9) {
        index = 6;
    } else if (bmi >= 40) {
        index = 7;
    }


    let title = "<p class='title'>BMI Chart</p>";
    chart.innerHTML = title;

    bmiChart.forEach((item, i) => {
        let p = document.createElement("p");
        p.classList.add("chartitem");

        if (i == index) {
            p.innerHTML += "<p style='background: #eaeaea;' color: " + item.color + ";'><span>" + item.name + "</span><span style='float: right';>" + item.value + "</span></p>";
        } else {
            p.innerHTML += "<p style='color: " + item.color + ";'><span>" + item.name + "</span><span style='float: right';>" + item.value + "</span></p>";
        }

        chart.appendChild(p);
    })

}


reload.addEventListener("click", () => {
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
        result.style.display = "none";
        chart.innerHTML = "";
    })
})
