function clearInvoice() {
    valueViewer("invoiceItems", "", "", "");
    invoiceCounter = 0;
    amountViewer();
    window.alert("All the order details in your invoice has been cleared.");
}