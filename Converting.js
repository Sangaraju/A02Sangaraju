function temp(){
	
var x=document.getElementById("F").value;
var y=document.getElementById("C").value;

    if (parseFloat(x)) {
        document.getElementById("C").value = (((x*9)/5)+32);
    } else {
        y = parseFloat(y);
        document.getElementById("F").value = (((y-32)*5)/9);
    }
};