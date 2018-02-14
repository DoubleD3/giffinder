// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  $.ajax({
  url: "api.giphy.com/v1/stickers/search?q=puppy&api_key=dc6zaTOxFJmzC",
  method: "GET",
  success: function(response) {
    //Log the whole response to the console
conosole.log(response);
$(*".row").append("<img src=" + response + ">");

}); 
  
  
});
