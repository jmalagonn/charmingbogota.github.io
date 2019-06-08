function getSize()
{
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    
    document.getElementById("hero").style.height = windowHeight + "px";
    document.getElementById("hero").style.width = windowWidth + "px";
}

