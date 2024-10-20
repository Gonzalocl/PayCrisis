#include "Estrellas.h"
#include <stdlib.h>
#include "Estrella.h"
#include "Colision.h"

struct EstrellasRep {
	Estrella* e;
	int n, maximo; // n: no es el Elemento actual es el numero de estrellas en el array
};


Estrellas Estrellas_Crea(int maximo) {
	Estrellas e = malloc(sizeof( struct EstrellasRep ));

	e->e = malloc(maximo * sizeof(Estrella));
	e->n = 0;
	e->maximo = maximo;

	return e;
}


void Estrellas_Libera(Estrellas e) {
	for (int i = 0; i < e->n; i++) {
		Estrella_Libera(e->e[i]);
	}

	free(e->e);
	free(e);
}


void Estrellas_Dibuja(Estrellas e) {
	for (int i = 0; i < e->n; i++) Estrella_Dibuja(e->e[i]);
}

void Estrellas_Inicializa(Estrellas e) {
	for (int i = 0; i < e->maximo; i++) {
		e->e[i] = NULL;
	}
}


int Estrellas_Colision(Estrellas e, int x, int y, int w, int h) {
	int contador = 0;

	for (int i = 0; i < e->n; i++) {
		if ( Colision(Estrella_X(e->e[i]), Estrella_Y(e->e[i]), Estrella_W(e->e[i]), Estrella_H(e->e[i]), x, y, w, h) ) {
			contador++;
			Estrella_Libera(e->e[i]);
			e->e[i] = NULL;
		}
	}
	// Reordeno
	int nulos = contador;
	int i = 0;
	int j = e->maximo - 1;
	while ((j > i) && (nulos != 0)) {
		// Encontramos el Primer NULL
		while ((j > i) && (e->e[i] != NULL)) {

			i++;
		}
		// Encontramos las primera estrella
		while ((j > i) && (e->e[j] == NULL)) {
			j--;
		}
		// En este estado: Hemos encontrado una Estrella o Esta todo ordenado
		if (j > i) {
			e->e[i] = e->e[j];
			e->e[j] = NULL;

		}

		i++;
		j--;
		nulos--;
	}

	e->n = e->n - contador;
	return contador;
}


void Estrellas_Inserta(Estrellas e, Imagen i, int x, int y, int w, int h) {
	if (e->n < e->maximo) {
		e->e[e->n] = Estrella_Crea(i, x, y, w, h);
		e->n++;
	}
}
