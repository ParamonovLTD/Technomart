
var linkMap = document.querySelector('.contacts__map');

var popupMap = document.querySelector('.popup-map');
// var close = popupMap.querySelector('.popup-close');

if (linkMap !== null) {
  linkMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.add('popup-show');
  });
};

if (popupMap !== null) {
  let close = popupMap.querySelector('.popup-close');
  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupMap.classList.remove('popup-show');
  });
};

if (popupMap !== null) {
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains('popup-show')) {
        evt.preventDefault();
        popupMap.classList.remove('popup-show');
      };
    };
  });
};

var linkForm = document.querySelector('.contacts__btn');

var popupForm = document.querySelector('.popup-form');
// var closeForm = popupForm.querySelector('.popup-close');

if (linkForm !== null) {
  linkForm.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupForm.classList.add('popup-show');
  });
};

if (popupForm !== null) {
  let close = popupForm.querySelector('.popup-close');
  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupForm.classList.remove('popup-show');
  });
};

if (popupForm !== null) {
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popupForm.classList.contains('popup-show')) {
        evt.preventDefault();
        popupForm.classList.remove('popup-show');
      };
    };
  });
};

var linkSubmit = document.querySelectorAll('.card__buy');

var popupSubmit = document.querySelector('.popup-submit');
// var closeSubmit = popupSubmit.querySelector('.popup-close');
// var closeBtn = popupSubmit.querySelector('.popup-submit__close');

if (linkSubmit !== null) {
  linkSubmit.forEach(function (element) {
    element.addEventListener('click', function (evt) {
      evt.preventDefault();
      popupSubmit.classList.add('popup-show');
    });
  });
};

if (popupSubmit !== null) {
  let close = popupSubmit.querySelector('.popup-close');
  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupSubmit.classList.remove('popup-show');
  });
};

if (popupSubmit !== null) {
  let close = popupSubmit.querySelector('.popup-submit__close');
  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupSubmit.classList.remove('popup-show');
  });
};

if (popupSubmit !== null) {
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popupSubmit.classList.contains('popup-show')) {
        evt.preventDefault();
        popupSubmit.classList.remove('popup-show');
      };
    };
  });
};
$('.range__strip').slider({
  min: 0,
  max: 35000,
  values: [0, 30000],
  range: true,
  animate: 'fast',
  slide : function(event, ui) {
      $('.range__value-left').val(ui.values[ 0 ]);
      $('.range__value-right').val(ui.values[ 1 ]);
  }
});
$('.range__value-left').val($('.range__strip').slider('values', 0));
$('.range__value-right').val($('.range__strip').slider('values', 1));
$(document).focusout(function() {
  var input_left = $('.range__value-left').val().replace(/[^0-9]/g, ''),
  opt_left = $('.range__strip').slider('option', 'min'),
  where_right = $('.range__strip').slider('values', 1),
  input_right = $('.range__value-right').val().replace(/[^0-9]/g, ''),
  opt_right = $('.range__strip').slider('option', 'max'),
  where_left = $('.range__strip').slider('values', 0);
  if (input_left > where_right) {
      input_left = where_right;
  }
  if (input_left < opt_left) {
      input_left = opt_left;
  }
  if (input_left == '') {
  input_left = 0;
  }
  if (input_right < where_left) {
      input_right = where_left;
  }
  if (input_right > opt_right) {
      input_right = opt_right;
  }
  if (input_right == '') {
  input_right = 0;
  }
  $('.range__value-left').val(input_left);
  $('.range__value-right').val(input_right);
  $('.range__strip').slider( 'values', [ input_left, input_right ] );
});
