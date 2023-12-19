function mcd(num1,num2) {
	let comun=1;
	let min=num2;
	if(num1<num2){
		min=num1;
	}
	for(i=1;i<=min;i++){
		if(num1%i==0 && num2%i==0 && i!=1){
			comun=i
			console.log(comun);
		}
	}
	return comun;
}

console.log(mcd(48,18));