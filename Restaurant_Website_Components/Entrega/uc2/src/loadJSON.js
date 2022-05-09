fs = require('fs');

loadJSON = function(file){
	try{
		obj = JSON.parse(fs.readFileSync(file, 'utf8'));
		return obj;
	}
	catch(err){console.log("erro na leitura do JSON")}
}

module.exports = loadJSON;