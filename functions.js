const text = "Douglas Kearney’s 2017 poem ‘The Loud-Assed Colored Science’ is a piece of literature that is simultaneously challenging and interesting in a" +
 "way that defies most conventional ideas of poetry, public speech, and protests in general. By using the concepts of avant-garde, marked text, and the horizon of" +
  "expectations, Kearney has constructed a deeply subversive and experimental poem, while maintaining the poignancy and confusion in the current political space." + 
	"The concept of avant-garde art traces its origins to the French word of the same name. In traditional French, avant-garde is a military term for the front line. It" +
	 "took on a new meaning in the politically liberal and highbrow artists of the 19th century. According to American essayist Clement Greenberg, “Avant-garde" + 
	 "culture is the imitation of imitation.” Kearney utilizes a distorted rendition of ‘We Shall Overcome,’ a song that invokes imagery of slavery and the Civil" + 
	 "Rights Movement of the 1960s, but imposes overlayed text in a confusing way that is hard to decipher when just looking at the poem. However through his" + 
	 "delivery, Kearney imitates the mockery and overlapping opinions that are so frequent in political discourse. By employing this Kearney draws attention to" + 
	 "the ideas of distortion, censorship, and disillusion in modern political movements such as Black Lives Matter."
	"Kearney’s poem challenged the ways in which listeners are accustomed to hearing or reading poetry. In a way his poem could make a person uncomfortable just" + 
	"because of how it was performed and composed. It forces people to adjust their mindset to understand the complete meaning of the underlying feelings of " +
	"sadness and longing which were conveyed through the use of fluctuating tones, " +
	"Kearney’s poem exemplifies a marked text through the various text directions, sizes and eye catching nature. The format of the text sends forth the message " +
	"of the civil rights movement being silenced.";

function textToBinary() {
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
  	 "binar_array" : binaryArr
  };
};
