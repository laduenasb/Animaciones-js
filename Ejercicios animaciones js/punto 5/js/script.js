/* Solicita al usuario ingresar su puntuación en un examen.
Utiliza SweetAlert2 para indicar si ha aprobado o no, considerando una puntuación mínima para pasar de 3.0. */
let puntaje=prompt('Ingrese su puntaje: ');

if(puntaje){
	if(puntaje>=3){
		Swal.fire({
			title: "Bienvenido",
			text: "Haz aprobado el examen, hurra!!!",
			icon: "success"
		});
	} else {
		Swal.fire({
			title: "Bienvenido",
			text: "Haz reprobado el examen, ponte a estudiar!!!!",
			icon: "error"
		});
	}
	
} else {
	Swal.fire({
		title: "Entrada vacia",
		text: "Ingresa una nota valida!!!!",
		icon: "error"
	});
}