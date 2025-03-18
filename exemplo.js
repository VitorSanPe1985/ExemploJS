function calcularImc() {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    let imc= peso /(altura*altura);
    
    document.getElementById("resultado").textContent= "O IMC deste usuário é de " + imc;

    if (imc <= 18.5) {
        document.getElementById("significado").textContent= "Você está abaixo do peso";
    }
    if (imc > 18.5 && imc <= 24.9) {
        document.getElementById("significado").textContent= "Você está no peso correto";
    }
    if (imc > 24.9) {
        document.getElementById("significado").textContent= "Você está acima do peso";
    }
    if (imc <= 0) {
        document.getElementById("significado").textContent= "Você precisa inserir valores realísticos, camarada!";
    }
}



