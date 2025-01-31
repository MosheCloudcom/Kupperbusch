function addCountryCode() {
	
	var phoneField = loader.engine.document.getElementById(116713948); // phone number
	var formattedPhoneField = loader.engine.document.getElementById(116714160); // Numeric phone field
	
	//var phoneValue = phoneField.value; // Get the phone field value
	var phoneValue = phoneField.getProperty('value.value'); // get the phone number value
    console.log("Original phone value:", phoneValue);

    if (phoneValue) {
		// Remove dashes and leading zero 
    var cleanedPhone = phoneValue.replace(/^0+/, '').replace(/-/g, ''); 
		// add and add the +972 prefix
		var formattedPhone = "+972" + cleanedPhone;
        console.log("Formatted phone:", formattedPhone);
		
		//convert to numeric 
		var formattedPhoneNumber = parseInt(formattedPhone); 
        console.log("Formatted phone as a number:", formattedPhoneNumber);
		
        // Update the numeric field with the formatted phone number
        //formattedPhoneField.value = formattedPhone;
		//formattedPhoneField.setValue(({"value": formattedPhone})); 
		formattedPhoneField.setValue({ "value": formattedPhone });
	
		var formattedPhoneinNumericField = formattedPhoneField.getValue(); 
        console.log("Phone number updated in the numeric field:", formattedPhoneinNumericField);
		
    } else {
        console.log("No phone number found.");
    }
}



window.onclick = addCountryCode;