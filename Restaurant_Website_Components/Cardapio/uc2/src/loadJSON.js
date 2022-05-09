fs = require('fs');

loadJSON = function(file){
	try{
        obj = JSON.parse(fs.readFileSync(file, 'utf8'));
        console.log(obj["pratos"]);
		return obj["pratos"];
	}
	catch(err){console.log("DB vazio")}
}

module.exports = loadJSON;