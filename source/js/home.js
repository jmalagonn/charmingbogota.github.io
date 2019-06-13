function getSize() {
    let windowHeight = window.innerHeight;
    document.getElementById("inner-menu").style.display = "none";

    if( document.getElementById("hero") != null ){
        document.getElementById("hero").style.height = windowHeight + "px";
    }

    if (document.getElementById("inner-menu") != null) {
        document.getElementById("inner-menu").style.height = windowHeight + "px";
    }
}

function showMenu() {
    let element = document.getElementById("inner-menu");
    if (element.style.display === "none"){
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }
}

