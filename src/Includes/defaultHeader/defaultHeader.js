$(document).ready(function() {
    $('.defaultHeader__burger').click(function(event){
        $('.defaultHeader__burger').toggleClass('active');
        $('.defaultHeader__navList').toggleClass('active');
    });
});