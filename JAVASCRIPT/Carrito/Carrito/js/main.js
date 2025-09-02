// console.log("Holiwis");
const contenedorCarrito = document.getElementById('cuerpo-carrito')
let cursosCarrito = [];

function vaciarCarrito(evento){
    console.log("Soy el vaciar carrito");

    cursosCarrito = [];
    contenedorCarrito.innerHTML = "";
}

function agregarCurso (evento){
    console.log("Soy el agregar curso");
   // console.log(evento.target.parentElement.parentElement);

   let curso = leerDatosCurso(evento.target.parentElement.parentElement);
   console.log(curso);

   //   TAREA

   //Chequeamos si el curso existe previamente y guardamos true or false
    const existe = cursosCarrito.some( (cursoArr) => cursoArr.id == curso.id)

       if (existe) {
        cursosCarrito = cursosCarrito.map((cursoArr) => {
            if (cursoArr.id === curso.id) {
                cursoArr.cantidad += 1;
                // Obtener precio unitario (el original)
                let precioUnitario = parseFloat(curso.precio.substring(1));
                let precioTotal = precioUnitario * cursoArr.cantidad;
                // Actualizar precio total con formato
                cursoArr.precio = `$${precioTotal.toFixed(2)}`;
                return cursoArr;
            }
            return cursoArr;
        });
    } else {
        cursosCarrito.push(curso);
    }
    pintarCarritoHTML();
}

function leerDatosCurso(curso){
    console.log(curso)

    console.log(curso.querySelector('a').getAttribute('data-id'));
    console.log(curso.querySelector('img').src);
    console.log(curso.querySelector('h4').textContent);
    console.log(curso.querySelector('h5').textContent);

    const infoCurso = {
        id : curso.querySelector('a').getAttribute('data-id') ,
        imagen : curso.querySelector('img').src ,
        nombre : curso.querySelector('h4').textContent ,
        precio : curso.querySelector('h5').textContent ,
        cantidad : 1
    }

    return infoCurso;
}

function pintarCarritoHTML(){
    //Limpia el html del carrito antes de mapear los datos
    contenedorCarrito.innerHTML = ""

    cursosCarrito.map( (curso) => {

        //Crear una fila
        let fila = document.createElement('tr');

        //Asignar los valores en celdas
        fila.innerHTML = `
        <td><img src="${curso.imagen}" width="80"/></td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a class="btn btn-danger" onclick="eliminarCurso(${curso.id})">Eliminar</a></td>
        `

        contenedorCarrito.appendChild(fila)
    })
}

function eliminarCurso(id) {
    cursosCarrito = cursosCarrito.map((curso) => {
        if (curso.id == id) {
            if (curso.cantidad > 1) {
                curso.cantidad -= 1;
                // Calcular precio total nuevamente
                let precioUnitario = parseFloat(curso.precio.substring(1)) / (curso.cantidad + 1);
                curso.precio = `$${(precioUnitario * curso.cantidad).toFixed(2)}`;
                return curso;
            }
            // Si es la última unidad, no la devolvemos (se eliminará)
            return null;
        }
        return curso;
    }).filter(curso => curso !== null); // Filtra los que no son null
    pintarCarritoHTML();
}