$(document).ready(function() {

    $("form#quiz").submit(function(event){
      event.preventDefault();
      var name = $("input#name").val();
      var end = $("input:radio[name=end]:checked").val();
      var interest = $("input:radio[name=interest]:checked").val();

      if (end === "front" && interest === "styling" ) {
        $("#css").show();
      } else if (end === "back" && interest === "webapp") {
        $("#ruby").show();
      } else if (end === "front" && interest === "webapp"){
        $("#ruby").show();

      } else{
        $("#").show();
      }

    });
});
