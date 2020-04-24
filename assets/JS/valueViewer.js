function valueViewer(elementId, prefixString, value, suffixString) {
    document.getElementById(elementId).innerHTML = prefixString + value + suffixString;
}