#ifndef __ESTRELLA_H
#define __ESTRELLA_H

#include "Pantalla.h"


/**
	\file Estrella.h
	\author Camilo Caparrós Laiz
*/

/**
	\brief TDA Estrella
*/
typedef struct EstrellaRep * Estrella;


/**
	\brief Crea una estrella.
	\param i Imagen de la estrella.
	\param x Coordenada x de la estrella, con origen en la esquina superior izquierda.
	\param y Coordenada y de la estrella, con origen en la esquina superior izquierda.
	\param w Anchura de la estrella.
	\param h Altura de la estrella.
	\return Estrella.
*/
Estrella Estrella_Crea(Imagen i, int x, int y, int w, int h);


/**
	\brief Libera de la memoria la estructura de la estrella.
	\param e Estrella a liberar.
*/
void Estrella_Libera(Estrella e);


/**
	\brief Renderiza la estrella en su posición actual.
	\param e Estrella a renderizar.
*/
void Estrella_Dibuja(Estrella e);


/**
	\brief Recupera la coordenada x de la estrella.
	\param e Estrella de la cual queremos recuperar informacion.
	\return Coordenada x de la estrella.
*/
int Estrella_X(Estrella e);


/**
	\brief Recupera la coordenada y de la estrella.
	\param e Estrella de la cual queremos recuperar informacion.
	\return Coordenada y de la estrella.
*/
int Estrella_Y(Estrella e);


/**
	\brief Recupera la anchura de la estrella.
	\param e Estrella de la cual queremos recuperar información.
	\return Anchura del estrella.
*/
int Estrella_W(Estrella e);


/**
	\brief Recupera la altura de la estrella.
	\param p Estrella de la cual queremos recuperar información.
	\return Altura de la estrella.
*/
int Estrella_H(Estrella e);

#endif
