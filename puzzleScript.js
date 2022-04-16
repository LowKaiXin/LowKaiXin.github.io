var name = prompt("What's your name?")
alert("Welcome!" + name + "!Hope you enjoy the puzzle game!")

function enterAnswer() {
  var response = prompt("您的答案是：");
  if (response == 4238) {
    alert("恭喜回答正确！");
  } else {
    alert("很遗憾，" + response + "并不是正确答案，请再思考思考！");
  }
  document.getElementById("answers").innerHTML="你输入的答案："+response;
}

function getAnswer(){
  alert("正确答案是：4238.");
}

function getHint(){
  var hint = ["这道题目需要将图形上下分割开，在进行左右移动，从新组合成数字。","答案为四位数。"];
  for (i=0;i<hint.length;i++){
	alert(hint[i]);
  }
}
