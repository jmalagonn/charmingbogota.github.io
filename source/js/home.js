function getSize() {
    let windowHeight = window.innerHeight;
    
    if( $("#inner-menu") != null)
        $("#inner-menu").css({ 'display':'none'}); 

    if( $("#hero") != null ){
        $("#hero").css({ 'height' : windowHeight + 'px'});
    }

    if ($("#inner-menu") != null) {
        $("#inner-menu").css({ 'height': windowHeight + 'px'});
    }

    if ($("#detail-breakfast") != null) {
        $("#detail-breakfast").css({ 'display': 'none' });
    }

    if ($("#additionals-block") != null) {
        $("#additionals-block").css({ 'display': 'none' });
    }
}

function show(id) {
    $("#" + id).css('display') === 'none' ? $("#" + id).css({ 'display': 'block' }) : $("#" + id).css({ 'display': 'none' });
}

function showAdditionals(cond) {
    if ($("#additionals-block").css('display') === 'none' && cond === 'yesAddition'){
        $("#additionals-block").css({ 'display': 'block' })
    } else if($("#additionals-block").css('display') === 'block' && cond === 'yesAddition'){
        $("#additionals-block").css({ 'display': 'block' });
    } else {
        $("#additionals-block").css({ 'display': 'none' });
    }
}

