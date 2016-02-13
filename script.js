$(document).ready(function() {

// use set interval to repeat  everything
setInterval(function() {
            // code to be repeated
     

// $("#top").click(function(){
        $("#dropbox").slideToggle("slow");
    // });

// $("#end").click(function(){
    $("#end").hide();
    // });

$("#circle").css({"left": "150px"}).delay(1000).animate({"left":"+=100vw"},"slow");

// $("#first-div").click(function(){
    $("#first-paragraph").slideUp();
    // });

// $("#hello").click(function(){
                        
  $("#hello").animate({fontSize: "80px", opacity: 0.25,
    left: "+=50"});
                                       
    // });

// $("#list1").click(function(){
    $("#list1").css({ "left": "300px","text-align": "center" })
              .animate({left: '200px', fontSize: '1.5em'}, "slow");
     // $("#list1").animate({fontSize: '3em'}, "slow");
// }); 


// $("#up").click(function(){
    $("#up").animate({letterSpacing: '50px', fontSize: '6em', color: 'red'}, "slow");
     // $("#list1").animate({fontSize: '3em'}, "slow");
// }); 
 $("#yahoo").css({
   'fontsize': '50px',
   'text-align': "center"
 });
 $("img").hide();

  // $(".showimg").click(function(){
    $("img").delay(800).fadeIn(2000).slideDown('slow'); 
      
  // });

$("#middle").click(function(){
    $("#middle").slideUp( 300 ).fadeIn( 400 );

});


$("#stop_everything").css({"top": "50px",
     "left": "200px",
     "font-size": "45px",
     "position": "absolute", 
});


 $("#stop_everything").click(function(){
    $("body").hide(1000);
 });


   /* Act on the event */

 




// stop everything
// $( "p" ).click(function( event ) {
//   event.stopPropagation();
//   // Do something
// });




// ------end of setinterval wrapper
 }, 1000); // every 1000 ms


  // bottom of document ready 
});