

carrito= [];

const p1 = {
    nombre: "vela violeta",
    precio: 600,
};

const p2 = {
    nombre: "vela mariposa",
    precio: 600,
};

const p3 = {
    nombre: "vela flor",
    precio: 600,
};

carrito.push(p1);
carrito.push(p2);

const producto = {
    nombre: "vela mariposa",
    precio: "600",
}

for (let item of carrito){
    console.log(item);
}

const saludar = () => {
    console.log("Gracias por su compra");
};

localStorage.setItem('vela', 'mariposa')
localStorage.setItem('vela', 'flor')
localStorage.setItem('vela', 'violeta')

