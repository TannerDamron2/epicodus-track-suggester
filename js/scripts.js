$(document).ready(function() {

  $("form#form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var end = $("input:radio[name=end]:checked").val();
    var interest = $("input:radio[name=interest]:checked").val();
    var device =  $("input:radio[name=device]:checked").val();
    var company =  $("input:radio[name=company]:checked").val();
    var environment =  $("input:radio[name=environment]:checked").val();

    $('.name').text(name);

    if (!name){
    alert("Enter your name");
    }else if (!end || !interest || !device || !company || !environment){
    alert("Please fill in all choices")
    }else if (end === "front" && interest === "styling" && device != "android" && company != "startup"  && environment != "pair") {
      $("#css").show();
      $("#ruby").hide();
      $("#java").hide();
      $("#csharp").hide();
    } else if (end === "front" && interest === "webapp" && device != "android" &&  company != "freelance" && environment != "pair") {
      $("#ruby").show();
      $("#css").hide();
      $("#java").hide();
      $("#csharp").hide();
    } else if (end === "back" && interest != "styling" && device === "android" && company === "enterprise" && environment != "pair"){
      $("#java").show();
      $("#ruby").hide();
      $("#css").hide();
      $("#csharp").hide();
    } else if (end === "back" && interest != "styling" && device != "android" && company === "enterprise" && environment === "solo"){
      $("#csharp").show();
      $("#ruby").hide();
      $("#java").hide();
      $("#css").hide();
    } else{
      $("#ruby").show();
      $("#csharp").hide();
      $("#java").hide();
      $("#css").hide();
    }
  });
});
