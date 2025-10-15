let target = document.getElementById("levele");
let n = 0;

while(target){
	n++;
	target = target.parentElement;
}
alert("The level of the element is: " + n); 
