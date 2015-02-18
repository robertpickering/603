/**
 * @author Robert Pickering
 */

function binsearch(num, problem){

var x = Number.getDocumentElementById('num');
var problem;
if(x.length == 0){
		alert(problem);
		return true;
		
	}else if(isNaN(x.value)){
		alert(problem);
		return true;
	}
	else if(x.value < 0){
		alert(problem);
		return true;
	}
	else if (x.value == '') {
		alert(problem);
		return true;
		
	}
	
	else{
		
		return true;
	}
	document.getElementById('skuout').innerHTML = num;
}
