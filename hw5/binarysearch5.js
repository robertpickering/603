/**
 * @author Robert Pickering
 */

var a = [1, 14, 357, 399, 401, 514, 515, 522, 711, 1023];

         
         // function called when "Search" button is pressed
          function searcher()
         {
            var inputVal = document.getElementById( "inputVal" );
            var searchKey = inputVal.value;
            var hereItIs = " is in stock. <br><br> Isn\'t that great?!";
            var notHere = " isn\'t in stock. <br><br> Too bad! <br><br> The closest items we currently stock are:";
            //var Result = document.getElementById("0");
      

            // Array "a" is passed to binarySearch even though it
            // is a global variable. This is done because 
            // normally an array is passed to a method
            // for searching.
            
            
           if (verify(inputVal)==true){ //check to see that the input is reasonable
           
            var element = binarySearch( a, parseInt( searchKey ) );
 			
            
            if ( element == searchKey ){
              document.getElementById(0).innerHTML = "Result" + "<br><br>" + element + " " + hereItIs;
            }else{
               + element;
               document.getElementById(0).innerHTML = "Result" + "<br><br>" + searchKey + " " + notHere + element[0] + " and " + element[1];
              }}else{
            	
            } 
         } // end function buttonPressed
   
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
			else if (test.value > a[a.length-1]){
                  	alert("We will never stock that item. EVER!");
                  	return false;
                  };
	       	return true;
         };
   
         // binary search function
         function binarySearch( theArray, key ) 
         {
            var low = 0; // low subscript
            var high = theArray.length - 1; // high subscript
            var middle; // middle subscript

			var lowhigh = [0, 0];

            while ( low <= high ) {                            
               middle = Math.floor((low+high)/2);                    
                                                               
               // The following line is used to display the    
               // part of theArray currently being manipulated 
               // during each iteration of the binary          
               // search loop.                                 
                                                               
               if ( key == theArray[ middle ] ){  // match      
                  return theArray[ middle ];                               
               }else if ( key < theArray[ middle ] ){            
                  high = middle - 1; // search low end of array
                  lowhigh = [theArray[high], theArray[low]];
               }else                                            
                  low = middle + 1; // search high end of array
                  lowhigh = [theArray[high], theArray[low]];
                  
            } // end while

            return lowhigh;   // searchKey not found
         } // end function binarySearch

         // Build one row of output showing the current
         // part of the array being processed.
   