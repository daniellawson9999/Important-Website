// bar code
var combustion = document.getElementById("combustion");
var slider = document.getElementById("myRange");

var count = 0;
slider.oninput = function() {
    console.log(slider.getAttribute("value"));
    if (this.value == this.max) {
        this.disabled = true;
        this.value = this.min;          
        // increase font size
        var style = window.getComputedStyle(combustion, null).getPropertyValue('font-size');
        var fontSize = parseFloat(style); 
        combustion.style.fontSize = (fontSize + 30) + 'px'; 
        count++; 
        if (count >= 3) {
            combustion.style.fontSize = (fontSize + 50) + 'px'; 
            combustion.classList.add("explode");
            count = 0;
        }
        this.disabled = false;
    }
}

function endFunc(){
    combustion.classList.remove("explode");
    window.location.href = "./home";
}
// Code for Chrome, Safari and Opera
combustion.addEventListener("webkitAnimationEnd", endFunc);

// Standard syntax
combustion.addEventListener("animationend", endFunc);








// cool function, binary code

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



  const essay = `Yellow Group: Section #19.
Douglas Kearney\'s 2017 poem \'The Loud-Assed Colored Science\' is a piece of literature that is simultaneously challenging and interesting in a way that defies most conventional ideas of poetry, public speech, and protests in general. By using the concepts of avant-garde, marked text, and the horizon of expectations, Kearney has constructed a deeply subversive and experimental poem, while maintaining the poignancy and confusion in the current political space. 
	The concept of avant-garde art traces its origins to the French word of the same name. In traditional French, avant-garde is a military term for the front line. It took on a new meaning in the politically liberal and highbrow artists of the 19th century. According to American essayist Clement Greenberg, \"Avant-garde culture is the imitation of imitation\". Kearney utilizes a distorted rendition of \'We Shall Overcome,\' a song that invokes imagery of slavery and the Civil Rights Movement of the 1960s, but imposes overlayed text in a confusing way that is hard to decipher when just looking at the poem. However, through his delivery, Kearney imitates the mockery and overlapping opinions that are so frequent in political discourse. By employing this tactic of audio overload, Kearney draws attention to the ideas of distortion, censorship, and disillusion in modern political movements such as Black Lives Matter. 
	Kearney\'s poem challenged the ways in which listeners are accustomed to hearing or reading poetry. His utilization of voice and delivery serves as a technological tool to assert a sense of uncomfortability amongst his audience. The unique fluctuating tones and general unevenness of his voice, along with the quick physical movements, immediately draws the eyes towards him, demanding full attention. This response is arguably enough to allow the audience to adjust their mindset to understand the complete meaning of the underlying feelings of sadness and longing.  Throughout the poem Kearney also shifted his style from sounding unscholarly to being intellectual as if he were trying to bridge the gap and prove the point of progression. 
	Kearney\'s poem exemplifies a marked text through the various text directions, sizes and eye catching nature. For example, the slanted and blurred text for the lyrics of \'We Shall Overcome\' are a visual representation of the distorted sound which Kearney uses in his voice when performing the poem. As Johanna Drucker states in her book \'The Visible World,\' \"Without a doubt, however, the conventions governing the design of marked texts, typical advertising text, were broader, more open and varied, than those which restricted literary or unmarked production\". Kearney takes advantage of this freedom in printing to imitate technology, such as hashtags on Twitter, and the sound of a firehose symbolically shutting down public speech. 
	Douglas Kearney has taken the disorientation of navigating political conversations in the contemporary technological world and has given it a physical representation. By using marked text, drawing in the influence of the avant-garde art movement, and subverting the horizon of expectations that all readers hold, Kearney has constructed a mentally demanding but philosophically compelling piece of art. Kearney\'s poem \'The Loud-Assed Colored Silence\' connects the difficulty that people of color have had advocating for themselves, and visually represented it using various text shapes and onomatopoeic devices to convey the proverbial \"deafening silence\" that people who wish to communicate often find forced upon them.`  

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
    if (i == 0){
        var text = document.createTextNode(text_array[i])
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(text)
        newSpan.style.color = "red";
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
        newSpan.appendChild(document.createElement("br"))
    }
    else{
        var text = document.createTextNode(binary_array[i]);
        newSpan.appendChild(text)
    }
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
