#ifndef __ENEMIGOS_H
#define __ENEMIGOS_H

#include "Pantalla.h"

/**
	\file Enemigos.h
	\author Camilo Caparrós Laiz
*/

/**
	\brief TDA Enemigos
*/
typedef struct EnemigosRep * Enemigos;


/**
	\brief Crea una lista enlazada de un número indefinido de enemigos.
	\return Lista de enemigos.
*/
Enemigos Enemigos_Crea();


/**
	\brief Libera de la memoria la lista enlazada.
	\param e Lista enlazada de enemigos.
*/
void Enemigos_Libera(Enemigos e);


/**
	\brief Inserta un enemigo al principio de la lista enlazada.
	\param e Lista enlazada de enemigos.
	\param i Imagen del enemigo.
	\param x Coordenada x del enemigo.
	\param y Coordenada y del enemigo.
	\param w Anchura del enemigo.
	\param h Altura del enemigo.
	\param vx Velocidad horizontal.
	\param vy Velocidad vertical.
*/
void Enemigos_Inserta(Enemigos e, Imagen i, int x, int y, int w, int h, int vx, int vy);


/**
	\brief Mueve todos los enemigos de la lista enlazada.
	\param e Lista enlazada de enemigos.
*/
void Enemigos_Mueve(Enemigos e);


/**
	\brief Renderiza todos los enemigos de la lista enlazada.
	\param e Lista enlazada de enemigos.
*/
void Enemigos_Dibuja(Enemigos e);


/**
	\brief Comprueba si los enemigos colisionan con el personaje.
	\param e Lista enlazada de enemigos.
	\param x Coordenada x del personaje.
	\param y Coordenada y del personaje.
	\param w Anchura del personaje.
	\param h Altura del personaje.
	\return 1 si algún enemigo ha colisionado con el personaje.
	\return 0 si ningún enemigo ha colisionado con el personaje.
*/
int  Enemigos_Colision(Enemigos e, int x, int y, int w, int h);

#endif

