jQuery( document ).ready(function( $ ) {


	"use strict";


  $.fn.multiline = function(text){
    this.text(text);
    
    // this.html(this.html().replace(/\[b\]/g,'<b>').replace(/\[\/b\]/g,'</b>'));    
    
    // console.log(this.html(this.html().replace([strong]/g,'b')));
    console.log(this.html());
    // this.html(this.html().replace(/&lt;/g,'<'));
    console.log(this.html());
    // this.html(this.html().replace(/&gt;/g,'>'));
    console.log(this.html());
    // this.html(this.html().replace(/<\/b>/g,'</b>'));
    this.html(this.html().replace(/\n/g,'<br/>'));
    console.log(this.html());
   
    return this;
}

// animation on chart on main page


  $(".circle").hover(function(){
      
  var curve =  $(".circle");

  if(this.className.indexOf('bar-circle-one')>-1){
    return;
  }
  
        for (var i = 0; i < curve.length; ++i) {     
        if($(curve[i]).hasClass("active")){          
          $(curve[i]).removeClass('active');
        }
      }
      
      $(this).addClass('active');

      if(this.className.indexOf('one')>-1){
        var head =  $(".milestone-head");
        var para =  $(".milestone-para");
        
        $(head).text('1-2 VA’s');
        $(para).html('You’re Able To </br> Maintain Your Business</br></br> <b>Estimated Time Savings: 20 hours a week.</b>')
       
        var screenwidth=$(window).width();
        console.log('screen1: '+ screenwidth);
       
        
        if(screenwidth<399){

          $(":root").css("--dynamic-width", "45px");
          $(":root").css("--range-ball-left", "45px");
  
        }
        else{
          $(":root").css("--dynamic-width", "50px");
          $(":root").css("--range-ball-left", "45px");
  
        }
        
      }
      else if(this.className.indexOf('two')>-1){
        var head =  $(".milestone-head");
        var para =  $(".milestone-para");

        $(head).text('3-5 VA’s');
        $(para).html('Time To Catch<br\>Your Breath; where is your business going next?<br\><br\>  <b>Estimated Time Savings:<br\> 40-80 hours a week</b>');
      
        // var rangeBall =  $("#range-ball");
        // rangeBall.css("--dynamic-width",'205px');
       
        var screenwidth=$(window).width();
        console.log('screen2: '+ screenwidth);
       
        
        if(screenwidth<399){

          $(":root").css("--dynamic-width", "137.5px");
          $(":root").css("--range-ball-left", "137.5px");
  
        }
        else{
          $(":root").css("--dynamic-width", "195px");
          $(":root").css("--range-ball-left", "195px");
  
        }

      }
      else if(this.className.indexOf('three')>-1){

        var head =  $(".milestone-head");
        var para =  $(".milestone-para");

        $(head).text('5-10 VA’s');
        $(para).html('Launching your <br\> next product?<br\> Entering a New Market? No problem.<br\><br\>  <b>Estimated Time Savings:<br\> 80 – 200 hours a week</b>');
      
        // var rangeBall =  $("#range-ball");
        // rangeBall.css("--dynamic-width",'350px');
        var screenwidth=$(window).width();
        console.log('screen: '+ screenwidth);
       
        
        if(screenwidth<399){

          $(":root").css("--dynamic-width", "250px");
          $(":root").css("--range-ball-left", "240px");
  
        }
        else{
          $(":root").css("--dynamic-width", "340px");
          $(":root").css("--range-ball-left", "340px");
  
        }

      }
      else if(this.className.indexOf('four')>-1){
        var head =  $(".milestone-head");
        var para =  $(".milestone-para");

        $(head).text('10+VA’s');
        $(para).html('Running your business<br\>from the beach doesn’t sound too bad<br\><br\>  <b>Estimated Time Savings:<br\> 200+ hours a week </b>');
      
      
      var screenwidth=$(window).width();
        console.log('screen: '+ screenwidth);
       
        if(screenwidth<399){

          $(":root").css("--dynamic-width", "320px");
          $(":root").css("--range-ball-left", "315px");
  
        }
        else{
          $(":root").css("--dynamic-width", "460px");
          $(":root").css("--range-ball-left", "460px");
  
        }

      }
  });

    // end of animation on chart on main page 
        $(function() {
            $( "#tabs" ).tabs();
        });


        // Page loading animation

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
        

        $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var box = $('.header-text').height();
          var header = $('header').height();

          if (scroll >= box - header) {
            $("header").addClass("background-header");
            // $("logo").addClass("add-colorlogo");
          } else {
            $("header").removeClass("background-header");
            // $("logo").removeClass("add-colorlogo");
          }

          const solutionfield1 = document.querySelector('.solutionfield1')


          if(window.pageYOffset + window.innerHeight >= solutionfield1.offsetTop + solutionfield1.offsetHeight / 2) {
            console.log(solutionfield1.offsetTop + solutionfield1.offsetHeight / 2);
            solutionfield1.classList.add('change');
          }
          else{
            solutionfield1.classList.remove('change');
          }

        });


		if ($('.owl-testimonials').length) {
            $('.owl-testimonials').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 2,
                        margin: 30
                    }
                }
            });
        }
        if ($('.owl-partners').length) {
            $('.owl-partners').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 4,
                        margin: 30
                    }
                }
            });
        }

        $(".Modern-Slider").slick({
            autoplay:true,
            autoplaySpeed:10000,
            speed:600,
            slidesToShow:1,
            slidesToScroll:1,
            pauseOnHover:false,
            dots:true,
            pauseOnDotsHover:true,
            cssEase:'linear',
           // fade:true,
            draggable:false,
            prevArrow:'<button class="PrevArrow"></button>',
            nextArrow:'<button class="NextArrow"></button>', 
        });

        function visible(partial) {
            var $t = partial,
                $w = jQuery(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

            return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

        }

        $(window).scroll(function(){

          if(visible($('.count-digit')))
            {
              if($('.count-digit').hasClass('counter-loaded')) return;
              $('.count-digit').addClass('counter-loaded');
              
        $('.count-digit').each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        }


        if(visible($('.count-digit-percent')))
            {
              if($('.count-digit-percent').hasClass('counter-loaded')) return;
              $('.count-digit-percent').addClass('counter-loaded');
              
        $('.count-digit-percent').each(function () {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 3000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter) + "%");
            }
          });
        });
        }
    })

    
 
});
