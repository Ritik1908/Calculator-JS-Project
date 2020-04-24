var buttons = document.querySelectorAll("button");
var display1 = document.querySelector("#p01");
var display2 = document.querySelector("#p02");
var arr = [];
var n = 0;
var lhscalculation = 0;

buttons[0].addEventListener("click", function(){
	disp("7");
});
buttons[1].addEventListener("click", function(){
	disp("8");
});
buttons[2].addEventListener("click", function(){
	disp("9");
});
buttons[3].addEventListener("click", function(){
	disp("4");
});
buttons[4].addEventListener("click", function(){
	disp("5");
});
buttons[5].addEventListener("click", function(){
	disp("6");
});
buttons[6].addEventListener("click", function(){
	disp("1");
});
buttons[7].addEventListener("click", function(){
	disp("2");
});
buttons[8].addEventListener("click", function(){
	disp("3");
});
buttons[9].addEventListener("click", function(){
	disp("0");
});
buttons[10].addEventListener("click", function(){
	disp("00");
});
buttons[11].addEventListener("click", function(){
	disp(".");
});
buttons[12].addEventListener("click", function(){
	disp("/");
});
buttons[13].addEventListener("click", function(){
	disp("X");
});
buttons[14].addEventListener("click", function(){
	disp("%");
});
buttons[15].addEventListener("click", function(){
	disp("+");
});
buttons[16].addEventListener("click", function(){
	disp("-");
});

function disp (number) {
	arr[n] = number;
	display1.innerHTML = arr;
	n++;
};

// function addition (num1 , num2){
// 	var num = (Number)num1 + (Number)num2;
// 	return num;
// }