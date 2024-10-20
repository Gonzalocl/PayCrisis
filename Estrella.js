




class Estrella {
	x;y;w;h;
	imagen;
}

function Estrella_Crea(i, x, y, w, h) {
	let e = new Estrella();

	e.imagen = i;
	e.x = x; // RAND
	e.y = y; // RAND
	e.w = w;
	e.h = h;

	return e;
}

function Estrella_Libera(e) {

}

function Estrella_Dibuja(e) {
	Pantalla_DibujaImagen(e.imagen, e.x, e.y, e.w, e.h);
}


function Estrella_X(e) {
	return e.x;
}

function Estrella_Y(e) {
	return e.y;
}

function Estrella_W(e) {
	return e.w;
}

function Estrella_H(e) {
	return e.h;
}
