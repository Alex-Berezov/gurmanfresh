/* Scroll menu */
$(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top-70}, 1500);
        });
    });

(function($){
  $(function() {
    $('.nav__icon').on('click', function() {
      $(this).closest('.nav').toggleClass('nav_state_open');
    });
  });
})(jQuery);

$(document).ready(function(){
        $("#desc_menu").on("click","a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top-70}, 1500);
        });
    });

$(document).ready(function(){
        $("#sticky_menu").on("click","a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top-70}, 1500);
        });
    });
/* End Scroll menu */

/* Slick slider */
$('.slideshow').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    fade: true,
    dots: true
});
/* End Slick slider */


/* Sticky header */

var limit = $(window).height() / 3,
      $stickyHeader = $('#sticky-header');

    $(window).scroll(function () {
      if ($(this).scrollTop() > limit) {
        $stickyHeader.fadeIn();
      } else {
        $stickyHeader.fadeOut();
      }
    });
/* End Sticky header */

/* Top Modal */
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/* End Top Modal */

/* Top Header Modal */
var modal = document.getElementById('myModal2');
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/* End Header Top Modal */

/* back-to-top */
var limit = $(window).height() / 3,
      $backToTop = $('#back-to-top');

    $(window).scroll(function () {
      if ($(this).scrollTop() > limit) {
        $backToTop.fadeIn();
      } else {
        $backToTop.fadeOut();
      }
    });

    // scroll body to 0px on click
    $backToTop.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1500);
      return false;
    });
/* End back-to-top */

/* Almetivsck Modal */
var modalAlmetivsck = document.getElementById('almetivsckModal');
var btnAlmetivsck = document.getElementById("almetivsckBtn");
var spanAlmetivsck = document.getElementsByClassName("closeAlmetivsck")[0];

btnAlmetivsck.onclick = function() {
    modalAlmetivsck.style.display = "block";
}

spanAlmetivsck.onclick = function() {
    modalAlmetivsck.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalAlmetivsck) {
        modalAlmetivsck.style.display = "none";
    }
}
/* End Almetivsck Modal */

/* Bugulma Modal */
var modalBugulma = document.getElementById('bugulmaModal');
var btnBugulma = document.getElementById("bugulmaBtn");
var spanBugulma = document.getElementsByClassName("closeBugulma")[0];

btnBugulma.onclick = function() {
    modalBugulma.style.display = "block";
}

spanBugulma.onclick = function() {
    modalBugulma.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalBugulma) {
        modalBugulma.style.display = "none";
    }
}
/* End Bugulma Modal */

/* Chelni Modal */
var modalChelni = document.getElementById('сhelniModal');
var btnChelni = document.getElementById("сhelniBtn");
var spanChelni = document.getElementsByClassName("closeChelni")[0];

btnChelni.onclick = function() {
    modalChelni.style.display = "block";
}

spanChelni.onclick = function() {
    modalChelni.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalChelni) {
        modalChelni.style.display = "none";
    }
}
/* End Chelni Modal */

/* Elabuga Modal */
var modalElabuga = document.getElementById('elabugaModal');
var btnElabuga = document.getElementById("elabugaBtn");
var spanElabuga = document.getElementsByClassName("closeElabuga")[0];

btnElabuga.onclick = function() {
    modalElabuga.style.display = "block";
}

spanElabuga.onclick = function() {
    modalElabuga.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalElabuga) {
        modalElabuga.style.display = "none";
    }
}
/* End Elabuga Modal */

/* Kazan Modal */
var modalKazan = document.getElementById('kazanModal');
var btnKazan = document.getElementById("kazanBtn");
var spanKazan = document.getElementsByClassName("closeKazan")[0];

btnKazan.onclick = function() {
    modalKazan.style.display = "block";
}

spanKazan.onclick = function() {
    modalKazan.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalKazan) {
        modalKazan.style.display = "none";
    }
}
/* End Kazan Modal */

/* Nkamsck Modal */
var modalNkamsck = document.getElementById('nkamsckModal');
var btnNkamsck = document.getElementById("nkamsckBtn");
var spanNkamsck = document.getElementsByClassName("closeNkamsck")[0];

btnNkamsck.onclick = function() {
    modalNkamsck.style.display = "block";
}

spanNkamsck.onclick = function() {
    modalNkamsck.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalNkamsck) {
        modalNkamsck.style.display = "none";
    }
}
/* End Nkamsck Modal */

/* Samara Modal */
var modalSamara = document.getElementById('samaraModal');
var btnSamara = document.getElementById("samaraBtn");
var spanSamara = document.getElementsByClassName("closeSamara")[0];

btnSamara.onclick = function() {
    modalSamara.style.display = "block";
}

spanSamara.onclick = function() {
    modalSamara.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalSamara) {
        modalSamara.style.display = "none";
    }
}
/* End Samara Modal */

/* Ufa Modal */
var modalUfa = document.getElementById('ufaModal');
var btnUfa = document.getElementById("ufaBtn");
var spanUfa = document.getElementsByClassName("closeUfa")[0];

btnUfa.onclick = function() {
    modalUfa.style.display = "block";
}

spanUfa.onclick = function() {
    modalUfa.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalUfa) {
        modalUfa.style.display = "none";
    }
}
/* End Ufa Modal */

/* Ulyanovsk Modal */
var modalUlyanovsk = document.getElementById('ulyanovskModal');
var btnUlyanovsk = document.getElementById("ulyanovskBtn");
var spanUlyanovsk = document.getElementsByClassName("closeUlyanovsk")[0];

btnUlyanovsk.onclick = function() {
    modalUlyanovsk.style.display = "block";
}

spanUlyanovsk.onclick = function() {
    modalUlyanovsk.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalUlyanovsk) {
        modalUlyanovsk.style.display = "none";
    }
}
/* End Ulyanovsk Modal */

/* Mob map slider */

var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');

var slides = document.querySelectorAll('.delivery_mobile .gallery .delivery_mobile_slideshow .delivery_mobile_slide');
var i = 0;

btn_prev.onclick = function() {
    slides[i].className = 'delivery_mobile_slide';
    i--;
    if(i < 0) {
        i = slides.length - 1;
    }
    slides[i].className = 'delivery_mobile_slide showed';
}

btn_next.onclick = function() {
    slides[i].className = 'delivery_mobile_slide';
    i++;
    if(i >= slides.length) {
        i = 0;
    }
    slides[i].className = 'delivery_mobile_slide showed';
}

/* End Mob map slider */