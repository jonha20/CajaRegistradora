let saldoTotal =  234.27
let sumaProductos = parseInt(prompt("La suma de los productos es: "))
let entrada = parseInt(prompt("Valor dado por el cliente"))
//let caja =[]
const nuevoSaldoTotal = () => {
   if (entrada > sumaProductos) {
    saldoTotal = saldoTotal + entrada
   }else if(entrada < sumaProductos ) {
    saldoTotal = saldoTotal - entrada
   }else{
    alert("No se necesita cambio")
   }return saldoTotal
}
const saldoCaja = () =>{
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
    return caja
}