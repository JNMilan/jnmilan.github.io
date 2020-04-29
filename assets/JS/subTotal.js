function subTotal() {
    var invoiceCounter = localStorage.getItem("invoiceCounter")
    if (invoiceCounter == 0) {
        return 0;
    } else {
        var subTotalValue = 0;
        for (i = 1; i <= invoiceCounter; i++) {
            subTotalValue += receiveValues(i);

        }

        return subTotalValue;
    }
}