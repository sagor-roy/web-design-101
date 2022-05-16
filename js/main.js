$(document).ready(function(){
    $('#open').on('click',function(e){
        e.preventDefault();
        $('#sidebar').css('transform','translateX(0px)');
        $('#bg_layer').show();
    })

    $('#close').on('click',function(e){
        e.preventDefault();
        $('#sidebar').css('transform','translateX(310px)');
        $('#bg_layer').hide();
    })

    $('#bg_layer').on('click',function(e){
        e.preventDefault();
        $('#sidebar').css('transform','translateX(310px)');
        $(this).hide();
    })
})