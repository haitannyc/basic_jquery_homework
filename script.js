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
    $("#up").animate({"letterSpacing": '30px', "fontSize": '6em', "color": 'red'}, "slow");
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

// $("#middle").click(function(){
    $("#middle").slideUp( 300 ).fadeIn( 400 );

// });


$("#stop_everything").css({"top": "50px",
     "left": "200px",
     "font-size": "45px",
     "position": "absolute",

    }).animate({"height": '+=150'}, "slow");


 $("#stop_everything").click(function(){
    $("body").hide(1000);


 // not working
 // var timer = setInterval( 1000000000000);
    
 // clearInterval(function() { //clear interval
 //  }, 999999000);



 });




// });




// ------end of setinterval wrapper
 }, 1000); // every 1000 ms






  // bottom of document ready 
});