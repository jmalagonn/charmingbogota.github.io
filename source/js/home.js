function getSize()
{
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    console.log(windowWidth < 575.98);
    document.getElementById("hero").style.height = windowHeight + "px";
    
    if(windowWidth < 575.98){
        document.getElementById("nav").classList.add("justify-content-center");
    }

    if(windowWidth < 600){
        document.getElementById("breakfast-promo").style.width = windowWidth - 100 + "px";
    }else{
        document.getElementById("breakfast-promo").style.width = 600 + "px";
    }
}

