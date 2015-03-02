/**
 * @author Robert Pickering
 */

var a = [1, 14, 357, 399, 401, 514, 515, 522, 711, 1023];

         
         // function called when "Search" button is pressed
          function buttonPressed()
         {
            var inputVal = document.getElementById( "inputVal" );
          //  var result = document.getElementById( "result" );
            var searchKey = inputVal.value;
            var hereItIs = " is in stock. <br> Isn\'t that great?!";
            var notHere = " isn\'t in stock. <br> Too bad! <br> But if it were, it would have been between:";
      
            //result.value = "Portions of array searched\n";

            // Array a is passed to binarySearch even though it
            // is a global variable. This is done because 
            // normally an array is passed to a method
            // for searching.
            var element = binarySearch( a, parseInt( searchKey ) );
 			
            
            if ( element == searchKey ){
           //    result.value =  element + " is in stock.\nIsn't that great.";
              document.getElementById(0).innerHTML = element + " " + hereItIs;
            }else{
            //   result.value =  searchKey + " isn't in stock.\nToo bad.\n\n But if it were, it would have been between" 
               + element;
               document.getElementById(0).innerHTML = searchKey + " " + notHere + element[0] + " and " + element[1];
              } 
         } // end function buttonPressed
   
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
               //buildOutput( theArray, low, middle, high );     
                                                               
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
    /*     function buildOutput( theArray, low, mid, high )
         {
            var result = document.getElementById( "result" );

            for ( var i = 0; i < theArray.length; i++ )
            {
               if ( i < low || i > high )
                  result.value += "    ";
               else if ( i == mid ) // mark middle element in output
                  result.value += theArray[ i ] + 
                     ( theArray[ i ] < 10 ? "*  " : "* " );
               else                                          
                  result.value += theArray[ i ] + 
                     ( theArray[ i ] < 10 ? "   " : "  " );
            } // end for

            result.value += "\n";
         } // end function buildOutput
         
*/