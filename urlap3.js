function mailcheck() {
		var reg = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
		var s = document.getElementById('email').value;
		var reg1 = /^[0-9a-z\.-]{6}/;
		var s1= document.getElementById('nev').value;
		alert(reg1.test(s1)&& reg.test(s));
	
  }

  function send() {
	  alert("Sikeresen elküldted a lapod!")
}
  function cigiar() {
	  var ar = document.getElementById('ar').value
	  var db = document.getElementById('db').value
	  alert("Heti költség: " + (db * (ar/20)).toFixed(0) * 7 + " FT\n" + "Havi költség: " + (db * (ar/20)).toFixed(0) * 30 + " FT\n" + "Évi költség: " + (db * (ar/20)).toFixed(0) * 365 + " FT")
}

