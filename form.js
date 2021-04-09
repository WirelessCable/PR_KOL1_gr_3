mail = document.querySelector('.email');
topic = document.querySelector('.topic');
message = document.querySelector('.message');
ok = document.querySelector('.send');
restart = document.querySelector('.restart');
licznik = 0;

ok.onclick = function(){
	adres = document.querySelector('.adres').value;
	temat = document.querySelector('.temat').value;
	wiadomosc = document.querySelector('.wiadomosc').value;
	
	mail.innerHTML = adres;
	topic.innerHTML = temat;
	message.innerHTML = wiadomosc;
	
	document.querySelector('.result').style.visibility = "visible";
	
	licznik++;
	document.querySelector('.licznik').innerHTML = licznik;
}

restart.onclick = function(){
	document.querySelector('.result').style.visibility = "hidden";
}