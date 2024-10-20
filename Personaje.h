#ifndef __PERSONAJE_H
#define __PERSONAJE_H

#include <stdlib.h>
#include "Pantalla.h"

/**
	\file Personaje.h
	\author Camilo Caparrós Laiz
*/

/**
	\brief TDA Personaje
*/
typedef struct PersonajeRep * Personaje;

/**
	\brief Crea un personaje.
	\param i Imagen del personaje.
	\param x Coordenada x del personaje, con origen en la esquina superior izquierda.
	\param y Coordenada y del personaje, con origen en la esquina superior izquierda.
	\param w Anchura del personaje.
	\param h Altura del personaje.
	\return Personaje.
*/
Personaje Personaje_Crea(Imagen i, int x, int y, int w, int h);


/**
	\brief Libera de la memoria la estructura personaje.
	\param p Personaje a liberar.
*/
void Personaje_Libera(Personaje p);


/**
	\brief Permite controlar el movimiento del personaje con las teclas. Y limita su espacio.
	\param p Personaje a mover.
*/
void Personaje_Mueve(Personaje p);


/**
	\brief Renderiza el personaje en su posición actual.
	\param p Personaje a renderizar.
*/
void Personaje_Dibuja(Personaje p);


/**
	\brief Recupera la coordenada x del personaje.
	\param p Personaje del cual queremos recuperar información.
	\return Coordenada x del personaje.
*/
int Personaje_X(Personaje p);


/**
	\brief Recupera la coordenada y del Personaje.
	\param p Personaje del cual queremos recuperar información.
	\return Coordenada y del personaje.
*/
int Personaje_Y(Personaje p);


/**
	\brief Recupera la anchura del personaje.
	\param p Personaje del cual queremos recuperar información.
	\return Anchura del personaje.
*/
int Personaje_W(Personaje p);


/**
	\brief Recupera la altura del personaje.
	\param p Personaje del cual queremos recuperar información.
	\return Altura del personaje.
*/
int Personaje_H(Personaje p);

#endif