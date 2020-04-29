function retrieveCustomerDetails() {
    valueViewer("invoiceNumberD", "INVOICE# : ", localStorage.getItem("invoiceNumberD"), "");
    valueViewer("dateD", "DATE : ", localStorage.getItem("dateD"), "");
    valueViewer("customerIdD", "CUSTOMER ID : ", localStorage.getItem("customerIdD"), "");
    valueViewer("customerNameD", "NAME : ", localStorage.getItem("customerNameD"), "");
    valueViewer("customerCompanyD", "COMPANY : ", localStorage.getItem("customerCompanyD"), "");
    valueViewer("customerAddressD", "ADDRESS : ", localStorage.getItem("customerAddressD"), "");
    valueViewer("customerPhoneD", "PHONE : ", localStorage.getItem("customerPhoneD"), "");
}