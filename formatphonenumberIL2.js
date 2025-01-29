function addCountryCode() {
    var phoneField = loader.engine.document.getElementById(107468140); // Original phone field
    var formattedPhoneField = loader.engine.document.getElementById(107448806); // Numeric phone field

    var phoneValue = phoneField.getProperty('value.value');
    
    console.log("Original phone value:", phoneValue); // Log the original phone value

    if (phoneValue) {
        // Check if the phone value already has the country code without "+"
        if (!phoneValue.startsWith("972")) {
            // Remove the leading zero and add the 972 prefix
            phoneValue = phoneValue.replace(/^0/, ""); // Remove leading zero
            var formattedPhone = "972" + phoneValue; // Add 972 prefix without the "+"
            
            console.log("Formatted phone (without '+'):", formattedPhone); // Log the formatted phone number
            
            // Convert to a number (without the "+" symbol) and set it in the numeric field
            formattedPhoneField.setValue({"value": parseInt(formattedPhone, 10)}); // Set numeric value
            
            console.log("Phone number set in the numeric field:", formattedPhone); // Log the final number stored
        } else {
            console.log("Phone number already in correct format:", phoneValue); // Log if the phone number is already correct
        }
    } else {
        console.log("No phone number found."); // Log if no phone number is found
    }
};



window.onclick = addCountryCode;