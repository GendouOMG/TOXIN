function numNameChange(quantity, nameList) {
    let quantityMod = 0;
    quantityMod = quantity % 10;
        if (!quantity) {
            return('');
        }

        if (quantity > 10 && quantity < 21) { 
            return(nameList[2]); 
        } else {
            // if (varQuantity1 > 1 && varQuantity1 < 5) { nameQ=' гостя'; }
            if (quantityMod == 1) {
                return(nameList[0]);
            } else {
                if(quantityMod > 1 && quantityMod < 5){
                    return (nameList[1]);
                } else {
                    return(nameList[2]);
                }
            }
        }
    
}

function changeHeadline() {
    let currentMode = $(this).closest('.itemQuantityDropdown').data('mode'); //current "script" mode
    let itemQuantity = 0; //summ all lists items quantity
    let thisItemQuantity = 0; //current item quantity
    // let itemQuantityMod = 0;
    let itemName = ''; //special variation of name for current item quantity
    let retuenedName='';

    let numNamesGuest = [' гость',' гостя',' гостей'];
    let numBedroom = [' спальня', ' спальни', ' спален'];
    let numBed = [' кровать', ' кровати', ' кроватей'];
    let numBathroom = [' ванная комната', ' ванные комнаты', ' ванных комнат'];

    $(this).closest('.itemQuantityDropdown').find('.itemQuantityDropdown__currentQuantity').each(function(){
        itemQuantity = itemQuantity+(+$(this).html());        
    });


    if(currentMode == 'eachItems'){
        if(itemQuantity) {
            retuenedName='';
            $(this).closest('.itemQuantityDropdown').find('.itemQuantityDropdown__menuOption').each(function() {              
                thisItemQuantity = +$(this).children('.itemQuantityDropdown__currentQuantity').html();
                // itemQuantity
                // alert(thisItemQuantity);
                itemName = $(this).children('.itemQuantityDropdown__item').html();
                // alert(itemName);
                if(itemName.toLowerCase().startsWith("спал")){
                    // alert(itemName);    
                    itemName = numNameChange(thisItemQuantity,numBedroom);    
                }
                if(itemName.toLowerCase().startsWith("кров")) {
                    itemName = numNameChange(thisItemQuantity,numBed);    
                }
                if(itemName.toLowerCase().startsWith("ванн")) {
                    itemName = numNameChange(thisItemQuantity,numBathroom);    
                }
                if (thisItemQuantity) {
                    retuenedName = retuenedName + thisItemQuantity + itemName + ', ';
                }
            });
            retuenedName = retuenedName.slice(0,-2);
            $(this).closest('.itemQuantityDropdown').find('.itemQuantityDropdown__selection').html(retuenedName);
        }
        else {
            $(this).closest('.itemQuantityDropdown').find('.itemQuantityDropdown__selection').html('Выберите удобства');
        }
    }
    else {

        retuenedName = numNameChange(itemQuantity,numNamesGuest);


        $(this).closest('.itemQuantityDropdown').find('.itemQuantityDropdown__selection').html(itemQuantity+retuenedName);

        if (itemQuantity == 0) {
            $(this).closest('.itemQuantityDropdown').find('.itemQuantityDropdown__selection').html('Сколько гостей');

            $(this).closest('.itemQuantityDropdown__dropdownMenu').find('.itemQuantityDropdown__controlButton--minus').prop('disabled',true);
            $(this).closest('.itemQuantityDropdown__dropdownMenu').find('.itemQuantityDropdown__clearButton').css("display","none");
        } else {
            $(this).closest('.itemQuantityDropdown__dropdownMenu').find('.itemQuantityDropdown__clearButton').css("display","block");
        }
    }
}

$(document).ready(function(){
    let listToggle = '.itemQuantityDropdown__toggle';
    let hiddenList = '.itemQuantityDropdown__dropdownMenu';

    let plusButton = '.itemQuantityDropdown__controlButton--plus';
    let minusButton = '.itemQuantityDropdown__controlButton--minus';
    let currentQuantity ='.itemQuantityDropdown__currentQuantity';

    $(this).find('.itemQuantityDropdown__dropdownMenu').each(function(){
        changeHeadline.call(this);

        $(this).find(currentQuantity).each(function(){
            if(!(+$(this).html())) {
                $(this).siblings(minusButton).prop('disabled',true);
            }
            else {
                $(this).siblings(minusButton).prop('disabled',false);
            }
        });
    });

    $(listToggle).click(function(){
        // $(this).siblings(hiddenList).toggleClass('visually-hidden');
        $(this).siblings(hiddenList).slideToggle('fast');
    });

    $(plusButton).click(function(){
        let varQuantity = 0;

        varQuantity = +$(this).siblings(currentQuantity).html();
        varQuantity++;
        $(this).siblings(currentQuantity).html(varQuantity);
        if(varQuantity) {
            $(this).siblings(minusButton).prop('disabled',false);
        }

        changeHeadline.call(this);
        
    });

    $(minusButton).click(function(){
        let varQuantity = 0;

        varQuantity = +$(this).siblings(currentQuantity).html();
        if(varQuantity) {
            varQuantity--;
            $(this).siblings(currentQuantity).html(varQuantity);
        }
        if(!varQuantity) {
            $(this).prop('disabled',true);
        }

        changeHeadline.call(this);
        // alert(varQuantity);
    });

    $('.itemQuantityDropdown__applyButton').click(function(){
        $(this).closest(hiddenList).slideToggle('fast');
    });

    $('.itemQuantityDropdown__clearButton').click(function(){
        $(this).closest(hiddenList).find(currentQuantity).html(0);
        changeHeadline.call(this);
    });

});
