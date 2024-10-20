#ifndef __BALA_H
#define __BALA_H

/**
	\file Bala.h
	\author Camilo Caparrós Laiz
*/

/**
	\brief TDA Bala
*/
typedef struct BalaRep * Bala;


/**
	\brief Crea una bala.
	\param x Coordenada x de la bala.
	\param y Coordenada y de la bala.
	\param vy Velocidad vertical de la bala.
	\return Bala.
*/
Bala Bala_Crea(int x, int y, int vy);


/**
	\brief Libera de la memoria la estructura de la bala.
	\param b Bala a liberar.
*/
void Bala_Libera(Bala b);


/**
	\brief Mueve la bala. Sólo tiene movimiento vertical ascendente.
	\param b Bala a mover.
*/
void Bala_Mueve(Bala b);


/**
	\brief Renderiza la bala en su posición actual.
	\param b Bala a renderizar.
*/
void Bala_Dibuja(Bala b);


/**
	\brief Detecta si una bala está fuera de los límites.
	\param b Bala a detectar.
	\return 1 Si está fuera de los límite.
	\return 0 Si no está fuera de los límites
*/
int Bala_FueraDeRango(Bala b);


/**
	\brief Recupera la coordenada x de la bala.
	\param b Bala de la cual queremos recuperar información.
	\return Coordenada x de la bala.
*/
int Bala_X(Bala b);


/**
	\brief Recupera la coordenada y de la bala.
	\param b Bala de la cual queremos recuperar información.
	\return Coordenada y de la bala.
*/
int Bala_Y(Bala b);

#endif
