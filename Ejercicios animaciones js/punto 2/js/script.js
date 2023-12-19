let numero=prompt('Ingrese un numero: ');

if(numero){
	if(numero>0){
		Swal.fire({
			title: 'Bienvenido',
			text: "El número es positivo",
			icon: "success"
		});
	} else {
		Swal.fire({
			title: 'Bienvenido',
			text: "El número es negativo",
			icon: "success"
		});
	}
	if(numero==0){
		Swal.fire({
			title: 'Bienvenido',
			text: "El número es cero",
			icon: "success"
		});
	}
	
} else {
	Swal.fire({
		title: 'Bienvenido',
		text: "Ingresa un numero valido",
		icon: "error"
	});
}