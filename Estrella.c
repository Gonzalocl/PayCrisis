#include "Estrella.h"
#include "Pantalla.h"
#include <stdlib.h>


struct EstrellaRep {
	int x,y,w,h;
	Imagen imagen;
};

Estrella Estrella_Crea(Imagen i, int x, int y, int w, int h) {
	Estrella e = malloc(sizeof( struct EstrellaRep ));

	e->imagen = i;
	e->x = x; // RAND
	e->y = y; // RAND
	e->w = w;
	e->h = h;

	return e;
}

void Estrella_Libera(Estrella e) {
	free(e);
}

void Estrella_Dibuja(Estrella e) {
	Pantalla_DibujaImagen(e->imagen, e->x, e->y, e->w, e->h);
}


int Estrella_X(Estrella e) {
	return e->x;
}

int Estrella_Y(Estrella e) {
	return e->y;
}

int Estrella_W(Estrella e) {
	return e->w;
}

int Estrella_H(Estrella e) {
	return e->h;
}
