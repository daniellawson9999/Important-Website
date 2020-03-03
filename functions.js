const text = "testing. text is here hello. this is the third sentence.";

function textToBinary() {
  var output = document.getElementById("box1");
  var outputB = document.getElementById("box2");
  var output2 = document.getElementById("box3");
  var outputB2 = document.getElementById("box4");
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
  
  output.value = sentArr[0];
  outputB.value = binaryArr[0];
  output2.value = sentArr[counter - 1];
  outputB2.value = binaryArr[counter - 1]
};
