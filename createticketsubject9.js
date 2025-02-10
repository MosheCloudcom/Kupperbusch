function CreateTicketSubject() {
    var BrandField = loader.engine.document.getElementById(116368780); // Get the Brand Name Field
    var BrandValue = BrandField.getProperty('value.value'); // Get the Brand Name value
    console.log("Brand value:", BrandValue);

    var formattedTicketSubjectField = loader.engine.document.getElementById(116714391); // Get Formatted Ticket Subject Field

    if (BrandField) {
        // Generate a unique Base 36 number from timestamp
        var uniqueNumber = Date.now().toString(36);

        // Construct the formatted ticket subject
        var formattedSubject = " הזמנה חדשה: " + uniqueNumber;
        console.log("Formatted Ticket Subject:", formattedSubject);

        // Set the value of the formatted ticket subject field        
        formattedTicketSubjectField.setValue({ "value": formattedSubject });

    } else {
        console.log("Brand not found");
    }
}

window.onclick = CreateTicketSubject;
