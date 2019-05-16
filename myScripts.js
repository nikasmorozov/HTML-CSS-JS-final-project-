$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 72
        }, 800);
      } // End if
    });
  });

  // Cia features swiperis
  $(document).ready(function () {
    //initialize swiper when document ready
    var myFeaturesSwiper = new Swiper ('.features-swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });

    let controlTabs = document.querySelectorAll(".controlTab");
    controlTabs[0].classList.add("active");
  myFeaturesSwiper.on("slideChange", function () {
  let slideIndex = myFeaturesSwiper.activeIndex;

  for (let j=0; j < controlTabs.length; j++){
    controlTabs[j].classList.remove("active");
  }

  controlTabs[slideIndex].classList.add("active");
});

    //ciklas kuriame zymimi mygtuku ir slide'u active'ai
      for (let i = 0; i < controlTabs.length; i++) {
    
        // kas vyksta paspaudus
        controlTabs[i].addEventListener("click", function() {
    
          // Nuimami visi active'ai
          for (let j = 0; j < controlTabs.length; j++){
            controlTabs[j].classList.remove("active");
          }
    
          // uzdedamas active and pirmo mygtuko
          this.classList.add("active");
    
          // keiciami slaidai naudojantis atributais "data-slide" kurie yra html'e ant mygtuku
          let slideNumber = i;
          console.log(slideNumber);
          myFeaturesSwiper.slideTo(slideNumber, 500);
        })
      }
  });

  // Cia reviews swiperis
  $(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    })
  });


  function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Pleeeease fill all the fields");
      return false;
    }
  }

  function validateForm() {
    var x = document.forms["myForm"]["lname"].value;
    if (x == "") {
      alert("Pleeeease fill all the fields");
      return false;
    }
  }

  function validateForm() {
    var x = document.forms["myForm"]["telnumber"].value;
    if (x == "") {
      alert("Pleeeease fill all the fields");
      return false;
    }
  }

  function burgerMenu() {
    var x = document.getElementById("navMenu");
    if (x.className === "container") {
      x.className += "_responsive";
    } else {
      x.className = "container";
    }
  }
