#include "Pantalla.h"
#include "Personaje.h"
#include "Enemigos.h"
#include "Municion.h"
#include "Estrellas.h"
#include "Miscelanea.h"

#include <math.h>
#include <stdlib.h>
#include <time.h>
#include <stdio.h>

#define PANT_W 800
#define PANT_H 480
#define FPS 30
#define P_W 25
#define P_H 25
#define ES_W 24
#define ES_H 23
#define EN_W 25
#define EN_H 18

/**
	\mainpage La aplicación es una versión modificada del antiguo videojuego Space Invaders.
	Nuestro personaje es una nave espacial que tendrá que ir colectando estrellas y
	eliminando todos los enemigos que pueda para aumentar su puntuación.
*/


int main(int argc, char* argv[]) {
	// Inicio y Carga
	srand(time(NULL));
	Pantalla_Crea("PayCrisis", 800, 480);

	Imagen img0 = Pantalla_ImagenLee("Inicio.bmp", 255);
	Imagen img1 = Pantalla_ImagenLee("Spacex.bmp", 255);
	Imagen img_player = Pantalla_ImagenLee("Player.bmp", 255);
	Imagen img_enemy = Pantalla_ImagenLee("Enemy.bmp", 255);
	Imagen img_star = Pantalla_ImagenLee("Star.bmp", 255);

	// Creacion de Estructuras
	Personaje player = Personaje_Crea(img_player, rand() % (PANT_W - P_W), PANT_H - P_H, P_W, P_H );
	Estrellas stars = Estrellas_Crea(20);
	Enemigos enemies = Enemigos_Crea();
	Municion ammo = Municion_Crea();


	// 1er evento. Acabado
	double alpha = 0;
	while ( Pantalla_Activa() && !Pantalla_TeclaPulsada(SDL_SCANCODE_SPACE)) {
		// Renderizado
		Pantalla_DibujaImagen(img0, 0, 0, PANT_W, PANT_H);

		Pantalla_ColorTrazo(206, 206, 206, 128 + 127*sin(alpha));
		alpha = RAD(5, alpha);
		Pantalla_DibujaTexto("Pulsa [SPACE]", PANT_W/2 - 55, 3*PANT_H/5);

		Pantalla_Actualiza();
		Pantalla_Espera(FPS);
	}

	// Borrado
	Pantalla_DibujaRellenoFondo(0,0,0,0);


	// 2o Evento
	int t0 = time(NULL);// Tiempo en el instante en el que empezo el evento
	int t1;				// Tiempo al inicio del evento
	int dt = 0;			// Diferencia entre t0 y t1: Tiempo pasado desde que empezo el evento

	int puntos = 0;		// Puntos al coger estrellas
	int muertes = 0;	// Puntos al matar enemigos
	char puntuacion[40];// Cadena para imprimir el total de puntos: dt = dt + puntos + muertes
	int salir = 0;		// Condicion de salida. Si choca contra un enemigo
	int controlMunicion = 0;	// Control Municion

	Estrellas_Inicializa(stars);
	while ( Pantalla_Activa() && !Pantalla_TeclaPulsada(SDL_SCANCODE_RETURN) && !salir) {
		t1 = time(NULL);
		dt = t1 - t0 + puntos + muertes;
		sprintf(puntuacion, "%d", dt);

		// Control del Usuario y Enemigo
		Personaje_Mueve(player);
		Enemigos_Mueve(enemies);
		Municion_Mueve(ammo);

		// Insertar Balas
		if ( Pantalla_TeclaPulsada(SDL_SCANCODE_SPACE) ) {
			if (controlMunicion == 1) {
				Municion_Dispara(ammo, Personaje_X(player) + 12, Personaje_Y(player), 8);
				controlMunicion = 0;
			}
		}
		else {controlMunicion = 1;}

        if (rand() % 50 == 0) Estrellas_Inserta(stars, img_star, rand() % (PANT_W - ES_W), rand() % (PANT_H - ES_H), ES_W, ES_H);
        if (rand() % 100 == 0) Enemigos_Inserta(enemies, img_enemy, rand() % (PANT_W - EN_W), 0, EN_W, EN_H, -6 + (rand() % 13), -6 + (rand() % 13));

		// Colisiones
		puntos = puntos + 5*Estrellas_Colision(stars, Personaje_X(player), Personaje_Y(player), Personaje_W(player), Personaje_H(player));
		muertes = muertes + 10*Municion_Colision(ammo, enemies);
		salir = Enemigos_Colision(enemies, Personaje_X(player), Personaje_Y(player), Personaje_W(player), Personaje_H(player));

		// Renderizado
		Pantalla_DibujaImagen(img1, 0, 0, PANT_W, PANT_H);
		Personaje_Dibuja(player);
		Estrellas_Dibuja(stars);
		Enemigos_Dibuja(enemies);
		Municion_Dibuja(ammo);

		// Textos
		Pantalla_ColorTrazo(255, 255, 255, 255);
		Pantalla_DibujaTexto(puntuacion, 0, 0);
		Pantalla_DibujaTexto("Pulsa [INTRO] para pasar finalizar", 0, PANT_H - 14);


		Pantalla_Actualiza();
		Pantalla_Espera(FPS);
	}

	// Borrado
	Pantalla_DibujaRellenoFondo(15,15,15,15);

	// Guardar Partida
	FILE* f = fopen("Puntuacion.txt", "r");
	int record = 0;
	if (f != NULL)
    {
        fscanf(f, "%d", &record);
        fclose(f);
    }

	if (dt > record) {
		f = fopen("Puntuacion.txt", "w");
		fprintf(f, "%d", dt);
		fclose(f);
	}

	// Pantalla final
	// Imprimir puntuacion, numero de estrellas, enemigos y tiempo real
	char tiempo[40];
	char n_estrellas[40];
	char n_enemigos[40];

	sprintf(tiempo, "%d", dt - puntos - muertes);
	sprintf(n_estrellas, "%d", puntos/5);
	sprintf(n_enemigos, "%d", muertes/10);
	while ( Pantalla_Activa() && !Pantalla_TeclaPulsada(SDL_SCANCODE_ESCAPE)) {

		Pantalla_ColorTrazo(255, 255, 255, 255);
		Pantalla_DibujaTexto("Puntuacion:", PANT_W/2 - 120, PANT_H/2 - 56);
		Pantalla_DibujaTexto(puntuacion, PANT_W/2 - 10, PANT_H/2 - 56);

		Pantalla_DibujaTexto("Estrellas:", PANT_W/2 - 111, PANT_H/2 - 42);
		Pantalla_DibujaTexto(n_estrellas, PANT_W/2 - 10, PANT_H/2 - 42);

		Pantalla_DibujaTexto("Enemigos:", PANT_W/2 - 102, PANT_H/2 - 28);
		Pantalla_DibujaTexto(n_enemigos, PANT_W/2 - 10, PANT_H/2 - 28);

		Pantalla_DibujaTexto("Tiempo:", PANT_W/2 - 84, PANT_H/2 - 14);
		Pantalla_DibujaTexto(tiempo, PANT_W/2 - 10, PANT_H/2 - 14);

		Pantalla_DibujaTexto("Pulsa [ESC] para pasar salir", 0, PANT_H - 14);

		// En caso de Record
		if (dt > record) {
			// Imprimir Record
			Pantalla_ColorTrazo(255, 255, 255, 255);
			Pantalla_DibujaTexto("!Has superado tu Record!", PANT_W/2 - 120, PANT_H/2 + 14);
		}

		Pantalla_Actualiza();
		Pantalla_Espera(FPS);
	}

	// Liberar Estructuras
	Personaje_Libera(player);
	Estrellas_Libera(stars);
	Enemigos_Libera(enemies);
	Municion_Libera(ammo);
	// Liberar Ventana e Imagenes
	Pantalla_ImagenLibera(img0);
	Pantalla_ImagenLibera(img1);
	Pantalla_ImagenLibera(img_player);
	Pantalla_ImagenLibera(img_enemy);
	Pantalla_ImagenLibera(img_star);
	Pantalla_Libera();

	return 0;
}
