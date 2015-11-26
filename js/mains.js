var h=$(window).height();
$(".headpic").css("height",h)

console.log("h:"+h);

screen_w=$( window ).width();


//Scroll




var hh = h*.5;
var s;









//MENU HIDE

// $("#wrapper").toggleClass("toggled");
// $(".logo").animate({left:-159},1000);
// $(".social").animate({left:159},1200);
// $(".ligh-flags").animate({left:20},1200);
// $(".menu").animate({left:-159},600);


// MENU TOOGLE 


  function abrir(){
            
            $("#wrapper").toggleClass("toggled");
            $(".logo").animate({left:-159},1000);
           $(".social").animate({left:159},1200);
           $(".ligh-flags").animate({left:20},1200);
            flagT=false;
  }

  function cerrar(){
          
           $("#wrapper").toggleClass("toggled");
          $(".logo").animate({left:0},1000);
          $(".social").animate({left:314},900);
          $(".ligh-flags").animate({left:156},300);
          flagT=true;
          change();

  }








flagT=true;

$("#menu-toggle").click(function() {

        
       	if (flagT==true) {
       		 abrir();
       	}else{
       		cerrar();

       	}



    });



//MENU FUNCTIONS

//BTNS



$("#somos").click(function(){
  abrir();
  $('html, body').animate({
        scrollTop: $(".titles").offset().top -20
    }, 1000);
});


$("#servicios").click(function(){
  abrir();
  $('html, body').animate({
        scrollTop: $(".serv_t").offset().top -20
    }, 1000);
});

$("#book").click(function(){
  abrir();
  $('html, body').animate({
        scrollTop: $(".carousel").offset().top -20
    }, 1000);
});

$("#contacto").click(function(){
  abrir();
  $('html, body').animate({
        scrollTop: $(".btn_contact").offset().top -20
    }, 1000);
});

//hover
$("#somos").mouseover(function(){
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
   "n. <span class='cyan' nm='1' id='item-frase'> faculty of seeing </span>into inner character ",
   "n. <span class='cyan' nm='2' id='item-frase'>an understanding  </span>of the motivational ",
   "n. <span class='cyan' nm='3' id='item-frase'> penetrating mental vision</span> or discernment"
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


//lIMITS MENU



if (screen_w < 750) {

$(".logo").animate({left:-129},1000);
$(".ligh-flags").remove();
$(".social").animate({left:189},1200);
$(".env").click(function(){
    var email = 'contacto@insight.mx';
    var subject = 'INSIGHT WEB';
    var emailBody = 'web';
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
});




}else{





//     Mail

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

$("#mailto").click(function(){



$.post( "php/mail.php", { name: $("#name").val(), mail: $("#mail").val(), msj: $("#msj").val() })
  .done(function( data ) {
    

   $(".form").empty();
$(".form").append("<h2 class='mensaje'>¡HEMOS RECIBIDO TU MENSAJE!</h2>");


  });



});






// --------------------SCROLL CIRCLE


$( window ).scroll(function() {

          if(screen_w < 640){

            left_c=30;
            right_c=30;

            }else{

            left_c=42;
            right_c=60;

            }


           s=$(window).scrollTop();
          console.log("s:"+s);

            if ( s > hh ) {
              
              $(".side_r").animate({left:left_c},2000);
              $(".side_l").animate({right:right_c},2000);
            };

          

});


//-------------------------












  
  }







 //ROUTES

var app = $.sammy(function() {

   // will run at #/route but not at #

   this.get('#/somos', function() {
    $('html, body').animate({
        scrollTop: $(".titles").offset().top -20
    }, 1000);
   });

   this.get('#/servicios', function() {
    $('html, body').animate({
        scrollTop: $(".serv_t").offset().top -20
    }, 1000);
   });

    this.get('#/book', function() {
    $('html, body').animate({
        scrollTop: $(".carousel").offset().top -20
    }, 1000);
   });

    this.get('#/contacto', function() {
    $('html, body').animate({
        scrollTop: $(".btn_contact").offset().top -20
    }, 1000); 
   });

 });
 


$(function() { // document.ready
   app.run();
});




// MENSAJE



//popbox

// var c1="<p class='cont text-justify'>Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod.</p>";

// $("#ConsultoriaDigital").click(function(){

//  $(this).append(c1);

// });



//AJUSTAR
function ajustar(){
  var serv_mod_left=$(".s_left").height();
  var serv_mod_right=$(".s_right").height();;


 while( serv_mod_right !== serv_mod_left){

    if(serv_mod_left > serv_mod_right){$(".s_right").animate({minHeight: serv_mod_left},500);}
    if(serv_mod_left < serv_mod_right){$(".s_left").animate({minHeight: serv_mod_right},500);}
    break;

  }

};

function wait(){

  setTimeout(
  function() 
  {
    ajustar();
  }, 351);
  //351

}


for (var i = 0; i < 16; i++) {

i=String(i);
console.log(i);
  
$('#collapse'+ i).on('show.bs.collapse', function () {
  wait();
})


};




