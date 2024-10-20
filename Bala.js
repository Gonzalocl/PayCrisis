#include "Bala.h"
#include "Pantalla.h"
#include <stdlib.h>


struct BalaRep {
	int x,y,vy;
};


Bala Bala_Crea(int x, int y, int vy) {
	Bala b = malloc(sizeof(struct BalaRep));

	b->x = x;	// Personaje
	b->y = y;	// Personaje
	b->vy = vy;

	return b;
}


void Bala_Libera(Bala b) {
	free(b);
}


void Bala_Mueve(Bala b) {
	b->y = b->y - b->vy;
}


void Bala_Dibuja(Bala b) {
	Pantalla_DibujaCirculo((double)b->x, (double)b->y, 1);
}


int Bala_FueraDeRango(Bala b) {
	return (b->y < 0);
}


int Bala_X(Bala b) {
	return b->x;
}


int Bala_Y(Bala b) {
	return b->y;
}
