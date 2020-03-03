const text = "testing. text is here hello. this is the third sentence.";

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
