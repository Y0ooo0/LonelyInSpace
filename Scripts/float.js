function float() {
    
    var astronaut = document.getElementById("astronaut");
    var change_height = .125;
    var height = 50;
    var speed = setInterval(frame, 100);
    
    function frame() {        
        height = height + change_height;
        astronaut.style.top = height + "%";   
        if (height == 55) {
            change_height = -.125;
        }
        else if (height == 45) {
            change_height = .125;
        }
    }
}