function convertTemperature(){

    let input = document.getElementById("input")
    let leftUnit = document.getElementById("left-units")
    let rightUnit = document.getElementById("right-units")
    let output = document.getElementById("output")

    input.addEventListener("keyup", convertTemperature)
    leftUnit.addEventListener("change", convertTemperature)
    rightUnit.addEventListener("change", convertTemperature)

    let leftUnitValue = leftUnit.value
    let rightUnitValue = rightUnit.value

    /* CELCIUS TO ALL CONVERTIONS */
    if(leftUnitValue === "celcius" && rightUnitValue === "celcius"){
        output.value = input.value
    }else if(leftUnitValue === "celcius" && rightUnitValue === "fahrenheit"){
        output.value = Number((input.value * 9/5) + 32)
    }else if(leftUnitValue === "celcius" && rightUnitValue === "kelvin"){
        output.value = Number(input.value + 273.15)
    }
    /* KELVIN TO ALL CONVERTIONS */
    if(leftUnitValue === "kelvin" && rightUnitValue === "celcius"){
        output.value = Number(input.value - 273.15)
    }else if(leftUnitValue === "kelvin" && rightUnitValue === "fahrenheit"){
        output.value = Number((input.value - 273.15) * 9/5 + 3)
    }else if(leftUnitValue === "kelvin" && rightUnitValue === "kelvin"){
        output.value = input.value
    }
    /* FAHRENHEIT TO ALL CONVERTIONS */
    if(leftUnitValue === "fahrenheit" && rightUnitValue === "celcius"){
        output.value = Number((input.value - 32) * 5/9 )
    }else if(leftUnitValue === "fahrenheit" && rightUnitValue === "fahrenheit"){
        output.value = input.value
    }else if(leftUnitValue === "fahrenheit" && rightUnitValue === "kelvin"){
        output.value = Number((input.value - 32) * 5/9 + 273.15)
    }

}

function reset() {
    convertTemperature()
}