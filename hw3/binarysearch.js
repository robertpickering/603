/**
 * @author Robert Pickering
 */

var a = [1, 14, 357, 399, 401, 514, 515, 522, 711, 1023];

         
         // function called when "Search" button is pressed
         function buttonPressed( problem )
         {
            var inputVal = document.getElementById( "inputVal" );
            var result = document.getElementById( "result" );
            var searchKey = inputVal.value;
      		
            
           

            // Array a is passed to binarySearch even though it
            // is a global variable. This is done because 
            // normally an array is passed to a method
            // for searching.
            
            if (verify(inputVal)==true){
            	result.value = "the Portions of array searched\n";
            	var element =  binarySearch( a, parseInt( searchKey ), 0, a.length - 1 );

            	if ( element != -1 ){
               		result.value += "\nFound value in element " + element;
               }else{
              		 result.value += "\nValue not found";
            	}
            }else{
            	
            }
            
            
                        
            
         } // end function buttonPressed
         /*
          * The verify function tests to see that the user has only entered positive integers.
          */
         function verify(test){
         	var problem = "Please only input positive integers!";
         	
         	if(test.length == 0){ //did the user input something?
			alert(problem);
			return false;
		
			}else if(isNaN(test.value)){ //is it a number?
			alert(problem);
			return false;
			}
			else if(test.value < 1){ // is it greater than 0?
			alert(problem);
			return false;
			}
			else if(test.value != Math.floor(test.value)){ //is it a whole number?
			alert(problem);
			return false;	
			}
			else if (test.value == '') {// did they just hit space?
			alert(problem);
			return false;
			}
	       	return true;
         };
   
         function binarySearch( theArray, key, low, high ) 
         {
            var middle;
	    if (low>=high) {                      // Note the safety check!
	      if (key==theArray[low]) {
	        return theArray[low]; //the is the SKU we were looking for
              } else {
	        return -1;
              }
            } else {
               middle = Math.floor((low+high)/2); //Note the explicit floor
               spitout( theArray, low, middle, high );
               if (key<=theArray[middle]) {       // Note handling of equality
                  return binarySearch(theArray, key, low, middle);
               } else {                                            
                  return binarySearch(theArray, key, middle+1, high);
               }
            } 
         }

         // Build one row of output showing the current
         // part of the array being processed.
         function spitout( theArray, low, mid, high ){
            var result = document.getElementById( "result" );

            for ( var i = 0; i < theArray.length; i++ ){
               if ( i < low || i > high ){
                  result.value += "    ";
               }else if ( i == mid ){ // mark middle element in output
                  result.value += theArray[ i ] + 
                     ( theArray[ i ] < 10 ? "*  " : "* " );
               }else{ 
                                                       
                  result.value += theArray[ i ] + 
                     ( theArray[ i ] < 10 ? "   " : "  " );
                     
               }      
            } // end for

            result.value += "\n";
            
         } // end function spitout
         
