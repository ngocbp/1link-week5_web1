function convert(inp) {
	var outString = "";

	function convertDate(DateInput){
	if(isNaN(DateInput)){
		dInp = DateInput;
	}else{
		dInp = parseInt(DateInput);
			dInp= dInp;
	}
	
	var d = new Date(dInp);
	var curr_date = d.getDate();
	var curr_month = d.getMonth() + 1;
	var curr_year = d.getFullYear();
	var curr_hour = d.getHours();
	var curr_min = d.getMinutes();
	var curr_sec = d.getSeconds();

	function checkCurr(i){
		if (i<10){
			i = "0"+i;
		}
		return i;
	}

	var curr_date_format = checkCurr(curr_date)+"/"+checkCurr(curr_month)+"/"+curr_year+" "+checkCurr(curr_hour)+":"+checkCurr(curr_min)+":"+checkCurr(curr_sec);
	return curr_date_format;
}
	var arrInp = inp.split("\n");
	for(i=0; i<arrInp.length; i++){
		if(arrInp[i]!=""){
			outString += convertDate(arrInp[i]);
			outString+="<br/>";
		}
	}

	document.getElementById("output").innerHTML=outString;
}
var text = (new Date().getTime()/100);
document.write(text);