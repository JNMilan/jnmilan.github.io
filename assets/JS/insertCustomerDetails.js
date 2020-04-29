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
    valueViewer("dateD", "DATE : ", receiveString("date"), "");
    valueViewer("invoiceNumberD", "INVOICE# : ", receiveValues("invoiceNumber"), "");
    valueViewer("customerIdD", "CUSTOMER ID : ", receiveString("customerId"), "");
    valueViewer("customerNameD", "NAME : ", receiveString("customerName"), "");
    valueViewer("customerCompanyD", "COMPANY : ", receiveString("customerCompany"), "");
    valueViewer("customerAddressD", "ADDRESS : ", receiveString("customerAddress"), "");
    valueViewer("customerPhoneD", "PHONE : ", receiveValues("customerPhone"), "");
}