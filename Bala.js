




class Bala {
	x;y;vy;
}


function Bala_Crea(x, y, vy) {
	let b = new Bala();

	b.x = x;	// Personaje
	b.y = y;	// Personaje
	b.vy = vy;

	return b;
}


function Bala_Libera(b) {

}


function Bala_Mueve(b) {
	b.y = b.y - b.vy;
}


function Bala_Dibuja(b) {
	Pantalla_DibujaCirculo(b.x, b.y, 1);
}


function Bala_FueraDeRango(b) {
	return (b.y < 0);
}


function Bala_X(b) {
	return b.x;
}


function Bala_Y(b) {
	return b.y;
}
