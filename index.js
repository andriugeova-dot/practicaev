function Intercambio() {
    const contenedor = document.querySelector (".contenedor");
    const cuadrito = document.querySelector (".cuadrito");
    
    const color1 = getComputedStyle(contenedor).backgroundColor;
    const color2 = getComputedStyle(cuadrito).backgroundColor;

    contenedor.style.backgroundColor = color2;
    cuadrito.style.backgroundColor = color1;
}