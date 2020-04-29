function retrieveItem() {
    valueViewer("invoiceItems", "", "", "")
    for (i = 1; i <= localStorage.getItem("invoiceCounter"); i++) {
        if (!(localStorage.getItem(i) == null)) {
            valueAdder("invoiceItems", "<tr>", localStorage.getItem(i), "</tr>")
        }

    }
}