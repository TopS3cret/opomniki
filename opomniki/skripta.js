window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	var prijavi = function() {
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.display = "none";
	}
	document.querySelector("#prijavniGumb").addEventListener("click", prijavi);
	
	var dodaj_opomnik = function() {
		var naziv = document.querySelector("#naziv_opomnika").value;
		var cas = document.querySelector("#cas_opomnika").value;
		
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		
		var op = document.querySelector("#opomniki");
		
		op.innerHTML = op.innerHTML + 
			"<div class='opomnik'> \
	            <div class='naziv_opomnika'>" + naziv + "</div> \
	            <div class='cas_opomnika'> Opomnik čez <span>" + cas + "</span> sekund.</div> \
			</div>";
	}
	document.querySelector("#dodajGumb").addEventListener("click", dodaj_opomnik);
});