$(document).ready(function() {

    $("form#quiz").submit(function(event){
      event.preventDefault();
      var name = $("input#name").val();
      var end = $("input:radio[name=end]:checked").val();
      var interest = $("input:radio[name=interest]:checked").val();
      var device =  $("input:radio[name=device]:checked").val();
      var company =  $("input:radio[name=company]:checked").val();
      var environment =  $("input:radio[name=environment]:checked").val();

      $('.name').text(name);

      if (end === "front" && interest === "styling" && environment === "solo" ) {
        $("#css").show();
      } else if (end === "front" && interest === "webapp" && company === "small" && environment === "collaborative") {
        $("#ruby").show();
      } else if (end === "back" && interest === "data" && device === "android" && company === "enterprise" && evironment === "collaborative"){
        $("#java").show();
      } else if (end === "back" && interest === "servers" && device === "mac" && company === "enterprise" && environment === "solo"){
        $("#csharp").show();
      } else{
        $("#").show();
      }

    });
});
