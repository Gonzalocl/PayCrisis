











const PANT_W = 800
const PANT_H = 480
const FPS = 30
const P_W = 25
const P_H = 25
const ES_W = 24
const ES_H = 23
const EN_W = 25
const EN_H = 18

/**
	\mainpage La aplicación es una versión modificada del antiguo videojuego Space Invaders.
	Nuestro personaje es una nave espacial que tendrá que ir colectando estrellas y
	eliminando todos los enemigos que pueda para aumentar su puntuación.
*/


async function main(argc, argv) {
	// Inicio y Carga

	Pantalla_Crea("PayCrisis", 800, 480);

	let img0 = await Pantalla_ImagenLee("Inicio.bmp", 255);
	let img1 = await Pantalla_ImagenLee("Spacex.bmp", 255);
	let img_player = await Pantalla_ImagenLee("Player.bmp", 255);
	let img_enemy = await Pantalla_ImagenLee("Enemy.bmp", 255);
	let img_star = await Pantalla_ImagenLee("Star.bmp", 255);

	// Creacion de Estructuras
	let player = Personaje_Crea(img_player, rand() % (PANT_W - P_W), PANT_H - P_H, P_W, P_H );
	let stars = Estrellas_Crea(20);
	let enemies = Enemigos_Crea();
	let ammo = Municion_Crea();


	// 1er evento. Acabado
    let alpha = 0;
	function Loop0() { if ( Pantalla_Activa() && !Pantalla_TeclaPulsada(SDL_SCANCODE_SPACE)) {
		// Renderizado
		Pantalla_DibujaImagen(img0, 0, 0, PANT_W, PANT_H);

		Pantalla_ColorTrazo(206, 206, 206, 128 + 127*Math.sin(alpha));
		alpha = RAD(5, alpha);
		Pantalla_DibujaTexto("Pulsa [SPACE]", PANT_W/2 - 55, 3*PANT_H/5);

		Pantalla_Actualiza();
		setTimeout(Loop0, FPS);
	} else {

	// Borrado
	Pantalla_DibujaRellenoFondo(0,0,0,0);


	// 2o Evento
	let t0 = time();	// Tiempo en el instante en el que empezo el evento
	let t1;				// Tiempo al inicio del evento
	let dt = 0;			// Diferencia entre t0 y t1: Tiempo pasado desde que empezo el evento

	let puntos = 0;		// Puntos al coger estrellas
	let muertes = 0;	// Puntos al matar enemigos
	let puntuacion;		// Cadena para imprimir el total de puntos: dt = dt + puntos + muertes
	let salir = 0;		// Condicion de salida. Si choca contra un enemigo
	let controlMunicion = 0;	// Control Municion

	Estrellas_Inicializa(stars);
	function Loop1() { if ( Pantalla_Activa() && !Pantalla_TeclaPulsada(SDL_SCANCODE_RETURN) && !salir) {
		t1 = time();
		dt = t1 - t0 + puntos + muertes;
		puntuacion = dt;

		// Control del Usuario y Enemigo
		Personaje_Mueve(player);
		Enemigos_Mueve(enemies);
		Municion_Mueve(ammo);

		// Insertar Balas
		if ( Pantalla_TeclaPulsada(SDL_SCANCODE_SPACE) ) {
			if (controlMunicion === 1) {
				Municion_Dispara(ammo, Personaje_X(player) + 12, Personaje_Y(player), 8);
				controlMunicion = 0;
			}
		}
		else {controlMunicion = 1;}

        if (rand() % 50 === 0) Estrellas_Inserta(stars, img_star, rand() % (PANT_W - ES_W), rand() % (PANT_H - ES_H), ES_W, ES_H);
        if (rand() % 100 === 0) Enemigos_Inserta(enemies, img_enemy, rand() % (PANT_W - EN_W), 0, EN_W, EN_H, -6 + (rand() % 13), -6 + (rand() % 13));

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
		setTimeout(Loop1, FPS);
	} else {

	// Borrado
	Pantalla_DibujaRellenoFondo(15,15,15,15);

	// Guardar Partida
	let f = getCookie("puntuacion");
	let record = 0;
	if (f !== undefined)
    {
		record = f;

    }

	if (dt > record) {

		setCookie("puntuacion", dt, 31536000);

	}

	// Pantalla final
	// Imprimir puntuacion, numero de estrellas, enemigos y tiempo real
	let tiempo;
	let n_estrellas;
	let n_enemigos;

	tiempo = dt - puntos - muertes;
	n_estrellas = puntos/5
	n_enemigos = muertes/10;
	function Loop2() { if ( Pantalla_Activa() && !Pantalla_TeclaPulsada(SDL_SCANCODE_ESCAPE)) {

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
		setTimeout(Loop2, FPS);
	} else {

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
	Pantalla_Libera(); }} Loop2(); }} Loop1(); }} Loop0();

	return 0;
}
