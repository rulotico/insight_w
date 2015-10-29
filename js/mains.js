var h=$(window).height();
$(".headpic").css("height",h)

console.log(h);




//Scroll

var hh = h*.5;

$( window ).scroll(function() {
  				var s=$(window).scrollTop();
  				console.log(s);
          





            if ( s > hh ) {
              console.log("hola");
              $(".side_r").animate({left:42},2000);
              $(".side_l").animate({right:60},2000);

            };


});



//MENU HIDE

// $("#wrapper").toggleClass("toggled");
// $(".logo").animate({left:-159},1000);
// $(".social").animate({left:159},1200);
// $(".ligh-flags").animate({left:20},1200);
// $(".menu").animate({left:-159},600);


// MENU TOOGLE 

flagT=true;

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
       
       	if (flagT==true) {
       		 $(".logo").animate({left:-159},1000);
       		 $(".social").animate({left:159},1200);
       		 $(".ligh-flags").animate({left:20},1200);
        	flagT=false;
       	}else{
       		$(".logo").animate({left:0},1000);
       		$(".social").animate({left:314},900);
       		$(".ligh-flags").animate({left:156},300);
        	flagT=true;
       	}

    });



//MENU FUNCTIONS

//BTNS



$("#quien").click(function(){
  $('html, body').animate({
        scrollTop: $(".titles").offset().top -20
    }, 1000);
});


$("#servicios").click(function(){
  $('html, body').animate({
        scrollTop: $(".serv_t").offset().top -20
    }, 1000);
});

$("#book").click(function(){
  $('html, body').animate({
        scrollTop: $(".carousel").offset().top -20
    }, 1000);
});

$("#contacto").click(function(){
  $('html, body').animate({
        scrollTop: $(".btn_contact").offset().top -20
    }, 1000);
});

//hover
$("#quien").mouseover(function(){
  $("#l1").css("background-color","#3AFEFF");
}).mouseleave(function(){
  $("#l1").css("background-color","#E5E5E5");
});


$("#servicios").mouseover(function(){
$("#l2").css("background-color","#3AFEFF");
}).mouseleave(function(){
  $("#l2").css("background-color","#E5E5E5");
});

$("#book").mouseover(function(){
$("#l3").css("background-color","#3AFEFF");
}).mouseleave(function(){
  $("#l3").css("background-color","#E5E5E5");
});

$("#contacto").mouseover(function(){
$("#l4").css("background-color","#3AFEFF");
}).mouseleave(function(){
  $("#l4").css("background-color","#E5E5E5");
});













//SOCIAL

$("#face").mouseover(function(){

$(this).attr("src","images/face_c.png");
$(this).css("opacity",0);
$(this).animate({opacity:1},500);



});

$("#twitter").mouseover(function(){

$(this).attr("src","images/twitter_c.png")
$(this).css("opacity",0);
$(this).animate({opacity:1},500);

});

$("#face").mouseleave(function(){

$(this).attr("src","images/face.png")
$(this).css("opacity",0);
$(this).animate({opacity:1},500);

});

$("#twitter").mouseleave(function(){

$(this).attr("src","images/twitter.png")
$(this).css("opacity",0);
$(this).animate({opacity:1},500);

});


// SIDES





//contact
$(".btn_contact").mouseover(function(){
$(".icn_mail").animate({paddingTop:32},500); 
$(".env").css("display","inherit");
$(".form").css("display","initial");
$(".f1,.f2,.f3").css("opacity",1);

});


$(".btn_contact").mouseleave(function(){
$(".form").css("display","none");
$(".env").css("display","none");
$(".icn_mail").animate({paddingTop:32},200); 

});








//PULSE FOR BUTTONS{

function pulse(id){
 
$(id).mouseover(function(){
  $(this).addClass("animated pulse");
});

$(id).mouseleave(function(){
  $(this).removeClass("animated pulse");
});
console.log("hola");
}



var frases=[
   "n. <span class='cyan' nm='0' id='item-frase'>The power</span> or act of seeing into a situation",
   "n. <span class='cyan' nm='1' id='item-frase'>The power</span> po",
   "n. <span class='cyan' nm='2' id='item-frase'>The power</span> pj",
   "n. <span class='cyan' nm='3' id='item-frase'>The power</span> osdn",
   "n. <span class='cyan' nm='4' id='item-frase'>The power</span> uation",
]



$(".frase").append(frases[0]);

function change(){
  nm=$("#item-frase").attr("nm");
  nm=parseInt(nm);

  var loong=frases.length;
  $(".frase").empty();

  
    if (nm + 2 <= loong) {
      $(".frase").append(frases[nm+1]);
    } else{
      $(".frase").append(frases[0]);
    };
  



}





