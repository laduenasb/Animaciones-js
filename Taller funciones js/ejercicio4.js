let frase = "hola mundo prueba esto hola ";
letras=frase.length;
let x=frase.charAt(0).toUpperCase();
for(i=1;i<letras-1;i++){
	if(frase[i]==" "){
		x+=frase.charAt(i);
	}
	if(frase[i]==" " && frase[i+1]!=" "){
		x+=frase.charAt(i+1).toUpperCase();
	}
	if(frase[i]!=" " && frase[i-1]!=" ") {
		x+=frase.charAt(i);
	}
}
x+=frase.charAt(letras-1);
// console.log(frase.charAt(0).toUpperCase());

console.log(x);