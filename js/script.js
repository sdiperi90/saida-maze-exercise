var ball = document.getElementById("mazemove1");

function play() {
    // insert code here
    var posX = 67;
    var posY = 0;
    var id = setInterval(frame, 3);
    function frame() {
        if (posY == 240) {
        } else {
            posY++;
            ball.style.top = posY + "px";
        }

        if (posX < 127) {
            posX++;
            ball.style.left = posX + "px";
        }

        if (posY < 300) {
            posY++;
            ball.style.top = posY + "px";
        }
        if (posX > 67) {
            posX--;
            ball.style.left = posX + "px";
        }
    }
}
