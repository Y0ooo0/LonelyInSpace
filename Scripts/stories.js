function disappear(image) {
    var imageObject = document.getElementById(image); 
    var opa = 1;
    var speed = setInterval(frame, 300);

    function frame() {
        imageObject.style.opacity = opa;
        opa -= .1;
        if (opa < 0) {
            console.log("hello")
            imageObject.parentNode.removeChild(imageObject);
        }
    }
}

function changeWindow() {
    document.body.classList.add("stories");
    
    disappear('astronaut');
    disappear('space');
}