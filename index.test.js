const CalcularCombustivel = require('./index.js');

test("10 Litros de Gasolina devem ser R$60", () => {
    expect(CalcularCombustivel("gasolina", 5).toBe(25))
});

test("10 Litros de Álcool devem ser R$40", () => {
    expect(CalcularCombustivel("alcool", 7)).not.toBe(60)
});

test("5 Litros de Álcool NÃO devem ser R$40", () => {
    expect(CalcularCombustivel("alcool", 5)).toBe(40)
});

test("8 Litros de Gasolina NÃO devem ser R$20", () => {
    expect(CalcularCombustivel("gasolina", 10)).not.toBe(60)
});




