function primos(n){
	let primos=[];
	for(i=1;i<=n;i++){
		esprimo=true;
		for(j=1;j<i;j++){
			if(i%j==0 && j!=1){
				esprimo=false;
			}
		}
		if(esprimo) {
			primos.push(i)
		}
	}
	return primos;
}

console.log(primos(30));