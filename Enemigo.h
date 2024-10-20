#ifndef __ENEMIGO_H
#define __ENEMIGO_H

#include "Pantalla.h"

/**
	\file Enemigo.h
	\author Camilo Caparrós Laiz
*/

/**
	\brief TDA Enemigo
*/
typedef struct EnemigoRep * Enemigo;


/**
	\brief Crea un enemigo.
	\param i Imagen del enemigo.
	\param x Coordenada x del enemigo, con origen en la esquina superior izquierda.
	\param y Coordenada y del enemigo, con origen en la esquina superior izquierda.
	\param w Anchura del enemigo.
	\param h Altura del enemigo.
	\param vx Velocidad en el eje x.
	\param vy Velocidad en el eje y.
	\return Enemigo.
*/
Enemigo Enemigo_Crea(Imagen i, int x, int y, int w, int h, int vx, int vy);


/**
	\brief Libera de la memoria la estructura del enemigo.
	\param e Enemigo a liberar.
*/
void Enemigo_Libera(Enemigo e);


/**
	\brief Define el movimiento del enemigo, movimiento rectilíneo. Cada vez que choque con los límites, cambiará de dirección.
	\param e Enemigo a mover.
*/
void Enemigo_Mueve(Enemigo e);


/**
	\brief Renderiza el enemigo en su posición actual.
	\param e Enemigo a renderizar.
*/
void Enemigo_Dibuja(Enemigo e);


/**
	\brief Recupera la coordenada x del enemigo.
	\param e Enemigo del cual queremos recuperar información.
	\return Coordenada x del enemigo.
*/
int Enemigo_X(Enemigo e);


/**
	\brief Recupera la coordenada y del enemigo.
	\param e Enemigo del cual queremos recuperar información.
	\return Coordenada y del enemigo.
*/
int Enemigo_Y(Enemigo e);


/**
	\brief Recupera la anchura del enemigo.
	\param e Enemigo del cual queremos recuperar información.
	\return Anchura del enemigo.
*/
int Enemigo_W(Enemigo e);


/**
	\brief Recupera la altura del enemigo.
	\param p Enemigo del cual queremos recuperar información.
	\return Altura del enemigo.
*/
int Enemigo_H(Enemigo e);


#endif
