// cool function

function textToBinary(text) {
    let binaryArr = [];
    let sentArr = [];
    binaryArr[0] = "";
    sentArr[0] = "";
    var counter = 0;
    for (var i = 0; i < text.length; i++) {
      if (text.charAt(i) == '.'){
          binaryArr[counter] += text.charCodeAt(i).toString(2) + "";
          sentArr[counter] += text.charAt(i);
          counter++;
          binaryArr[counter] = "";
          sentArr[counter] = "";
      } else {
          binaryArr[counter] += text.charCodeAt(i).toString(2) + "";
          sentArr[counter] += text.charAt(i);
      } 	 
    }
    return {
         "text_array" : sentArr,
         "binary_array" : binaryArr
    };
  };



  const essay = "Douglas Kearney�s 2017 poem �The Loud-Assed Colored Science� is a piece of literature that is simultaneously challenging and interesting in a" +
  "way that defies most conventional ideas of poetry, public speech, and protests in general. By using the concepts of avant-garde, marked text, and the horizon of" +
   "expectations, Kearney has constructed a deeply subversive and experimental poem, while maintaining the poignancy and confusion in the current political space." + 
     "The concept of avant-garde art traces its origins to the French word of the same name. In traditional French, avant-garde is a military term for the front line. It" +
      "took on a new meaning in the politically liberal and highbrow artists of the 19th century. According to American essayist Clement Greenberg, �Avant-garde" + 
      "culture is the imitation of imitation.� Kearney utilizes a distorted rendition of �We Shall Overcome,� a song that invokes imagery of slavery and the Civil" + 
      "Rights Movement of the 1960s, but imposes overlayed text in a confusing way that is hard to decipher when just looking at the poem. However through his" + 
      "delivery, Kearney imitates the mockery and overlapping opinions that are so frequent in political discourse. By employing this Kearney draws attention to" + 
      "the ideas of distortion, censorship, and disillusion in modern political movements such as Black Lives Matter."
     "Kearney�s poem challenged the ways in which listeners are accustomed to hearing or reading poetry. In a way his poem could make a person uncomfortable just" + 
     "because of how it was performed and composed. It forces people to adjust their mindset to understand the complete meaning of the underlying feelings of " +
     "sadness and longing which were conveyed through the use of fluctuating tones, " +
     "Kearney�s poem exemplifies a marked text through the various text directions, sizes and eye catching nature. The format of the text sends forth the message " +
     "of the civil rights movement being silenced.";

arrays = textToBinary(essay);
text_array = arrays.text_array;
binary_array = arrays.binary_array;
/* var text_array = [
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
]; */




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
            span.style.color = 'white';
        } else{
            content = text_array[id];
            text = document.createTextNode(content)
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(text)
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.appendChild(document.createElement("br"))
            span.style.color = 'red';
        }

    }
});
