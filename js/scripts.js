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
    alert("Please enter your name");
    }else if (!end || !interest || !device || !company || !environment){
    alert("Please fill in all choices")
    }else if (end === "front" && interest === "styling" && device != "android" && company != "startup"  && environment != "pair") {
      $("#css").fadeIn(2000);
      $("#ruby").hide();
      $("#java").hide();
      $("#csharp").hide();
    } else if (end === "front" && interest === "webapp" && device != "android" &&  company != "freelance" && environment != "pair") {
      $("#ruby").fadeIn(2000);
      $("#css").hide();
      $("#java").hide();
      $("#csharp").hide();
    } else if (end === "back" && interest != "styling" && device === "android" && company === "enterprise" && environment != "pair"){
      $("#java").fadeIn(2000);
      $("#ruby").hide();
      $("#css").hide();
      $("#csharp").hide();
    } else if (end === "back" && interest != "styling" && device != "android" && company === "enterprise" && environment === "solo"){
      $("#csharp").fadeIn(2000);
      $("#ruby").hide();
      $("#java").hide();
      $("#css").hide();
    } else{
      $("#ruby").fadeIn(2000);
      $("#csharp").hide();
      $("#java").hide();
      $("#css").hide();
    }
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});
