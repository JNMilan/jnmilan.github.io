function retrieveCustomerDetails() {
    valueViewer("invoiceNumberD", "INVOICE# : ", decrypt(localStorage.getItem("invoiceNumberD")), "");
    valueViewer("dateD", "DATE : ", decrypt(localStorage.getItem("dateD")), "");

    valueViewer("customerIdD", "CUSTOMER ID : ", decrypt(localStorage.getItem("customerIdD")), "");
    valueViewer("customerNameD", "NAME : ", decrypt(localStorage.getItem("customerNameD")), "");
    valueViewer("customerCompanyD", "COMPANY : ", decrypt(localStorage.getItem("customerCompanyD")), "");
    valueViewer("customerAddressD", "ADDRESS : ", decrypt(localStorage.getItem("customerAddressD")), "");
    valueViewer("customerPhoneD", "PHONE : ", decrypt(localStorage.getItem("customerPhoneD")), "");
}