


function RAD(factor, varr) {
		varr = varr + (factor*Math.PI/180);
		if (varr >= 2*Math.PI) varr = varr - 2*Math.PI; // Evita desboradmiento.
		
	return varr;
}