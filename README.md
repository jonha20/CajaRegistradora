# 💰 Caja Registradora (JS - Consola)

Este proyecto es un ejercicio práctico de una **caja registradora** que simula el proceso de recibir dinero y calcular el cambio, utilizando únicamente **JavaScript** y mostrando los resultados por **consola**.

## 🚀 ¿Cómo funciona?

Al hacer clic en un botón en la página, se ejecuta un script que:

1. Solicita al usuario ingresar billetes mediante una serie de `prompt()`s.
2. Usa métodos de array y condicionales para procesar los datos.
3. Calcula si se ha pagado correctamente y si corresponde dar **cambio**.
4. Muestra en la consola:
   - Si el pago es correcto.
   - Cuánto cambio debe devolverse (si aplica).
   - Mensaje de error si los billetes son inválidos o no alcanzan.

## 🧠 Lógica implementada

- Solicitud de monto a pagar y billetes entregados mediante `prompt()`.
- Validación de billetes aceptados mediante `indexOf()` o condicionales.
- Almacenamiento de los billetes en un array usando `push()`.
- Transformación y cálculo con `map()` y `reduce()`.
- Uso de `if`, `else` para determinar si se da cambio o falta dinero.
- Salida 100% por `console.log()`.

## 🧪 Conceptos usados

- `prompt()`
- `console.log()`
- `map()`
- `reduce()`
- `indexOf()`
- `push()`
- Condicionales (`if`, `else`)

## 📂 Estructura

```plaintext
📁 caja-registradora/
├── index.html             <-- Contiene el botón que inicia el proceso
└── 📁 js/
    └── script.js          <-- Contiene toda la lógica de la caja registradora
```

## 🌐 Ver online

Puedes probar la caja registradora directamente desde aquí:

👉 https://jonha20.github.io/Caja-Registradora/index.html
