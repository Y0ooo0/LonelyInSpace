function createRandomStars(stars, radius) {
    
    var starField = document.getElementById("starField");
    starField.width = window.innerWidth - 100;
    starField.height = window.innerHeight - 100;
    var context = starField.getContext("2d");

    for (var i = 0; i <= stars; i++) {
        context.beginPath();
        var rand_x = Math.random(i) * window.innerWidth;
        var rand_y = Math.random(i) * window.innerHeight;
        context.arc(rand_x, rand_y, radius, 0, 2 * Math.PI);
        context.fillStyle = "white"
        context.fill();
        context.closePath();
    }
}