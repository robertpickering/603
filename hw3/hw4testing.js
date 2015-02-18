/**
 * @author Robert Pickering
 */
		
function binsearch (searchnum) {
	var pr = p;  //This is the principle value and serves as the first present value
	var i = ir;  //This is the interest rate
	var factor = (1+i);  //This is what we multiply the presesnt value by raised to the exponent of the year
	var fv1 = []; //This is the array for the future values
	var fv2 = [];
	var interest = [];
	var interest1 = []; // This is the array for interest for each year
	var yeartot= [];
	var yeartot1= [];
	
	/* This is the for loop which will fill the array with compound interest values
	 * The Future value (fv) is calculated by multiplying the present value
	 * by (1 + i)^j and fills the array fv with each value of j as the for loop loops.
	 * The array interest[j] is filled by multiplying each value of fv by i for each 
	 * iteration of the loop.
	 * End of year values are calculated and stored in yeartot[] by adding fv and interest
	 * for each progressive year.
	 * 
	 * The arrays are dumped successively to the divs at the end of the file.
	 * An offset of 10 and 20 are applies to 
	 * 
	 * Floating point error fix found at http://www.mredkj.com/javascript/nfbasic2.html using .toFixed method.
	 * 
	 */
	
	for (var j=0; j < 11; j++) {
		fv1[j] = (pr * Math.pow(factor, j)); 
		fv2[j] = fv1[j].toFixed(2);
		
		interest[j] = ((fv2[j]) * (i));
		interest1[j] = interest[j].toFixed(2);
		
		yeartot[j] = fv1[j] + interest[j];
		yeartot1[j] = yeartot[j].toFixed(2);
		document.getElementById('notfound').innerHTML = searchnum;
	 // document.getElementById(j).innerHTML = "$" + fv2[j] ; 
	 // document.getElementById(j+11).innerHTML = "$" + interest1[j] ; 
	 // document.getElementById(j+22).innerHTML = "$" + yeartot1[j] ; 
	   
	  
	};

}

/*
 * The first part gets the Principle and Interest Rate entries from the user
 * Next we check to see if there is at least an entry.
 * Next we check to see that it is numeric.
 * Next we check to see that it is greater than 0.
 * Next we check to see that the user doesn't just enter a space.  Beyond that, 
 * we assume malicious behavior and the user gets what they derserve.
 * If all of the above passes, the values are passed to the calculate 
 * function.
 * 
 * Input validation inspiration derived from http://www.tizag.com/javascriptT/javascriptform.php
 * 
 */			
function verify(searchnum, problem){
	
	var newsearch = Number(document.getElementById('searchnum').value);
	
	if(newsearch.length == 0){
		alert(problem);
		return true;
		
	}else if(isNaN(searchnum.value)){
		alert(problem);
		return true;
	}
	else if(searchnum.value < 0){
		alert(problem);
		return true;
	}
	else if (searchnum.value == '') {
		alert(problem);
		return true;
		
	}
	
	else{
		document.getElementById("notfound").innerHTML = searchnum;
		binsearch(searchnum);
		return true;
		
	}
	  
}

		