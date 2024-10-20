




class Enemigos {
	e;
	sig;
}


function Enemigos_Crea() {
	let e = new Enemigos();
	e.sig = undefined;

	return e;
}


function Enemigos_Libera(e) {
	while (e.sig !== undefined) {
		let aux = e.sig;
		Enemigo_Libera(aux.e);
		e.sig = aux.sig;

	}


}


function Enemigos_Inserta(e, i, x, y, w, h, vx, vy) {
	let aux = new Enemigos();
	aux.e = Enemigo_Crea(i, x, y, w, h, vx ,vy);
	aux.sig = e.sig;
	e.sig = aux;
}


function Enemigos_Mueve(e) {
	while (e.sig !== undefined) {
		Enemigo_Mueve(e.sig.e);
		e = e.sig;
	}
}


function Enemigos_Dibuja(e) {
	while (e.sig !== undefined) {
		Enemigo_Dibuja(e.sig.e);
		e = e.sig;
	}
}


function Enemigos_Colision(e, x, y, w, h) {
	while (e.sig !== undefined && !Colision(Enemigo_X(e.sig.e), Enemigo_Y(e.sig.e), Enemigo_W(e.sig.e), Enemigo_H(e.sig.e), x, y, w, h) ) e = e.sig;
	let colision = (e.sig!==undefined);
	if (colision) {
        let aux = e.sig;
        e.sig = e.sig.sig;
        Enemigo_Libera(aux.e);

    }
	return colision;
}
