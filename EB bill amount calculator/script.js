function convert(){
let unit = Number(document.getElementById("input").value)
    let rate = 0
// EB bill amount calculator

// For first 50 units Rs. 0.75/unit
// For next 100 units Rs. 1.00/unit
// For next 100 units Rs. 1.30/unit
// For unit above 250 Rs. 1.50/unit
// Input - 75
// Output - 62.5

if(unit<50)
    rate = 0.75
else if(unit>=50 && unit<=100)
    rate=1.00
else if (unit>=101 && unit<=200)
    rate = 1.30
else(unit>250)
    rate= 2.00
let result= document.getElementById("result")
result.innerHTML = "EB amount is : " + rate +" rs"

}
