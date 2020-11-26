
let obtenerResultado = (valores) => {
	let resultado = 0;
	valores.split('+').forEach(datos => resultado += parseInt(datos));
	return resultado;
}

module.exports = { obtenerResultado };
