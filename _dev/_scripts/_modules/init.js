$(document).ready(function() {
    if ($('.slider__list').length) {

    $('.slider__list').bxSlider({
        pager: false,
        nextText : 'Cлед.',
        prevText : ' Пред.'


      });
   }
   if($('.feedback__row-select').length) {
        $('.feedback__row-select').simpleSelect();
    }
   if($('.feedback__row-select2').length) {
        $('.feedback__row-select2').simpleSelect();
    }
    if($('.selectbox__dropdown').length) {
        $('.selectbox__dropdown').jScrollPane();
    }

});