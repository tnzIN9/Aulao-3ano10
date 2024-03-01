function checkMajority(){
    var wasBorn = document.getElementById("clientBirth").valueAsNumber;
    var res = document.getElementById("result");

    if(isNaN(wasBorn)){
        res.textContent = "Type only numbers";
        res.style.color = "red";
        return;
    }

    const thisYear = new Date().getFullYear();
    const age = thisYear - wasBorn

    if(age >= 18){
        res.textContent ="Over 18, ENTRY 😊"
        res.style.color ="green"

    }else{
        res.textContent ="Uunder 18, DON'T ENTRY 😒"
        res.style.color ="red"

    }
    
    document.getElementById("clientAge").innerHTML = `${age} anos de idade!`
}