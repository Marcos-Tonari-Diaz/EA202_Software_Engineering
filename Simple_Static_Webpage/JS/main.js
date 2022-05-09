//cuidam das interacoes dos links
function underliner(id){
	id.style.textDecoration = "underline";
}

function removeUnderliner(id){
	id.style.textDecoration = "none";
}

function clickedColor(id){
	id.style.color = "DarkRed";	
} 

// recarrega a pagina
function reload(){
	location.reload();
}

//insere todos os semestres possiveis como opcao
function populateSem() {
	var dropDown = document.getElementById("sem");
	var i;
	var sem1;
	var sem2;
	var option1;
	var option2;
	option1 = document.createElement("option");
	option2 = document.createElement("option");
	option1.text = "2020/1";
	option2.text = "2020/2*";
	dropDown.add(option2);
	dropDown.add(option1);
	for (i=2019; i>1961; i--){
		sem1 = i.toString().concat("/1");
		sem2 = i.toString().concat("/2");
		option1 = document.createElement("option");
		option2 = document.createElement("option");
		option1.text = sem1;
		option2.text = sem2;
		dropDown.add(option2);
		dropDown.add(option1);
	}
}

//valida os forms
function validateForm(){
	var i;
	var empty=0;
	// para cada input do forms
	var elementsList = document.forms.elements;
	for (i=0; i < elementsList.length; i++){
		if (elementsList[i].value===""){
			alert("O campo ".concat(elementsList[i].name.toString().toUpperCase()).concat(" não pode ficar em branco"));
			empty=1;
		}
	}
	if (empty==0){
		alert("Formulário submetido com sucesso");	
	}
	return true;
}
