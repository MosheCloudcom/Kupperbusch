function addCountryCode() {
	
	//var phoneField = document.getElementById('116683822'); // Original phone field
	//var formattedPhoneField = document.getElementById('116683856'); // Numeric phone field
	var phoneField = loader.engine.document.getElementById(116683822); 
	if (!phoneField) {
		console.error("Element with ID 116683856 not found.");
  	}


	var formattedPhoneField = loader.engine.document.getElementById(116683856); // Numeric phone field
	if (!formattedPhoneField) {
		console.error("Element with ID 116683856 not found.");
  	}


    //var phoneValue = phoneField.value; // Get the phone field value
	var phoneValue = phoneField.getProperty('value.value'); // - formula field or number field

    console.log("Original phone value:", phoneValue);

	//var defaultValue = formattedPhoneField.getProperty('value.value'); // - formula field or number field

    //console.log("default value:", defaultValue);


    if (phoneValue) {
        var cleanedPhone = phoneValue.replace(/[^0-9]/g, "");
		// Remove leading zero and add the 972 prefix
        //var formattedPhone = "972" + phoneValue.replace(/^0/, "");
		var formattedPhone = "972" + cleanedPhone;
        console.log("Formatted phone:", formattedPhone);

		
        // Update the numeric field with the formatted phone number
        formattedPhoneField.value = formattedPhone;
		//formattedPhoneField.setValue(({"value": formattedPhone})); 

        console.log("Phone number updated in the numeric field:", formattedPhone);
    } else {
        console.log("No phone number found.");
    }
}



window.onclick = addCountryCode;