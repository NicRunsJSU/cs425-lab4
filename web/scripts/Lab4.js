var Lab4 = ( function() {

    return {

        convert: function(rates) {
            
            /*
             * This function accepts the data object sent by the server
             * ("rates") as an argument.  It should: get the amount (in USD)
             * entered by the user in the "input" form field, iterate through
             * the currency exchange rates given in the data object, multiply
             * each rateby the given number of U.S. Dollars, and compute the
             * corresponding amount for each currency.  These amounts should be
             * shown in the "output" element of the page, along with the
             * currency codes, separated by colons and formatted to two decimal
             * places.  (See the screenshot given with this assignment.)
             */

            // INSERT YOUR CODE HERE
            
            
            var inputAsString = document.getElementById("input").value; 
            //input is brought in as a string data type
            var data = rates["rates"];
            var s = "";
            
            
            
            if (inputAsString.length > 0){ //check that input is not null
                if(!isNaN(inputAsString)){ //check that input is a number
                    
                    var input = parseInt(inputAsString); //convert string -> int
                    
                    for(rate in data) {
                        
                        var convertedInput = input * data[rate];
                        
                        
                    }
                   
                    
                    
                }
            }
            

        },
        
        getConversion: function() {
            
            /*
             * This method should send an Ajax request to our API to get the
             * latest exchange rates.  Use "latest" as the URL and "json" as the
             * data type, so that the data will be automatically parsed to a
             * JavaScript object.  (In the sample code in the "HTTP Basics"
             * lecture notes, this object is called "response".  Then, invoke
             * the helper function "convert()" in the callback function to 
             * perform the conversion.  (If you are unclear about the purpose of
             * the "that" variable shown here, see Page 6 of the "Functions and
             * Objects" lecture notes.
             */
            
            var that = this;
            
            $.ajax({
                url: 'latest',
                method: 'GET',
                dataType: 'json',
                success: function(response) {
                    that.convert(response);                    
                }
            });
            
        },
        
        init: function() {
            
            /* Output the current version of jQuery (for diagnostic purposes) */
            
            $('#output').html( "jQuery Version: " + $().jquery );
 
        }

    };

}());