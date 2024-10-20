#include "Miscelanea.h"
#include <math.h>

double RAD(double factor, double var) {
		var = var + (factor*M_PI/180);
		if (var >= 2*M_PI) var = var - 2*M_PI; // Evita desboradmiento.
		
	return var;
}