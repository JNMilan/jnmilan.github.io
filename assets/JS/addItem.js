function addItem() {
    //SN
    invoiceCounter += 1;
    var quantity = receiveValues("itemQuantity");
    var rate = receiveValues("itemRate");
    // valueAdder("invoiceItems", "<tr><td>", counter, "</td>");
    //valueAdder("invoiceItems", "<td>", receiveString("itemName"), "</td>"); // description
    //valueAdder("invoiceItems", "<td>", quantity, "</td>"); // quantity
    //valueAdder("invoiceItems", "<td>", rate, "</td>"); //rate
    //valueAdder("invoiceItems", "<td>", quantity * rate, "</td></tr>"); // amount
    var midValue = "<td>" + invoiceCounter + "</td>" + "<td>" + receiveString("itemName") + "</td>" + "<td>" + quantity + "</td>" + "<td>" + rate + "</td>" + "<td>Rs. <span id='" + invoiceCounter + "'>" + quantity * rate + "</span></td>";
    valueAdder("invoiceItems", "<tr>", midValue, "</tr>")
    amountViewer();
}