$(document).ready(function(){
    let nextButton = '.roomCard__scrollButton--right';
    let pevButton = '.roomCard__scrollButton--left';

    $(this).find('.roomCard__photoList').each(function(){
        $(this).removeClass('roomCard__photoList--noJs');   //Если JS подключен, снимаем класс-заглушку
        $(this).find('.roomCard__photo:first').addClass('roomCard__photo--current');    //Если JS подключен, ставим первому фото класс Current

        $(this).parent().find('.roomCard__punktMark:first').addClass('roomCard__punktMark--current');    //Если JS подключен, ищем первую метку и ставим ей класс Current
    });

    // $(nextButton).click(function(){
    //     let $currentPhoto = $(this).parent().find('.roomCard__photo.roomCard__photo--current');
    //     $currentPhoto.removeClass('roomCard__photo--current');
    //     $currentPhoto.next('.roomCard__photo').addClass('roomCard__photo--current');

    //     if ( $(this).parent().find('.roomCard__photo').last().hasClass("roomCard__photo--current") ) {
    //         $currentPhoto.removeClass('roomCard__photo--current');
    //         $(this).parent().find('.roomCard__photo').first().addClass('roomCard__photo--current');
    //     }


    //     if ($currentPhoto.next('.roomCard__photo').get(0)) {
    //         $(this).parent().find('.roomCard__photo:first').addClass('roomCard__photo--current');
    //     }
    // });

    $(nextButton).click(function(){
        let $currentPhoto = $(this).parent().find('.roomCard__photo.roomCard__photo--current');
        //Поиск относительно нажатой кнопки первого фото с классом Current
        let $currentMark = $(this).parent().find('.roomCard__punktMark.roomCard__punktMark--current');
        //Поиск относительно нажатой кнопки первой метки с классом Current

        if ( $(this).parent().find('.roomCard__photo').last().hasClass("roomCard__photo--current") ) {
            $currentPhoto.removeClass('roomCard__photo--current');
            $(this).parent().find('.roomCard__photo').first().addClass('roomCard__photo--current');

            $currentMark.removeClass('roomCard__punktMark--current');
            $(this).parent().find('.roomCard__punktMark').first().addClass('roomCard__punktMark--current');;

        } else {
            $currentPhoto.removeClass('roomCard__photo--current');
            $currentPhoto.next('.roomCard__photo').addClass('roomCard__photo--current');

            $currentMark.removeClass('roomCard__punktMark--current');
            $currentMark.next('.roomCard__punktMark').addClass('roomCard__punktMark--current');
        }

    });

    $(pevButton).click(function(){
        let $currentPhoto = $(this).parent().find('.roomCard__photo.roomCard__photo--current');
        //Поиск относительно нажатой кнопки первого фото с классом Current
        let $currentMark = $(this).parent().find('.roomCard__punktMark.roomCard__punktMark--current');
        //Поиск относительно нажатой кнопки первой метки с классом Current

        if ( $(this).parent().find('.roomCard__photo').first().hasClass("roomCard__photo--current") ) {
            $currentPhoto.removeClass('roomCard__photo--current');
            $(this).parent().find('.roomCard__photo').last().addClass('roomCard__photo--current');

            $currentMark.removeClass('roomCard__punktMark--current');
            $(this).parent().find('.roomCard__punktMark').last().addClass('roomCard__punktMark--current');;

        } else {
            $currentPhoto.removeClass('roomCard__photo--current');
            $currentPhoto.prev('.roomCard__photo').addClass('roomCard__photo--current');

            $currentMark.removeClass('roomCard__punktMark--current');
            $currentMark.prev('.roomCard__punktMark').addClass('roomCard__punktMark--current');
        }

    });
});