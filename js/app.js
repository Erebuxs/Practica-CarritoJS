const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBoton = document.querySelector('#vaciar-carrito');
const listaCurso = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners(){
  listaCurso.addEventListener('click', agregarCurso);
};

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leeDatosCurso(cursoSeleccionado);
    }
};

function leeDatosCurso(curso){
    console.log(curso);

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };

    console.log(infoCurso);
}


