//Valores gasolina = R$6, álcool = R$4

function CalcularCombustivel(combustivel, quantidade) {
    let valor
    switch (quantidade) {
        case gasolina:
            valor = quantidade * 4
            break;
        case alcool:
            valor = quantidade * 6
            break;
        default:
            console.log("Combustível inválido")
            break;
    }
}

module = CalcularCombustivel;





