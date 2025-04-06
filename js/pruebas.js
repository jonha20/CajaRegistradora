const caja = [{
    billetes500: 0,
    billetes200: 0,
    billetes100: 0,
    billetes50: 1,
    billetes20: 4,
    billetes10: 8,
    billetes5: 2,
    monedas2: 5,
    monedas1:4,
    monedas50: 0,
    monedas20: 0,
    monedas10: 1,
    monedas05: 2,
    monedas02: 3,
    monedas01: 1
}];
let billetes = ""
do {
    billetes = "billetes" + prompt("¿Que billetes te ha dado el cliente? Introduce 0 si es ninguno")
    console.log(billetes);
    caja.find(index => index == billetes ? index[billetes] ++: console.log(Object.keys(index), billetes))
 } while (billetes !== "billetes0" );