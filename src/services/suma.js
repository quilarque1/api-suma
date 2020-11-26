const  { obtenerResultado } = require('../utils/suma');
const { sumaDto } = require('../dto/sumaDto');

class SumaService {

	getSuma(operacion) {
		let resultado = obtenerResultado(operacion)
		console.log('Resultado de la Operacion: ', resultado)
		return sumaDto(operacion, resultado) || {};
	}
}

module.exports = SumaService;
