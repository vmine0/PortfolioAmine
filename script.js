$(document).ready(function(){
    // Navigation entre sections
    $('.nav-link').click(function(e){
        e.preventDefault();
        let target = $(this).data('target');
        $('.section').removeClass('active');
        $('#' + target).addClass('active');
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    });

    // Formulaire contact
    $('#contactForm').submit(function(e){
        e.preventDefault();
        alert('Merci ! Votre message a été envoyé.');
        $(this).trigger('reset');
    });
});