#include <stdlib.h>
#include "Municion.h"
#include "Bala.h"
#include "Enemigos.h"

struct MunicionRep {
	Bala b;
	Municion sig;
};

Municion Municion_Crea() {
	Municion m = malloc(sizeof(struct MunicionRep));
	m->sig = NULL;

	return m;
}


void Municion_Libera(Municion m) {
	while (m->sig != NULL) {
		Municion aux = m->sig;
		Bala_Libera(aux->b);
		m->sig = aux->sig;
		free(aux);
	}

	free(m);
}


void Municion_Dispara(Municion m, int x, int y, int vy) {
	Municion aux = malloc(sizeof(struct MunicionRep));
	aux->b = Bala_Crea(x, y, vy);
	aux->sig = m->sig;
	m->sig = aux;
}


void Municion_Mueve(Municion m) {
	while (m->sig != NULL) {
		Bala_Mueve(m->sig->b);
		if (Bala_FueraDeRango(m->sig->b)) {
			Municion aux = m->sig;
			m->sig = m->sig->sig;
			Bala_Libera(aux->b);
			free(aux);
		}
		
		else {
			m = m->sig;
		}
	}
}


void Municion_Dibuja(Municion m) {
	while (m->sig != NULL) {
		Bala_Dibuja(m->sig->b);
		m = m->sig;
	}
}


int Municion_Colision(Municion m, Enemigos e) {
    int colisiona = 0;
    while (m->sig != NULL) {
        if (Enemigos_Colision(e, Bala_X(m->sig->b), Bala_Y(m->sig->b), 4, 4)) {
                Municion aux = m->sig;
                m->sig = m->sig->sig;
                Bala_Libera(aux->b);
                free(aux);
                colisiona++;
        }
        else m = m->sig;
    }
    return colisiona;
}
