function CreateTicketSubject() {
	
	var BrandField = loader.engine.document.getElementById(116819904); // get the Brand Name Field
	var BrandValue = BrandField.getProperty('value.value'); // get the Brand Name value
    console.log("Brand value:", BrandValue);

	var OrderNumberField = loader.engine.document.getElementById(116820627); // get the Order Number field
	var OrderValue = OrderNumberField.getProperty('value.value'); // get the Order Number Value value
    console.log("Brand value:", BrandValue);

	var formattedTicketSubjectField = loader.engine.document.getElementById(116819898); // Get Formatted Ticket Subject Field

    if (BrandField && OrderNumberField) {
		
		// Construct the formatted ticket subject
        var formattedSubject = " התקנה חדשה: " + OrderValue + " (מותג: " + BrandValue + ")";
		console.log("Formatted Ticket Subject:", formattedSubject);

		// Set the value of the formatted ticket subject field		
		formattedTicketSubjectField.setValue({ "value": formattedSubject });

    } else {
        console.log("No Brand or Order found");
    }
}



window.onclick = CreateTicketSubject;