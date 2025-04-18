let caja = [
   { valor: 500, cantidad: 0 },
   { valor: 200, cantidad: 0 },
   { valor: 100, cantidad: 0 },
   { valor: 50, cantidad: 1 },
   { valor: 20, cantidad: 4 },
   { valor: 10, cantidad: 8 },
   { valor: 5, cantidad: 2 },
   { valor: 2, cantidad: 5 },
   { valor: 1, cantidad: 4 },
   { valor: 0.5, cantidad: 0 },
   { valor: 0.2, cantidad: 0 },
   { valor: 0.1, cantidad: 1 },
   { valor: 0.05, cantidad: 2 },
   { valor: 0.02, cantidad: 3 },
   { valor: 0.01, cantidad: 1 },
 ];
 
 const saldoTotal = () => {
     return caja.reduce((total, item) => total + item.valor * item.cantidad, 0);
   };
 console.log(`El saldo total de la caja es: ${saldoTotal()}`);
 
 const introducirBilletes = () => {
   do {
     let billetes = parseInt(
       prompt("¿Que billetes te ha dado el cliente? Introduce 0 si es ninguno")
     );
     if (billetes == 0) break;
     let cantidad = parseInt(prompt("¿Cuantos billetes te ha dado el cliente?"));
     let billeteEncontrado = caja
       .map((billete) => billete.valor)
       .indexOf(billetes);
     if (billeteEncontrado != -1) {
       caja[billeteEncontrado].cantidad += cantidad;
     } else {
       alert("Billete no encontrado en la caja");
     }
     console.log(`El saldo total de la caja es: ${saldoTotal()}`);
     console.log(caja);
   } while (true);
 };
 const introducirMonedas = () => {
   do {
     let monedas = parseInt(
       prompt("¿Que monedas te ha dado el cliente? Introduce 0 si es ninguno")
     );
     if (monedas == 0) break;
     let cantidad = parseInt(prompt("¿Cuantos monedas te ha dado el cliente?"));
     let monedaEncontrada = caja.map((moneda) => moneda.valor).indexOf(monedas);
     if (monedaEncontrada != -1) {
       caja[monedaEncontrada].cantidad += cantidad;
     } else {
       alert("Moneda no encontrada en la caja");
     }
     console.log(`El saldo total de la caja es: ${saldoTotal()}`);
     console.log(caja);
   } while (true);
 };
 const calcularCambio = (sumaProductos, entrada) => {
   let cambio = entrada - sumaProductos;
   if (cambio < 0) {
     alert("El dinero introducido es menor que la suma de los productos");
     return;
   } else if (cambio == 0) {
     alert("No se necesita cambio");
   }
 
   let cambioEntregado = [];
   caja = caja.reduce((acumulador, billete) => {
     while (cambio >= billete.valor && billete.cantidad > 0) {
       cambio -= billete.valor;
       billete.cantidad--;
       cambioEntregado.push(billete.valor);
     }
     acumulador.push(billete);
     return acumulador;
   }, []);
 
   console.log(`El cambio entregado es: ${cambioEntregado}`);
   console.log(`El saldo total de la caja es: ${saldoTotal()}`);
   return cambioEntregado;
 };
 //inicio de la caja
 const iniciarCaja = () => {
   let sumaProductos = parseFloat(prompt("La suma de los productos es: "));
   let entrada = parseFloat(prompt("Valor dado por el cliente"));
   introducirBilletes();
   introducirMonedas();
   calcularCambio(sumaProductos, entrada);
 };
 
 // Cliente en caja
 document.getElementById("clienteButton").addEventListener("click", function () {
   console.log("Botón Cliente presionado");
   iniciarCaja();
 });
 
 