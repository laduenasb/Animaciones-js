/* Pregunta al usuario que ingrese un día de la semana.
Utiliza SweetAlert2 para mostrar un mensaje relacionado con el día ingresado. */
let dia=prompt("Ingrese el dia de la semana: ");
let semana=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"]
if(dia){
	Swal.fire({
		title: 'Hola, Bienvenido!',
		// text: `Hola, el numero del dia de la semana es: ${semana.indexOf(dia)+1}`,
		text: `Hola, el dia de la semana es ${semana[dia-1]}`,
		icon: 'success'
	});

} else {
	Swal.fire({
		title: 'Entrada vacia',
		text: 'Ingresa un dia de la semana',
		icon: 'warning'
	});
}