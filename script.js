$(document).ready(function() {

// use set interval to repeat  everything
setInterval(function() {
            // code to be repeated
 $("#top").css({
           "padding": "10px",
           "text-align": "center",
           "background-color": "tan",
        });    

// $("#top").click(function(){
        $("#dropbox").css({
           "padding": "10px",
           "text-align": "center",
           "background-color": "tan",
            "padding": "70px",
            "display": "none",
            "background-color": "yellow"
        })
                      .slideToggle("slow");
    // });

// $("#end").click(function(){
    $("#end") .css({
            "top": "400px",
            // "position": "absolute",
            "background-color": "red",
             "font-size": "40px"})
            // .hide()

            .delay(1000)
            .scrollLeft( 300 )
            .slideDown('slow');
            
    // });

$("#circle").css({"left": "150px",
            "top": "400px",
            "position": "absolute",
            "background-color": "green",
            "border-radius": "50%",
            "width": "200px",
            "height": "200px",
            "margin": "40px"

           })
           .delay(1000).animate({"left":"+=100vw"},"slow");

// $("#first-div").click(function(){
    $("#first-paragraph").slideUp();
    // });

// $("#hello").click(function(){
                        
  $("#hello").css({ "text-align":  "center",
                    "font-size": "100px",
                    "color":"rgba(112, 182, 139, 1"})
            .animate({fontSize: "80px", opacity: 0.25,
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
   'text-align': "center",
      "border-style": "solid",
       "border-width": "20px",
       "display": "block",
       "width":"600px",
       "height": "300px",
       "background-color": "rgba(112, 182, 139, .5)"
    })
    .delay(4000) 
    .animate({"left": "300px", 
    "text-align": "right" }, "slow");


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