/* Crear un pop-up que le pregunte al usuario un msj de si esta de acuerdo o no */

// Inicializar la librería de seetAlert
// Suscripciones a una empresa
Swal.fire({
	title: '¿Quires recibir noticias de nuestra empresa?',
	icon: 'question',
	showCancelButton: true,
	confirmButtonText: 'Si',
	cancelButtonText: 'No'
}).then((result)=>{ // promesa usar una o diferentes acciones en una libreria
	// Verificar la respuesta del usuario
	if(result.isConfirmed) {
		// Mostrar el mensaje de acuerdo
		Swal.fire('!Acuerdo¡', 'Recibiras notificaciones', 'success');
	} else {
		// Mostrar mensaje de desacuerdo
		Swal.fire('!Estás en Desacuerdo', 'No recibiras notificaciones', 'info')
	}
})