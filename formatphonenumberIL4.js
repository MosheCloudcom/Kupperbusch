function addCountryCode() {
	
	//var phoneField = document.getElementById('116683822'); // Original phone field
	//var formattedPhoneField = document.getElementById('116683856'); // Numeric phone field
	var phoneField = loader.engine.document.getElementById(116683822); 
	var formattedPhoneField = loader.engine.document.getElementById(116683856); // Numeric phone field

    var phoneValue = phoneField.value; // Get the phone field value
    console.log("Original phone value:", phoneValue);

    if (phoneValue) {
        // Remove leading zero and add the 972 prefix
        var formattedPhone = "972" + phoneValue.replace(/^0/, "");
        console.log("Formatted phone:", formattedPhone);

        // Update the numeric field with the formatted phone number
        formattedPhoneField.value = formattedPhone;
        console.log("Phone number updated in the numeric field:", formattedPhone);
    } else {
        console.log("No phone number found.");
    }
}



window.onclick = addCountryCode;