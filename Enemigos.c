#include "Enemigos.h"
#include "Enemigo.h"
#include "Colision.h"
#include <stdlib.h>

struct EnemigosRep {
	Enemigo e;
	Enemigos sig;
};


Enemigos Enemigos_Crea() {
	Enemigos e = malloc(sizeof(struct EnemigosRep));
	e->sig = NULL;

	return e;
}


void Enemigos_Libera(Enemigos e) {
	while (e->sig != NULL) {
		Enemigos aux = e->sig;
		Enemigo_Libera(aux->e);
		e->sig = aux->sig;
		free(aux);
	}

	free(e);
}


void Enemigos_Inserta(Enemigos e, Imagen i, int x, int y, int w, int h, int vx, int vy) {
	Enemigos aux = malloc(sizeof(struct EnemigosRep));
	aux->e = Enemigo_Crea(i, x, y, w, h, vx ,vy);
	aux->sig = e->sig;
	e->sig = aux;
}


void Enemigos_Mueve(Enemigos e) {
	while (e->sig != NULL) {
		Enemigo_Mueve(e->sig->e);
		e = e->sig;
	}
}


void Enemigos_Dibuja(Enemigos e) {
	while (e->sig != NULL) {
		Enemigo_Dibuja(e->sig->e);
		e = e->sig;
	}
}


int Enemigos_Colision(Enemigos e, int x, int y, int w, int h) {
	while (e->sig != NULL && !Colision(Enemigo_X(e->sig->e), Enemigo_Y(e->sig->e), Enemigo_W(e->sig->e), Enemigo_H(e->sig->e), x, y, w, h) ) e = e->sig;
	int colision = (e->sig!=NULL);
	if (colision) {
        Enemigos aux = e->sig;
        e->sig = e->sig->sig;
        Enemigo_Libera(aux->e);
        free(aux);
    }
	return colision;
}
