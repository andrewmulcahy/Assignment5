function updateJSON(){
var jReq = new XMLHttpRequest();
jReq.open('GET', 'https://andrewmulcahy.github.io/Assignment5/degrees.json');
jReq.onload = function() {
	var jsonObj = JSON.parse(jReq.responseText);
	var jData = jsonObj.degree;
	var degree = document.getElementById("degree");


	for(i = 0; i < jData.length; i++){
		var row = degree.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);

		cell1.innerHTML = jData[i].school;
		cell2.innerHTML = jData[i].major;
		cell3.innerHTML = jData[i].type;
		cell4.innerHTML = jData[i].year;}

	document.getElementById("button").classList.add("hideButton");};

	document.getElementById("refresh").innerHTML = "Data is refreshed.";

jReq.send();
}

