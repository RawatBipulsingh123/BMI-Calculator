let container = document.querySelector(".container");
let heightInput = document.querySelector(".container .height input");
let weightInput = document.querySelector(".container .weight input");
let calculatedBtn = document.querySelector(".container .calculate-btn");

let bmitxt = document.querySelector(".container .result-box .bmi h3");
let resultBox = document.querySelector(".container .result-box");
let health_status = document.querySelector(".container .result.box . result");

let calculateBmi =()=>{
    container.Style.height = "555px";
    resultBox.Style.display = "block";

    let weightValue = weightInput.Value;
    let heightValue = heightInput.Value;

    let bmi = (weightValue / Math.pow((heightValue / 100) , 2)).toFixed(1);

    if(bmi < 18.5) {
        health_status.innerHTML = "you are <span>Underweight</span>";
        health_status.style.color = "#ffc44d";

    }else if(bmi >= 18.5 && bmi <=24.9) {
        health_status.innerHTML = "you are <span>Normal Weight</span>";
        health_status.style.color = "#4AC380";

    }else if(bmi >=25 && bmi <= 29.9) {
        health_status.innerHTML = "you are <span>overweight</span>";
        health_status.style.color = "#ff884d";
    }else{
        health_status.innerHTML = "you are in the <span> obese range</span>";
        health_status.style.color = "#ff5e57"
    }

    bmitxt.innerHTML = bmi;
}

calculatedBtn.addEventListener("click" , () => {
    if(heightInput.value != '' && weightInput.value != ""){
        calculateBmi();
    } 
})

