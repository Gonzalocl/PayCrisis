#ifndef __MUNICION_H
#define __MUNICION_H

#include "Enemigos.h"




/**
	\file Municion.h
	\author Camilo Caparrós Laiz
*/

/**
	\brief TDA Municion
*/
typedef struct MunicionRep * Municion;


/**
	\brief Crea una lista enlazada con un número indefinido de balas.
	\return Lista de Balas.
*/
Municion Municion_Crea();


/**
	\brief Libera de la memoria la lista de balas.
	\param m Lista de balas.
*/
void Municion_Libera(Municion m);


/**
	\brief Inserta balas en el principio de las lista.
	\param m Lista de balas.
	\param x Coordenada x, relativa al personaje.
	\param y Coordenada y, relativa al personaje.
	\param vy Velocidad vertical de la bala.
*/
void Municion_Dispara(Municion m, int x, int y, int vy);


/**
	\brief Mueve verticalmente las balas. Y las elimina si salen de los límites.
	\param m Lista de balas.
*/
void Municion_Mueve(Municion m);


/**
	\brief Renderiza las balas en la posición actual.
	\param m Lista de balas.
*/
void Municion_Dibuja(Municion m);


/**
	\brief Detecta si una bala colisiona con un enemigo y la elimina.
	\param m Lita de Balas.
	\param e Lista de Enemigos.
	\return Numero de Balas que han colsionado.
*/
int Municion_Colision(Municion m, Enemigos e);

#endif
