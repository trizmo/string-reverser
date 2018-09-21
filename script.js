console.log("test good!")



$(document).ready(function() {

  $("#submit").on("click", function(){
    str = $("#strInput").val()

    var strREV = [];
    for(i = str.length-1; i >= 0; i--){
      strREV.push(str[i]);
    }
    var reversed = strREV.join("")
    $("#revStrDisp").html(reversed)
    console.log(reversed)

  })




})