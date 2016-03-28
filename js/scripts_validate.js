// "Validate your fancy forms
// - ensure that all
// required fields are 
// filled out (.val() not empty)
// - ensure all paswords
// are at least 8 chars
// - ensure all passwords
// have one uppercase
// and one number.
// Use jQuery or native JS"
var validator;
var validatePasswords;
var missingFields = false;
$(document).ready(function(){
	$("input[type='submit']").click(function(){
		if($("input[type='checkbox']").is(":checked")){
			console.log("checked");
			validator = checkFields();
			console.log(validator);
		}
		else{
			console.log("box not checked");
			$(".errors").html = "box not checked";
		}
	});

});

function checkFields(){
	$("input").each(function(){
		if($(this).val() === "") {
			console.log(this.name+" is missing a value");
			return false;
		}
	});
	validatePasswords = checkPasswords();
	return validatePasswords;
}

function checkPasswords(){
	pass1 = $("input[name='password']")
	pass2 = $("input[name='comfirmPassword']")
	if(pass1 === pass2){
		console.log("passwords match");
		if(pass1.length > 7){
			console.log("has at least 8 characters");
			if(pass1.toUppercase !== pass1 && pass1.toLowercase !== pass1){
				console.log("has at least one uppercase and one lowercase");
				for(var i = 0; i < pass1.length; i++){
					if(pass1[i] === NaN){
						passHasString = true;
					}
					else if(pass1[i] !== NaN){
						passHasNum = true;
					}
				}	
				if(passHasString == true && passHasNum ==true){
					return true;
				}
				else	{
					console.log("password doesnt have at least one number and one letter");
					return false;
				}		
				
			}
		}
		else	{
			console.log("password isn't at least 8 characters long");
			return false;
		}
	}
	else	{
		console.log("passwords don't match");
		return false;
	}
}

