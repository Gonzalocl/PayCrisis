#ifndef __ESTRELLAS_H
#define __ESTRELLAS_H


#include "Pantalla.h"


/**
	\file Estrellas.h
	\author Camilo Caparrós Laiz
*/

/**
	\brief TDA Estrellas
*/
typedef struct EstrellasRep * Estrellas;


/**
	\brief Crea un array con un máximo de estrellas.
	\param maximo Número máximo de estrellas, que puede contener.
	\return Array de estrellas.
*/
Estrellas Estrellas_Crea(int maximo);


/**
	\brief Libera el array de estrellas.
	\pre Todas las estrellas deben estar ordenadas al lado izquierdo.
	\param e Array de estrellas.
*/
void Estrellas_Libera(Estrellas e);


/**
	\brief Renderiza todas las estrellas existentes en el array.
	\pre Todas las estrellas deben estar ordenadas al lado izquierdo.
	\param e Array de estrellas.
*/
void Estrellas_Dibuja(Estrellas e);


/**
	\brief Vacía las celdas del array para su correcto funcionamiento.
	\param e Array de estrellas.
*/
void Estrellas_Inicializa(Estrellas e);


/**
	\brief Detecta si el personaje a colisionado con alguna estrella.
	\param e Array de estrellas.
	\param x Coordenada x del personaje.
	\param y Coordenada y del personaje.
	\param w Anchura del personaje.
	\param h Altura del personaje.
	\return Número estrellas con las que colisiona

*/
int  Estrellas_Colision(Estrellas e, int x, int y, int w, int h);


/**
	\brief Inserta una estrella al final del array.
	\pre Todas las estrellas deben estar ordenadas al lado izquierdo.
	\param e Array de estrellas.
	\param i Imagen de la estrella.
	\param x Coordenada x de la estrella.
	\param y Coordenada y de la estrella.
	\param w Anchura de la estrella.
	\param h Altura de la estrella.
*/
void Estrellas_Inserta(Estrellas e, Imagen i,int x, int y, int w, int h);

#endif
