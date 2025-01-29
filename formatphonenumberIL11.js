function addCountryCode() {
	
	//var phoneField = document.getElementById('116683822'); // Original phone field
	//var formattedPhoneField = document.getElementById('116683856'); // Numeric phone field
	var phoneField = loader.engine.document.getElementById(116683822); 
	var formattedPhoneField = loader.engine.document.getElementById(116683856); // Numeric phone field

    //var phoneValue = phoneField.value; // Get the phone field value
	var phoneValue = phoneField.getProperty('value.value'); // - formula field or number field

    console.log("Original phone value:", phoneValue);

    if (phoneValue) {
        // Remove leading zero and add the 972 prefix
        var formattedPhone = "972" + phoneValue.replace(/^0/, "");
        console.log("Formatted phone:", formattedPhone);

		// Convert to number and update the numeric field
        var numericPhone = Number(formattedPhone); // Ensure it's a numeric value
		
        // Update the numeric field with the formatted phone number
        //formattedPhoneField.value = formattedPhone;
		formattedPhoneField.setValue(({"value": numericPhone})); 

        console.log("Phone number updated in the numeric field:", formattedPhone);
    } else {
        console.log("No phone number found.");
    }
}



window.onclick = addCountryCode;