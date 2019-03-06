
function myFunction()
{

    var nom = document.getElementById('nom');
    var prenom = document.getElementById('prenom');
    var age = document.getElementById('age');
    var mdp = document.getElementById('mdp');
    var mdpconf = document.getElementById('mdpconf');
    var reset = document.getElementById('reset');
    var nomvalid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
    var agevalid = /\D/;
    var mdpvalid = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    nom.addEventListener('input', verifnom);
    prenom.addEventListener('input', verifprenom);
    age.addEventListener('input', verifAge);
    mdp.addEventListener('input', verifmdp);
    mdpconf.addEventListener('input', verifmdpconf);
    reset.addEventListener('click', resetForm);

    function verifnom(event){
        //Si le format de données est incorrect
       if (nomvalid.test(nom.value) == false){
        missnom.textContent="Format Incorrect"
        missnom.style.color = "red";
        nom.style.borderColor="red";
        }
        else {
            missnom.textContent = '';
            missnom.style.color = 'green';
            nom.style.borderColor='green';
        }
    }

    function verifprenom(event){
        //Si le format de données est incorrect
       if (nomvalid.test(prenom.value) == false){
           missprenom.textContent="Format Incorrect"
            missprenom.style.color = "red";
            prenom.style.borderColor="red";
        }else{
            missprenom.textContent = '';
            missprenom.style.color = 'green';
            prenom.style.borderColor='green';
        }
    }

    function verifAge(event)
    {
    if (age.value < 5 || age.value > 140 || age.value.match(agevalid)) {
        missage.textContent="Format Incorrect";
        missage.style.color="red";
        age.style.borderColor="red";
    }
    else if (age.value >= 5 || age.value <= 140) {
        missage.textContent="";
        missage.style.color="green";
        age.style.borderColor="green";
    }
    }

    function verifmdp(event) {
        if (mdp.value.match(mdpvalid)) {
            missmdp.textContent="";
            missmdp.style.color="green";
            mdp.style.borderColor="green";
        }
        else {
            missmdp.textContent="Format Incorrect";
            missmdp.style.color="red";
            mdp.style.borderColor="red";
        }
    }

    function verifmdpconf(event) {
        if (mdpconf.value == mdp.value) {
            missmdpconf.textContent="";
            mdpconf.style.borderColor="green";
        }
        else {
            missmdpconf.textContent="Mots de passe différents";
            missmdpconf.style.color="red";
            mdpconf.style.borderColor="red";
        }
    }
}

function resetForm(event) {
  var champs = document.getElementsByTagName("INPUT");
  for (var i = 0; i < champs.length; i++) {
    if (champs[i].type == "text" || champs[i].type == "password") {
      champs[i].style.borderColor = "initial";
    }
  }
  var spans = document.getElementsByClassName("error");
  for (var i = 0; i < spans.length; i++) {
    spans[i].textContent = "";
  }

  var texte = document.getElementById("stop");
  texte.textContent="";
}

function allchecked() {
	var champs = document.getElementsByTagName("INPUT");
  var para = document.getElementById("stop");
	for(var i = 0; i < champs.length; i++) {
		if(champs[i].type == "text" || champs[i].type == "password") {
			if(champs[i].value == "" || champs[i].style.borderColor == "red") {
				para.textContent="Vérifiez que tous les champs sont corrects et renseignés";
        para.style.color="red";
				return false;
			}
		}
	}

	if(document.getElementById('homme').checked == false && document.getElementById('femme').checked == false) {
		para.textContent="Vérifiez que tous les champs sont corrects et renseignés";
    para.style.color="red";
		return false;
	}

	return true;
}
