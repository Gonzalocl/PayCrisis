#include "Colision.h"
#include <math.h>

int Colision(int x1, int y1, int w1, int h1, int x2, int y2, int w2, int h2) {
	int O1x = x1 + w1/2;
	int O1y = y1 + h1/2;
	int r1 = h1/2;
	
	int O2x = x2 + w2/2;
	int O2y = y2 + h2/2;
	int r2 = h2/2;
	
	return (sqrt( pow(O1x - O2x, 2) + pow(O1y - O2y, 2) ) < (double) r1 + r2);
}