window.onload = function(){
	var date = new Date();
	document.cookie = "isDing=true; expries="+date.toGMTString()+"path=/";
	var allCookie = document.cookie;
	if(allCookie === ""){
		doDing();
		return;
	}

	var cookies = allCookie.split("; ");
	var uname = "";
	var value = "";
	for(var i=0; i < cookies.length; i++){
		uname = cookies[i].substring(0, indexOf(cookies[i], "="));
		value = cookies[i].substring(indexOf(cookies[i], "=")+1);
		if(uname === "isDing" && value === "true"){
			return;
		}
	}
	doDing();
}

function setCookie(uname, value, date, expires){

}

function isExistCookie(){

}

function doDing(){
	alert("haha");
	document.cookie = "isDing=true";
}