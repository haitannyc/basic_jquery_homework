// JQuery Cheatsheet

// jQuery is a fast, small, and feature-rich JavaScript library. 
// It makes things like HTML document traversal and manipulation,
// event handling, animation

// For doc and examples
// https://api.jquery.com/

// Google hosted  jquery library

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

// By encapsulating all of our jQuery code to only run when the document is ready, 
// the elements you're selecting will definitely be on the page when you access them  

$(document).ready(function() {
  
});

// JQuery Syntax -- $(selector).someAction()
//                  $--- calls for jQuery, (selector) to get html element, .someAction() what happens

                    // $(selector) ex.('h1'), ('a'),('#myID'),('.myclass')
                    // .someAction ex. $(selector).click() --trigger that event on element
                    //                 $(selector).hide() --Hide the matched elements.
                    //                 $(selector).show() --Display the matched elements.
                    //                 $(selector).fadeOut() --Hide the matched elements by fading them to transparent.
                    //                 $(selector).slideUp() --Hide the matched elements with a sliding motion.

                //  -----------------------------------------------------
                //  slideDown()--method is used to slide down an element.
                // $("#flip").click(function(){
                //     $("#panel").slideDown();
                // });
                // -------------------------------------------------------

                    // mouseenter()----he function is executed when the mouse pointer enters the HTML element:
                    // $("#p1").mouseenter(function(){
                    //     alert("You entered p1!");
                    //     });

                    // hover()---method takes two functions and is a combination of the mouseenter() and mouseleave() methods.
                    // $("#p1").hover(function(){
                    //     alert("You entered p1!");
                    // },
                    // function(){
                    //     alert("Bye! You now leave p1!");
                    // });
                      
        //  ---- ----- The animate() method performs a custom animation of a set of CSS properties.

        //             $("button").click(function(){
        //                 $("#box").animate({height: "300px"});
        //             });

        //             Properties that can be animated:

        //             backgroundPositionX
        //             backgroundPositionY
        //             borderWidth
        //             borderBottomWidth
        //             borderLeftWidth
        //             borderRightWidth
        //             borderTopWidth
        //             borderSpacing
        //             margin
        //             marginBottom
        //             marginLeft
        //             marginRight
        //             marginTop
        //             outlineWidth
        //             padding
        //             paddingBottom
        //             paddingLeft
        //             paddingRight
        //             paddingTop
        //             height
        //             width
        //             maxHeight
        //             maxWidth
        //             minHeight
        //             minWidth
        //             fontSize
        //             bottom
        //             left
        //             right
        //             top
        //             letterSpacing
        //             wordSpacing
        //             lineHeight
        // --------    textIndent

 // ________________________________________________
        
// making a circle move across page with a delay  
// $("#circle").css({"left": "150px", -- start position
//              "top": "400px",
//             "position": "absolute",    ----
//             "background-color": "green", ----color circle
//             "border-radius": "50%",   ---turns element to circle
//             "width": "200px",        -----set size if circle
//             "height": "200px",       
//             "margin-top": "none"

//            })
//            .delay(1000).animate({"left":"+=100vw"},"slow");

// ____________________________________________________



// More examples of snyntax
// -----------------

// stop() Method--method is used to stop an animation or effect before it is finished.

// $("#stop").click(function(){
//     $("#panel").stop();
// });
// -----------------
// Get the <button> element with the class 'continue' and change its HTML to 'Next Step...'

// more ex $( "button.continue" ).html( "Next Step..." )

// $('element').animate( {
//   opacity:.5,
//   width:"40%"
//   }, 2000);


// Help with jquery @ http://learn.jquery.com/using-jquery-core/faq/
