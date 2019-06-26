var random = ["what", "is", "this"];
var html = ["div", "anchor", "tag"];

$(".category").on("click", function(){
    $(this).siblings().addClass("inactive");
    $(this).addClass("active");
});

$("#start_game").on("click", function(){
   var id_selected_catagory = $(".active").attr("id");
   var random_occourance = Math.floor(Math.random() * 2);
   alert(random_occourance);
//   alert(id_selected_catagory[random_occourance])
   
   
});

