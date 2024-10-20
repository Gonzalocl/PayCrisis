




class Municion {
	b;
	sig;
}

function Municion_Crea() {
	let m = new Municion();
	m.sig = undefined;

	return m;
}


function Municion_Libera(m) {
	while (m.sig !== undefined) {
		let aux = m.sig;
		Bala_Libera(aux.b);
		m.sig = aux.sig;

	}


}


function Municion_Dispara(m, x, y, vy) {
	let aux = new Municion();
	aux.b = Bala_Crea(x, y, vy);
	aux.sig = m.sig;
	m.sig = aux;
}


function Municion_Mueve(m) {
	while (m.sig !== undefined) {
		Bala_Mueve(m.sig.b);
		if (Bala_FueraDeRango(m.sig.b)) {
			let aux = m.sig;
			m.sig = m.sig.sig;
			Bala_Libera(aux.b);

		}
		
		else {
			m = m.sig;
		}
	}
}


function Municion_Dibuja(m) {
	while (m.sig !== undefined) {
		Bala_Dibuja(m.sig.b);
		m = m.sig;
	}
}


function Municion_Colision(m, e) {
    let colisiona = 0;
    while (m.sig !== undefined) {
        if (Enemigos_Colision(e, Bala_X(m.sig.b), Bala_Y(m.sig.b), 4, 4)) {
                let aux = m.sig;
                m.sig = m.sig.sig;
                Bala_Libera(aux.b);

                colisiona++;
        }
        else m = m.sig;
    }
    return colisiona;
}
