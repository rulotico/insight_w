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

$("#wrapper").toggleClass("toggled");
$(".logo").animate({left:-159},1000);
$(".social").animate({left:159},1200);
$(".ligh-flags").animate({left:20},1200);
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




