#include "Personaje.h"


struct PersonajeRep {
	int x,y,w,h;
	Imagen imagen;
};


Personaje Personaje_Crea(Imagen i, int x, int y, int w, int h) {
	Personaje p = malloc(sizeof( struct PersonajeRep ));
	
	p->imagen = i;
	p->x = x;
	p->y = y;
	p->w = w;
	p->h = h;
	
	return p;
}


void Personaje_Libera(Personaje p) {
	free(p);
}


void Personaje_Mueve(Personaje p) {
	// Control del Usuario
	if (Pantalla_TeclaPulsada(SDL_SCANCODE_RIGHT)) {
		p->x = p->x + 6;
	}
	if (Pantalla_TeclaPulsada(SDL_SCANCODE_LEFT)) {
		p->x = p->x - 6;
	}
	if (Pantalla_TeclaPulsada(SDL_SCANCODE_UP)) {
		p->y = p->y - 7;
	}
	if (Pantalla_TeclaPulsada(SDL_SCANCODE_DOWN)) {
		p->y = p->y + 7;
	}
	
	// Limites
	if (p->x > Pantalla_Anchura() - p->w) {
		p->x = Pantalla_Anchura() - p->w;
	}
	if (p->x < 0) {
		p->x = 0;
	}
	if (p->y > Pantalla_Altura() - p->h) {
		p->y = Pantalla_Altura() - p->h;
	}
	if (p->y < 0) {
		p->y = 0;
	}
	
}


void Personaje_Dibuja(Personaje p) {
	Pantalla_DibujaImagen(p->imagen, p->x, p->y, p->w, p->h);
}


int Personaje_X(Personaje p) {
	return p->x;
}


int Personaje_Y(Personaje p) {
	return p->y;
}


int Personaje_W(Personaje p) {
	return p->w;
}


int Personaje_H(Personaje p) {
	return p->h;
}