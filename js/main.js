var request = new XMLHttpRequest();
request.open("GET", "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?api_key=b38114a0-1167-4959-8137-98e9e3103f8c", true);

request.onload = function() {
	var responseJSONData = JSON.parse(request.responseText);
	document.getElementById("test").innerHTML = responseJSONData.data.Aatrox.id;
}

request.onerror = function() {
	console.log("Connection Error");
}

request.send();