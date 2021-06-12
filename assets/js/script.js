var animate_middle = new TimelineLite({paused: true});

animate_middle
  .from(".middle-layer", 0.5, {
    transformOrigin:"50% 50%", 
    scale: "0"
  }, 0, 0)

  .from(".middle-layer .button-group", 0.75, {
    transformOrigin: "50% 50%",
    rotation: "-=135"
  }, 0, 0)
  
  .from("middle-layer .button-group", 0.5, {
    opacity: "0"
  }, 0, 0)
;

// Outside layer - Outside layer menu background
var animate_outside = new TimelineLite({paused: true});

animate_outside
  .from(".outside-layer", 0.5, {
    transformOrigin:"50% 50%", 
    scale: "0"
  }, 0, 0)
;

// Home Buttons
var animate_home = new TimelineLite({paused: true});

animate_home
  .staggerFrom(".home-menu g", 0.5, {
    transformOrigin:"50% 50%",
    opacity: "0",
    scale: "0"
  }, 0.125, 0.25)
;

// More Buttons
var animate_more = new TimelineLite({paused: true});

animate_more
  .staggerFrom(".more-menu g", 0.5, {
    transformOrigin:"50% 50%",
    opacity: "0",
    scale: "0"
  }, 0.125, 0.25)
;

// Settings Buttons
var animate_settings = new TimelineLite({paused: true});

animate_settings
  .staggerFrom(".settings-menu g", 0.5, {
    transformOrigin:"50% 50%",
    opacity: "0",
    scale: "0"
  }, 0.125, 0.25)
;

// FAQ Buttons
var animate_faq = new TimelineLite({paused: true});

animate_faq
  .staggerFrom(".faq-menu g", 0.5, {
    transformOrigin:"50% 50%",
    opacity: "0",
    scale: "0"
  }, 0.125, 0.25)
;

// Interaction

// Variables
var menuOpen = false;
var outsideCircleOpen = false;
var homeOpen = false;
var faqOpen = false;
var settingsOpen = false;
var moreOpen = false;

// Main (Center) Button
$('.main-menu').click(function() {
  
  if(menuOpen == false) {
    
    $('.main-menu').addClass('is-active');
    animate_middle.play();
    menuOpen = true;
  
  } else {
    
    $('.middle-layer [class*="-button"]').removeClass('is-active');
    $('.outside-layer [class*="-button"]').removeClass('is-active');

    setTimeout(function() {
      $('.main-menu').removeClass('is-active');
    }, 750);
    
    animate_middle.reverse();
    animate_outside.reverse();

    animate_home.reverse();
    animate_faq.reverse();
    animate_settings.reverse();
    animate_more.reverse();
    
    // reset all variables
    menuOpen = false;
    outsideCircleOpen = false;
    homeOpen = false;
    faqOpen = false;
    settingsOpen = false;
    moreOpen = false;
  
  }
  
});

// Home Button
$('.home-button').click(function() {
  
  if(homeOpen == false) {
    
    if(outsideCircleOpen == false) {
      animate_outside.play();
    }
    
    animate_home.play();

    outsideCircleOpen = true;
    homeOpen = true;

    animate_faq.reverse();
    animate_settings.reverse();
    animate_more.reverse();

    $(this).addClass('is-active');
    
  } else {
    homeOpen = false;
    outsideCircleOpen = false;
    animate_outside.reverse();
    animate_home.reverse();
  }

  faqOpen = false;
  settingsOpen = false;
  moreOpen = false;
  
});

// FAQ Button
$('.faq-button').click(function() {

  if(faqOpen == false) {
    
    if(outsideCircleOpen == false) {
      animate_outside.play();
    }

    animate_faq.play()
    
    outsideCircleOpen = true;
    faqOpen = true;

    animate_home.reverse();
    animate_settings.reverse();
    animate_more.reverse();

    $(this).addClass('is-active');
    
  } else {
    faqOpen = false;
    outsideCircleOpen = false;
    animate_outside.reverse();
    animate_faq.reverse();
  }
  
  homeOpen = false;
  settingsOpen = false;
  moreOpen = false;

});

