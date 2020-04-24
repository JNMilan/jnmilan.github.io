
function casePercentage(countryIdentifier) {
    //receiving values
    var totalCases = receiveValues("totalCases" + countryIdentifier);
    var recoveredCases = receiveValues("recoveredCases" + countryIdentifier);
    var activeCases = receiveValues("activeCases" + countryIdentifier);
    var deaths = receiveValues("deaths" + countryIdentifier);

    //calculating percentage
    var recoveredCasesPercentage = percentageCalculator(totalCases, recoveredCases);
    var activeCasesPercentage = percentageCalculator(totalCases, activeCases);
    var deathsPercentage = percentageCalculator(totalCases, deaths);

    //viewing
    valueViewer("recoveredCasesP" + countryIdentifier, "<b>RECOVERED CASES</b> : <span class='badge  badge-success'> ", recoveredCasesPercentage.toFixed(2), " %</span>");
    valueViewer("activeCasesP" + countryIdentifier, "<b>ACTIVE CASES</b> : <span class='badge  badge-warning'> ", activeCasesPercentage.toFixed(2), " %</span>")
    valueViewer("deathsP" + countryIdentifier, "<b>DEATHS</b> : <span class='badge  badge-danger'>", deathsPercentage.toFixed(2), " %</span>")

}
