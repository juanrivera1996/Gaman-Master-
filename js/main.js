window.onload = init;
function init (){

	// Nav 
	document.getElementById("loadp").style.display = "block";

	var time = document.getElementById("time");
	setTimeout(()=>{document.getElementById("loadp").style.display = "none"; document.getElementById("menup").style.display = "block";},5000);

	var jugarButton = document.getElementById("jugar1Button");
	jugarButton.addEventListener('click', navigate('menup', 'level1p'));

	var instruccionesButton = document.getElementById("jugar2Button");
	instruccionesButton.addEventListener('click', navigate('menup', 'game2p'));

	var creditosButton = document.getElementById("creditosButton");
	creditosButton.addEventListener('click', navigate('menup', 'creditp'));

	var lvl1Button = document.getElementById("lvl1Button");
	lvl1Button.addEventListener('click', navigate('level1p', 'game1p'));
	
	var levelpBackButton = document.getElementById("levelpBackButton");
	levelpBackButton.addEventListener('click', navigate('level1p', 'menup'));

    var levelpHomeButton = document.getElementById("levelpHomeButton");
	levelpHomeButton.addEventListener('click', navigate('level1p', 'menup'));

	var levelpBackButtonlvl = document.getElementById("levelpBackButtonlvl");
	levelpBackButtonlvl.addEventListener('click', navigate('game1p', 'level1p'));

	var levelpHomeButtonlvl = document.getElementById("levelpHomeButtonlvl");
	levelpHomeButtonlvl.addEventListener('click', navigate('game1p', 'menup'));

	var levelpBackButtonGame2 = document.getElementById("levelpBackButtonGame2");
	levelpBackButtonGame2.addEventListener('click', navigate('game2p', 'menup'));
    
    var levelpHomeButtonGame2 = document.getElementById("levelpHomeButtonGame2");
	levelpHomeButtonGame2.addEventListener('click', navigate('game2p', 'menup'));

	var creditpBackButton = document.getElementById("creditpBackButton");
	creditpBackButton.addEventListener('click', navigate('creditp', 'menup'));

    
    var creditpHomeButton = document.getElementById("creditpHomeButton");
	creditpHomeButton.addEventListener('click', navigate('creditp', 'menup'));
}


function show (id) {
	document.getElementById(id).style.display = "block";
}

function hide (id) {
	document.getElementById(id).style.display = "none";
}

var navigate = function(actual, next) {
	return function () {
		hide(actual);
		show(next);
	}
}

const cards = document.querySelectorAll('.box');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));