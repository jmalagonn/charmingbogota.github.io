function getSize()
{
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    console.log(windowWidth < 575.98);
    document.getElementById("hero").style.height = windowHeight + "px";
    
    if(windowWidth < 575.98){
        document.getElementById("nav").classList.add("justify-content-center");
    }
}

