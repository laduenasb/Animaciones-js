function bisiesto(year){
	let resultado=false;
	if(year%4==0) {
		resultado=true;
		if(year%100==0) {
			resultado=false;
			if(year%400==0){
				resultado=true;
			}
		}
	} 
	return resultado
}

console.log(bisiesto(2023));
