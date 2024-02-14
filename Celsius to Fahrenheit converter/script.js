function convert() {
    // let celsius = Number(document.getElementById("input").value);
    // let fahrenheit = (celsius * 9/5) + 32; // Celsius to Fahrenheit formula
    // let result = document.getElementById("result");
    // result.innerHTML = celsius + "&#176;C is equal to " + fahrenheit.toFixed(2) + "&#176;F";
  let celsius= Number (document.getElementById("input").value)
  let fahrenheit =(celsius *9/5) +32
  let result= document.getElementById("result")
  result.innerHTML =fahrenheit+ "&#176;F";
}