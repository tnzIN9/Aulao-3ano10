function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
        div.style.display = "flex";
        document.getElementById("exampleFormControlInput1").style.background = "none"
    }else{
        document.getElementById("error").style.display = "flex"
    }
}

function fechar(){
    document.getElementById("error").style.display = "none";
    document.getElementById("exampleFormControlInput1").style.background = "lightpink"
}
function calcularTotal(){
    var selectPratos = document.getElementById("selectPrato");
    var selectBebidas = document.getElementById("selectBebida");
    var selectSobremesas = document.getElementById("selectSobremesa");
    var resultadoSpan = document.getElementById("resultado");

    var total = 0;
    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;

    switch (selectPratos.value) {
        case "Prato feito":
            total = total + 12.90;
            prato = 12.90;
            break;
        case "Prato feito":
             total = total + 12.90;
             prato = 12.90;
              break;
        case "Prato feito":
            total = total + 12.90;
            prato = 12.90;
             break;
        case "Prato feito":
            total = total + 12.90;
             prato = 12.90;
            break
    }
    switch (selectBebidas.value) {
        case "Prato feito":
            total = total + 12.90;
            prato = 12.90;
            break;
        case "Prato feito":
                total = total + 12.90;
                prato = 12.90;
                 break;
        case "Prato feito":
                total = total + 12.90;
                prato = 12.90;
                break;
    }
    switch (selectSobremesas.value){
        case "Prato feito":
            total = total + 12.90;
            prato = 12.90;
            break;
        case "Prato feito":
            total = total + 12.90;
            prato = 12.90;
            break;
        case "Prato feito":
            total = total + 12.90;
            prato = 12.90;
            break;
    }

    resultadoSpan.textContent =
    document.getElementById("prato-pronto").innerHTML = prato.toFixed(2);
    document.getElementById("bebida-pronto").innerHTML = bebida.toFixed(2);
    document.getElementById("sobremesa-pronto").innerHTML = sobremesa.toFixed(2);
}


const limpar = () => {
        document.getElementById("select-div").style.display ="none";
        document.getElementById("exampleFormControlInput").value ="";
        document.getElementById("resultado").value = "";
        document.getElementById("selectPrato").value ="Selecione um prato";
        document.getElementById("selectBebida").value ="Selecione uma bebida";
        document.getElementById("selectSobremesa").value ="Selecione uma sobremesa";
        document.getElementById("prato-pronto").textContent ="";
        document.getElementById("bebida-pronto").textContent ="";
        document.getElementById("sobremesa-pronto").textCOntent ="";



}


