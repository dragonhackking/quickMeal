window.onload = function(){
	var allCookie = document.cookie;
	if(allCookie === ""){
		doDing();
		return;
	}

	var cookies = allCookie.split("; ");
	var uname;
	var value;
	var temp;
	for(var i=0; i < cookies.length; i++){
		temp = cookies[i].split("=");
		uname = temp[0];
		value = temp[1];
		if(uname === "isDing" && value === "true"){
			return;
		}
	}
	doDing();
}

function doDing(){
	alert("haha");
	setCookie("isDing", "true");
}

/**
 * 在此setCookie只用name,value属性.
 */
function setCookie(name, value){
	document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
}