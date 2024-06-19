const celsiusField=document.querySelector("#celsius");
const degree=document.querySelector("#degree");
const converterBtn=document.querySelector("#converter-btn");
const tempType=document.querySelector("#temp-type");

window.addEventListener("load",()=>{
    degree.value="",
    celsiusField.innerHtml="";
})

converterBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    converterToCelsius();
})
function converterToCelsius(){
    let inputValue=degree.value;
    if(tempType.value==="fahrenheit"){
        const fahrenheitToCelsius=(inputValue-32)*(5/9);
        celsiusField.innerHTML=`${fahrenheitToCelsius.toFixed(3)}&deg; c`;
    }
    else if(tempType.value==="kelvin"){
        const kelvinToCelsius=inputValue-273.25;
        celsiusField.innerHTML=`${kelvinToCelsius.toFixed(3)}&deg; c`;

    }
}