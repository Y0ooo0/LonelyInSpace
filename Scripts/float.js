function float() {
    
    var astronaut = document.getElementById("astronaut");
    var change_height = .25;
    var height = 50;
    var speed = setInterval(frame, 500);
    
    function frame() {        
        height = height + change_height;
        astronaut.style.top = height + "%";   
        if (height == 52) {
            change_height = -.25;
        }
        else if (height == 48) {
            change_height = .25;
        }
    }
}