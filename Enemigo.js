




class Enemigo {
	x;y;w;h;vx;vy;
	imagen;
}


function Enemigo_Crea(i, x, y, w, h, vx, vy) {
	let e = new Enemigo();

	e.imagen = i;
	e.x = x;
	e.y = y;
	e.w = w;
	e.h = h;
	e.vx = vx;
	e.vy = vy;

	return e;
}


function Enemigo_Libera(e) {

}


function Enemigo_Mueve(e) {
	// Movimiento
	e.x = e.x + e.vx;
	e.y = e.y + e.vy;

	// Limites
	if (e.x > Pantalla_Anchura() - e.w) {
		e.x = Pantalla_Anchura() - e.w;
		e.vx = -e.vx;
	}

	if (e.x < 0) {
		e.x = 0;
		e.vx = -e.vx;
	}

	if (e.y > Pantalla_Altura() - e.h) {
		e.y = Pantalla_Altura() - e.h;
		e.vy = -e.vy;
	}

	if (e.y < 0) {
		e.y = 0;
		e.vy = -e.vy;
	}
}


function Enemigo_Dibuja(e) {
	Pantalla_DibujaImagen(e.imagen, e.x, e.y, e.w, e.h);
}


function Enemigo_X(e) {
	return e.x;
}


function Enemigo_Y(e) {
	return e.y;
}


function Enemigo_W(e) {
	return e.w;
}


function Enemigo_H(e) {
	return e.h;
}
