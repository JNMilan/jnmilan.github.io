function retrieveItem() {
    valueViewer("invoiceItems", "", "", "")
    if (!isNaN(localStorage.getItem("invoiceCounter"))) {
        for (i = 1; i <= parseInt(localStorage.getItem("invoiceCounter")); i++) {
            if (!(localStorage.getItem(i) == null)) {
                valueAdder("invoiceItems", "<tr>", localStorage.getItem(i), "</tr>")
            }

        }
    }
}