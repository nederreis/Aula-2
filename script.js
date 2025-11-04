function calcular() {
    // passo 1 - oboter o valor que o usuario digitou no INPUT
    // passo 2 - realizar o calculo
    // passo 3 - alterar o conteúdo do que tem na tag SPAN

    let valorbr = document.getElementById("valorbr").value;
    fetch("https://api.frankfurter.dev/v1/latest?base=USD&to=BRL")
        .then(res => res.json())
        .then(objres => {
            console.log(objres)
            let valorus = valorbr * objres.rates.BRL;
            document.getElementById("valor").innerHTML = valorus;
            document.getElementById("cotacao").innerHTML = objres.rates.BRL;
        })
        .catch(err => {
            console.log(err);
            alert("Erro ao receber cotacao do dolar!")
        })


}
