var text = "";

var text_array = [
'fooooodddddd',
'fooooodddddd',
'fooooodddddd',
'fooooodddddd',
'fooooodddddd',
'fooooodddddd'
];

var binary_array = [
'101010101101010101101010101101010101101010101',
'101010101101010101101010101101010101101010101',
'101010101101010101101010101101010101101010101',
'101010101101010101101010101101010101101010101',
'101010101101010101101010101101010101101010101',
'101010101101010101101010101101010101101010101'
];

// populate page

var p = document.getElementById("main")
for (var i = 0; i < binary_array.length; i++) {
    var newSpan = document.createElement("span");
    newSpan.setAttribute("id", i);
    var text = document.createTextNode(binary_array[i]);
    newSpan.appendChild(text)
    p.appendChild(newSpan);
}


// add highlight event listener

document.addEventListener('mousemove', function(event) {

    function allElementsFromPoint(x, y) {
        var element, elements = [];
        var old_visibility = [];
        while (true) {
            element = document.elementFromPoint(x, y);
            if (!element || element === document.documentElement) {
                break;
            }
            elements.push(element);
            old_visibility.push(element.style.visibility);
            element.style.visibility = 'hidden'; // Temporarily hide the element (without changing the layout)
        }
        for (var k = 0; k < elements.length; k++) {
            elements[k].style.visibility = old_visibility[k];
        }
        elements.reverse();
        return elements;
    }
    var elements = allElementsFromPoint(event.x, event.y)
    var currentSpan = null;
    for (element of elements){
        if (element.tagName == "SPAN"){
            currentSpan = element;
        }
    }
    var spans = document.getElementsByTagName("span")
    for (span of spans){
        if (currentSpan == null){
            break;
        }
        id = span.getAttribute("id");
        span.innerHTML = "";
        if (id != currentSpan.getAttribute("id")){
            text = document.createTextNode(binary_array[id])
            span.appendChild(text)
        } else{
            content = text_array[id];
            text = document.createTextNode(content)
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(text)
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
        }

    }
});
