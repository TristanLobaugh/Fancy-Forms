# Fancy-Forms

### Created a simple forms using CSS and HTML

## Summary

#### Simple page forms made using CSS, HTML and validation using a combination of native javascript and jQuery.

### Author: Tristan Lobaugh 
+ Github - https://github.com/TristanLobaugh
+ Homepage - http://tristanlobaugh.com

## Screenshots

### Main page:
![alt text](https://raw.githubusercontent.com/TristanLobaugh/fancy_forms/master/img/screen_shot.png)


##Code Examples

### Code to check if all the fields have been filled out
```
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
```

### Code to make sure the password fields have correct syntax and meet the required standards
```
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
```
