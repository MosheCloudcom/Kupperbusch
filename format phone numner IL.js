function addCountryCode() {
    var phoneField = loader.engine.document.getElementById(116683822);  // Replace with actual field ID
    var formattedPhoneField = loader.engine.document.getElementById(116683856);  // Replace with actual field ID

    var phoneValue = phoneField.getProperty('value.value');  // Get the original phone number
    if (phoneValue) {
        // Remove leading zero if present and add +972 prefix
        var formattedPhone = "972" + phoneValue.replace(/^0/, "");

        // Set the new formatted phone number in the target field
        formattedPhoneField.setValue({"value": formattedPhone});
    }
};



window.onclick = addCountryCode;