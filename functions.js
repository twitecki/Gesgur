function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function removeContentInClass(matchClass) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if(((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1) || ((' ' + elems[i].id + ' ').indexOf(' ' + matchClass + ' ')
                > -1)) {
            elems[i].parentNode.removeChild(elems[i]);
        }
    }
}