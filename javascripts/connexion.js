




function validate(){
	var xhr = new XMLHttpRequest();


var email = document.getElementById("email").value;
//var email = encodeURIComponent(document.getElementById("email"));
var password = document.getElementById("password").value;
//var password = encodeURIComponent(document.getElementById("password"));
console.log(email)

//xhr.onload = reqListener;


xhr.open('post', "http://nl1-ss1.a2hosting.com:49152/api/login", false);
console.log("helooo");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() {//Call a function when the state changes.
    if(xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText);
    }
}
xhr.send("email="+email+"&password="+password);
//xhr.onload = reqListener;

 

}

/*function reqListener () {
  console.log("dkfds"+this.responseText);
}
*/














