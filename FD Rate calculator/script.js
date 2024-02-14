function convert(){
  let month= Number(document.getElementById("input").value)
  let rate =0
//   document.getElementById(month)
 //else if ladder
 // <3 months - 5.8%
 // 3 - 6 months - 6.5%
 // 7 - 9 months - 6.8%
 // >=10 months 7%
 if(month<3)
    rate =5.8
 else if(month>=3 && month<=6)
    rate = 6.5
else if(month>=7 && month<=9)
    rate = 6.8
 else
    rate = 7
 
let result = document.getElementById("result")
result.innerHTML = "Your interest rate is " + rate + " %"

    
 }
