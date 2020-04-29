function insertCustomerDetails() {
    //recieve values
    //receiveString("date");
    // receiveValues("invoiceNumber");
    // receiveString("customerId");
    //receiveString("customerName");
    //receiveString("customerCompany");
    //receiveString("customerAddress");
    //receiveValues("customerPhone");

    // insert values
    //  valueViewer("dateD", "DATE : ", receiveString("date"), "");
    localStorage.setItem("dateD", receiveString("date"))
    localStorage.setItem("invoiceNumberD", (receiveValues("invoiceNumber")));

    //valueViewer("invoiceNumberD", "INVOICE# : ", receiveValues("invoiceNumber"), "");

    //valueViewer("customerIdD", "CUSTOMER ID : ", receiveString("customerId"), "");
    localStorage.setItem("customerIdD", receiveString("customerId"))
    localStorage.setItem("customerNameD", receiveString("customerName"))
    //valueViewer("customerNameD", "NAME : ", receiveString("customerName"), "");
    localStorage.setItem("customerCompanyD", receiveString("customerCompany"))
    //valueViewer("customerCompanyD", "COMPANY : ", receiveString("customerCompany"), "");
    localStorage.setItem("customerAddressD", receiveString("customerAddress"))
    //valueViewer("customerAddressD", "ADDRESS : ", receiveString("customerAddress"), "");
    localStorage.setItem("customerPhoneD", receiveValues("customerPhone"))
    //valueViewer("customerPhoneD", "PHONE : ", receiveValues("customerPhone"), "");
}