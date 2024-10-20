#ifndef __COLISION_H
#define __COLISION_H

#include <stdlib.h>



/**
	\file Colision.h
	\author Camilo Caparrós Laiz
*/


/**
	\brief Detecta si 2 objetos han colisionado. Considera áreas circulares.
	\param x1 Coordenada x del primer objeto, con origen en la esquina superior izquierda del mismo.
	\param y1 Coordenada y del primer objeto, con origen en la esquina superior izquierda del mismo.
	\param w1 Anchura del primer objeto.
	\param h1 Altura del primer objeto.
	\param x2 Coordenada x del segundo objeto, con origen en la esquina superior izquierda del mismo.
	\param y2 Coordenada y del segundo objeto, con origen en la esquina superior izquierda del mismo.
	\param w2 Anchura del segundo objeto.
	\param h2 Altura del segundo objeto.
	\return 1 Si colisionan.
	\return 0 Si no colisionan.
*/
int Colision(int x1, int y1, int w1, int h1, int x2, int y2, int w2, int h2);


#endif