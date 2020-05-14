
function validate() {
	var input = document.getElementById("psw").value;
	input = input.toLowerCase();	
	var answer = "dan's abs";
	var n = answer.localeCompare(input);
	if (n == 0)  {
		 location.href = ("success.html");
	} else {
		 location.href = ("failure.html");
		
	}
	
	
	
}