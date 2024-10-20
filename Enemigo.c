#include "Enemigo.h"
#include "Pantalla.h"
#include <stdlib.h>


struct EnemigoRep {
	int x,y,w,h,vx,vy;
	Imagen imagen;
};


Enemigo Enemigo_Crea(Imagen i, int x, int y, int w, int h, int vx, int vy) {
	Enemigo e = malloc(sizeof(struct EnemigoRep));

	e->imagen = i;
	e->x = x;
	e->y = y;
	e->w = w;
	e->h = h;
	e->vx = vx;
	e->vy = vy;

	return e;
}


void Enemigo_Libera(Enemigo e) {
	free(e);
}


void Enemigo_Mueve(Enemigo e) {
	// Movimiento
	e->x = e->x + e->vx;
	e->y = e->y + e->vy;

	// Limites
	if (e->x > Pantalla_Anchura() - e->w) {
		e->x = Pantalla_Anchura() - e->w;
		e->vx = -e->vx;
	}

	if (e->x < 0) {
		e->x = 0;
		e->vx = -e->vx;
	}

	if (e->y > Pantalla_Altura() - e->h) {
		e->y = Pantalla_Altura() - e->h;
		e->vy = -e->vy;
	}

	if (e->y < 0) {
		e->y = 0;
		e->vy = -e->vy;
	}
}


void Enemigo_Dibuja(Enemigo e) {
	Pantalla_DibujaImagen(e->imagen, e->x, e->y, e->w, e->h);
}


int Enemigo_X(Enemigo e) {
	return e->x;
}


int Enemigo_Y(Enemigo e) {
	return e->y;
}


int Enemigo_W(Enemigo e) {
	return e->w;
}


int Enemigo_H(Enemigo e) {
	return e->h;
}
