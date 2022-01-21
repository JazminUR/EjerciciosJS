
// EJERCICIO 2 PARTE 1

class Libro {
    constructor(tituloParam, autorParam, generoParam) {
      this.titulo = tituloParam;
      this.autor = autorParam;
      this.genero = generoParam;
      this.leyendoActualmente = false;
      this.leido = false;
      this.fechaDeLeido = null;
    }
  
    marcarComoLeyendo() {
      this.leyendoActualmente = true;
    }
  
    marcarComoLeido() {
      this.leido = true;
      this.fechaDeLeido = new Date().toDateString();
    }
  }
  
  let primerLibroDIV = document.getElementById('libro1');
  let segundoLibroDIV = document.getElementById('libro2');
  
  const principitoLibro = new Libro('El Principito', 'Jose Vasconcelos', 'Novela');
  const bibliaLibro = new Libro('La Biblia', 'Dios', 'Divino');
  const crepusculoLibro = new Libro('Crepusculo; El amanecer', 'Nathalie Rubanova', 'Romántico');
  const acuerdosLibro = new Libro('Los cuatro acuerdos', 'Miguel Ruíz', 'Filósofico');
  const quesoLibro = new Libro('¿Quién se ha llevado mi queso?', 'Ratatouille', 'Comedia');
  
  primerLibroDIV.innerHTML = `
    <p>Título del primer libro: ${principitoLibro.titulo}</p>
    <p>Autor del primer libro: ${principitoLibro.autor}</p>
    <p>Género del primer libro: ${principitoLibro.genero}</p>
  `;
  
  segundoLibroDIV.innerHTML = `
    <p>Título del segundo libro: ${bibliaLibro.titulo}</p>
    <p>Autor del segundo libro: ${bibliaLibro.autor}</p>
    <p>Género del segundo libro: ${bibliaLibro.genero}</p>
  `;
  
  // EJERCICIO 2 PARTE 2
  
  class ListaDeLibros {
    constructor(nombreDeLista) {
      this.nombre = nombreDeLista;
      this.cantidadLibrosLeidos = 0;
      this.cantidadLibrosNoLeidos = 0;
      this.siguienteLibroPorLeer = null;
      this.libroLeyendoActualmente = null;
      this.ultimoLibroLeido = null;
      this.todosLosLibros = [];
    }
  
    añadirLibro(book) {
      this.todosLosLibros.push(book);
      this.cantidadLibrosNoLeidos = this.cantidadLibrosNoLeidos + 1;
      const libroNoLeido = this.todosLosLibros.find(function(elemento) {
        return elemento.leido === false && elemento.leyendoActualmente === false;
      });
      this.siguienteLibroPorLeer = libroNoLeido;
    }
  
    comenzarALeerLibro() {
      if (this.siguienteLibroPorLeer) this.siguienteLibroPorLeer.marcarComoLeyendo();
      this.libroLeyendoActualmente = this.siguienteLibroPorLeer;
      const libroNoLeido = this.todosLosLibros.find(function(elemento) {
        return elemento.leido === false && elemento.leyendoActualmente === false;
      });
      this.siguienteLibroPorLeer = libroNoLeido;
    }
  
    terminarDeLeerLibroActualmenteLeyendo() {
      this.libroLeyendoActualmente.marcarComoLeido();
      this.ultimoLibroLeido = this.libroLeyendoActualmente;
      this.libroLeyendoActualmente = null;
      this.comenzarALeerLibro();
      this.cantidadLibrosNoLeidos = this.cantidadLibrosNoLeidos - 1;
      this.cantidadLibrosLeidos = this.cantidadLibrosLeidos + 1;
    }
  }
  
  const listaLibros1 = new ListaDeLibros('Lista de libros favoritos de Jazmín');
  listaLibros1.añadirLibro(principitoLibro);
  listaLibros1.añadirLibro(bibliaLibro);
  listaLibros1.añadirLibro(crepusculoLibro);
  listaLibros1.añadirLibro(acuerdosLibro);
  listaLibros1.añadirLibro(quesoLibro);
  
  let parrafoNombreDeLista = document.getElementById('nombreDeLista');
  let parrafoLibrosLeidos = document.getElementById('leidos');
  let parrafoTotalLibros = document.getElementById('totalLibros');
  let parrafoSiguienteLibro = document.getElementById('siguienteLibro');
  let parrafoLibroLeyendo = document.getElementById('libroLeyendo');
  let botonComenzarALeerLibro = document.getElementById('comenzarLeer');
  let botonTerminarDeLeerLibro = document.getElementById('terminarLeer');
  
  parrafoNombreDeLista.innerHTML = `Nombre de lista: ${listaLibros1.nombre}`;
  parrafoLibrosLeidos.innerHTML = `Libros leídos: ${listaLibros1.cantidadLibrosLeidos}`;
  parrafoTotalLibros.innerHTML = `Total de libros: ${listaLibros1.todosLosLibros.length}`;
  parrafoSiguienteLibro.innerHTML = `Siguiente libro por leer: ${listaLibros1.siguienteLibroPorLeer.titulo}`;
  parrafoLibroLeyendo.innerHTML = listaLibros1.libroLeyendoActualmente ? 
    `Libro leyendo actualmente: ${listaLibros1.libroLeyendoActualmente.titulo}` :
    'Comienza a leer un libro';
  
  botonComenzarALeerLibro.addEventListener('click', function() {
    if (!listaLibros1.libroLeyendoActualmente) {
      listaLibros1.comenzarALeerLibro();
      parrafoSiguienteLibro.innerHTML = listaLibros1.siguienteLibroPorLeer ?
        `Siguiente libro por leer: ${listaLibros1.siguienteLibroPorLeer.titulo}` :
        'Ya no hay más libros :(';  
      parrafoLibroLeyendo.innerHTML = listaLibros1.libroLeyendoActualmente ? 
        `Libro leyendo actualmente: ${listaLibros1.libroLeyendoActualmente.titulo}` :
        'Comienza a leer un libro';
    }
  });
  
  botonTerminarDeLeerLibro.addEventListener('click', function() {
    if (listaLibros1.libroLeyendoActualmente) {
      listaLibros1.terminarDeLeerLibroActualmenteLeyendo();
      parrafoLibrosLeidos.innerHTML = `Libros leídos: ${listaLibros1.cantidadLibrosLeidos}`;
      parrafoSiguienteLibro.innerHTML = listaLibros1.siguienteLibroPorLeer ?
        `Siguiente libro por leer: ${listaLibros1.siguienteLibroPorLeer.titulo}` :
        'Ya no hay más libros :(';
      parrafoLibroLeyendo.innerHTML = listaLibros1.libroLeyendoActualmente ? 
        `Libro leyendo actualmente: ${listaLibros1.libroLeyendoActualmente.titulo}` :
        'Comienza a leer un libro';
    }
  });