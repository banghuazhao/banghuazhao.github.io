<!-- Copyright: 2019 Banghua Zhao -->
<!-- Contact: banghua.zhao@gmail.com -->


<!-- Lazy loading images -->

$(function() {
  $('.lazy').lazy({
    onError: function(element) {
        console.log('error loading ' + element.data('src'));
    }
  });
});



<!-- navigation bar event -->

$(document).ready(() => {

  <!-- nav scroll to id -->

  $('.nav-link').on('click', function (event) {
      event.preventDefault();

      var anchorY = $($(this).attr('href')).offset().top

      if ((Math.abs(window.scrollY-anchorY)) < 1000) {
          $('html, body').animate({
              scrollTop: anchorY - 100
          }, Math.abs(window.scrollY-anchorY)*0.5, 'linear');
      } else {
          $('html, body').animate({
              scrollTop: anchorY - 100
          }, 500, 'linear');
      }

      $(this).on('mouseenter', () => {
        $(this).css('color', 'rgba(255,255,255,0.8)');
      }).on('mouseleave', () => {
        $(this).css('color', 'rgba(255,255,255,0.5)');
      })

  });

  <!-- Close navbar toggler after clicking navbar item (only for mobile size screen) -->

  $('.nav-item').on('click', () => {
    if(document.documentElement.clientWidth <= 576) {
      $('.navbar-toggler').click();
    }
  })


});



<!-- mouse event for profile box -->

$(document).ready(() => {

  <!-- Change profile picture :p -->

  $('.prof-pic').on('mouseenter', () => {

    $('.prof-pic').attr("src","./img/profile2.jpeg");

  }).on('mouseleave', () => {

    $('.prof-pic').attr("src","./img/profile1.jpg");

  })

  <!-- Change My name to Chinese -->

  $('#my-name').on('mouseenter', () => {
    $('#my-name').html('赵邦华')
  }).on('mouseleave', () => {
    $('#my-name').html('Banghua Zhao')
  })

  <!-- Change social icon size when mouse enter or leave -->

  $('.fab').on('mouseenter', event => {
    $(event.currentTarget).animate({
      fontSize: '50px',
      padding: '0px'
    }, 200)
  }).on('mouseleave', event => {
    $(event.currentTarget).animate({
      fontSize: '40px',
      padding: '10px'
    }, 200)
  })

  <!-- Change resume button when mouseover -->

  $('.btn-rounded-white').on('mouseenter', event => {
    $(event.currentTarget).css({
      backgroundColor: 'white',
      color: 'blue'
    })
  }).on('mouseleave', event => {
    $(event.currentTarget).css({
      backgroundColor: 'transparent',
      color: 'white'
    })
  })

})



<!-- Add scroll-based animation for elements -->

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


$(function () {
  $('[data-toggle="popover"]').popover()
})
