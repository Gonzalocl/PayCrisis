




class Estrellas {
	e;
	n; maximo; // n: no es el Elemento actual es el numero de estrellas en el array
}


function Estrellas_Crea(maximo) {
	let e = new Estrellas();

	e.e = [];
	e.n = 0;
	e.maximo = maximo;

	return e;
}


function Estrellas_Libera(e) {
	for (let i = 0; i < e.n; i++) {
		Estrella_Libera(e.e[i]);
	}



}


function Estrellas_Dibuja(e) {
	for (let i = 0; i < e.n; i++) Estrella_Dibuja(e.e[i]);
}

function Estrellas_Inicializa(e) {
	for (let i = 0; i < e.maximo; i++) {
		e.e[i] = undefined;
	}
}


function Estrellas_Colision(e, x, y, w, h) {
	let contador = 0;

	for (let i = 0; i < e.n; i++) {
		if ( Colision(Estrella_X(e.e[i]), Estrella_Y(e.e[i]), Estrella_W(e.e[i]), Estrella_H(e.e[i]), x, y, w, h) ) {
			contador++;
			Estrella_Libera(e.e[i]);
			e.e[i] = undefined;
		}
	}
	// Reordeno
	let nulos = contador;
	let i = 0;
	let j = e.maximo - 1;
	while ((j > i) && (nulos !== 0)) {
		// Encontramos el Primer NULL
		while ((j > i) && (e.e[i] !== undefined)) {

			i++;
		}
		// Encontramos las primera estrella
		while ((j > i) && (e.e[j] === undefined)) {
			j--;
		}
		// En este estado: Hemos encontrado una Estrella o Esta todo ordenado
		if (j > i) {
			e.e[i] = e.e[j];
			e.e[j] = undefined;

		}

		i++;
		j--;
		nulos--;
	}

	e.n = e.n - contador;
	return contador;
}


function Estrellas_Inserta(e, i, x, y, w, h) {
	if (e.n < e.maximo) {
		e.e[e.n] = Estrella_Crea(i, x, y, w, h);
		e.n++;
	}
}