// Settings Button
$('.settings-button').click(function() {

  if(settingsOpen == false) {
    
    if(outsideCircleOpen == false) {
      animate_outside.play();
    }
    
    animate_settings.play();

    outsideCircleOpen = true;
    settingsOpen = true;
    
    animate_faq.reverse();
    animate_home.reverse();
    animate_more.reverse();

    $(this).addClass('is-active');

  } else {
    settingsOpen = false;
    outsideCircleOpen = false;
    animate_outside.reverse();
    animate_settings.reverse();
  }
  
  homeOpen = false;
  faqOpen = false;
  moreOpen = false;
  
});

// More Button
$('.more-button').click(function() {

  if(moreOpen == false) {
    
    if(outsideCircleOpen == false) {
      animate_outside.play();
    }

    animate_more.play();
    
    outsideCircleOpen = true;
    moreOpen = true;

    animate_faq.reverse();
    animate_home.reverse();
    animate_settings.reverse();

    $(this).addClass('is-active');
    
  } else {
    moreOpen = false;
    outsideCircleOpen = false;
    animate_outside.reverse();
    animate_more.reverse();
  }
  
  homeOpen = false;
  settingsOpen = false;
  faqOpen = false;
  
});

// Middle Layer Active States
$('.middle-layer [class*="-button"]').click(function(){

  $('.middle-layer [class*="-button"]').removeClass('is-active');
  $('.outside-layer [class*="-button"]').removeClass('is-active');
  $(this).addClass('is-active');

});

//Outside Layer Active States
$('.outside-layer [class*="-button"]').click(function(){

  $('.outside-layer [class*="-button"]').removeClass('is-active');
  $(this).addClass('is-active');

});


// Modal for about me button
var modal = document.getElementById("home");
// Modal for portfolio button
var modal1 = document.getElementById("portfolio1");
// Modal for connect button
var modal2 = document.getElementById("connect2");
// Modal for hobbies button
var modal3 = document.getElementById("hobbies3");

// Get the button that opens the modal for about me
var btn = document.getElementById("btn home-button");
// Get the button that opens the modal for portfolio
var btn1 = document.getElementById("btn1 portfolio-button");
// Get the button that opens the modal for connect
var btn2 = document.getElementById("btn2 connect-button");
// Get the button that opens the modal for hobbies
var btn3 = document.getElementById("btn3 hobbies-button");

// Get the <span> element that closes the modal for about me
var span = document.getElementsByClassName("close")[0];
// Get the <span> element that closes the modal for portfolio
var span1 = document.getElementsByClassName("close1")[0];
// Get the <span> element that closes the modal for connect
var span2 = document.getElementsByClassName("close2")[0];
// Get the <span> element that closes the modal hobbies
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal for about me
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on the button, open the modal for portfolio
btn1.onclick = function() {
  modal1.style.display = "block";
}
// When the user clicks on the button, open the modal for connect
btn2.onclick = function() {
  modal2.style.display = "block";
}
// When the user clicks on the button, open the modal for hobbies
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal about me
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks on <span1> (x), close the modal portfolio
span1.onclick = function() {
  modal1.style.display = "none";
}
// When the user clicks on <span2> (x), close the modal connect
span2.onclick = function() {
  modal2.style.display = "none";
}
// When the user clicks on <span3> (x), close the modal hobbies
span3.onclick = function() {
  modal3.style.display = "none";
}

// (about me close modal, when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // (portfolio close modal, when the user clicks anywhere outside of the modal, close it
  } if (event.target == modal1) {
    modal1.style.display = "none";
    // (connect close modal, when the user clicks anywhere outside of the modal, close it
  } if (event.target == modal2) {
    modal2.style.display = "none";
    // (hobbies close modal, when the user clicks anywhere outside of the modal, close it
  } if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// document.getElementsByClassName("tablink")[0].click();

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove();
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add();
}
