


function Colision(x1, y1, w1, h1, x2, y2, w2, h2) {
	let O1x = x1 + w1/2;
	let O1y = y1 + h1/2;
	let r1 = h1/2;
	
	let O2x = x2 + w2/2;
	let O2y = y2 + h2/2;
	let r2 = h2/2;
	
	return (Math.sqrt( Math.pow(O1x - O2x, 2) + Math.pow(O1y - O2y, 2) ) < r1 + r2);
}