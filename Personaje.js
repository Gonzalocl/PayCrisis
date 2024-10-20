


class Personaje {
	x;y;w;h;
	imagen;
}


function Personaje_Crea(i, x, y, w, h) {
	let p = new Personaje();
	
	p.imagen = i;
	p.x = x;
	p.y = y;
	p.w = w;
	p.h = h;
	
	return p;
}


function Personaje_Libera(p) {

}


function Personaje_Mueve(p) {
	// Control del Usuario
	if (Pantalla_TeclaPulsada(SDL_SCANCODE_RIGHT)) {
		p.x = p.x + 6;
	}
	if (Pantalla_TeclaPulsada(SDL_SCANCODE_LEFT)) {
		p.x = p.x - 6;
	}
	if (Pantalla_TeclaPulsada(SDL_SCANCODE_UP)) {
		p.y = p.y - 7;
	}
	if (Pantalla_TeclaPulsada(SDL_SCANCODE_DOWN)) {
		p.y = p.y + 7;
	}
	
	// Limites
	if (p.x > Pantalla_Anchura() - p.w) {
		p.x = Pantalla_Anchura() - p.w;
	}
	if (p.x < 0) {
		p.x = 0;
	}
	if (p.y > Pantalla_Altura() - p.h) {
		p.y = Pantalla_Altura() - p.h;
	}
	if (p.y < 0) {
		p.y = 0;
	}
	
}


function Personaje_Dibuja(p) {
	Pantalla_DibujaImagen(p.imagen, p.x, p.y, p.w, p.h);
}


function Personaje_X(p) {
	return p.x;
}


function Personaje_Y(p) {
	return p.y;
}


function Personaje_W(p) {
	return p.w;
}


function Personaje_H(p) {
	return p.h;
}