function convert(){
    let cmval=Number(document.getElementById("input").value)
    let inchval= cmval/2.54  //lenght to inche formula
    let result =document.getElementById("result")
     result.innerHTML=inchval.toFixed(3) + " inches" //toFixed evlo number display pannanum solrom
}
