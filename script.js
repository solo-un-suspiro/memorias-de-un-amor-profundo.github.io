document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('cakeCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;

    let t = 0;
    const totalFrames = 200;

    function drawCake() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw base of the cake
        if (t > totalFrames * 0.25) {
            ctx.beginPath();
            ctx.rect(100, 300, 200, 50);
            ctx.fillStyle = "#8e24aa";
            ctx.fill();
            ctx.strokeStyle = "#6a1b9a";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        // Draw the middle layer of the cake
        if (t > totalFrames * 0.5) {
            ctx.beginPath();
            ctx.rect(125, 250, 150, 50);
            ctx.fillStyle = "#ce93d8";
            ctx.fill();
            ctx.strokeStyle = "#6a1b9a";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        // Draw the top layer of the cake
        if (t > totalFrames * 0.75) {
            ctx.beginPath();
            ctx.rect(150, 200, 100, 50);
            ctx.fillStyle = "#ba68c8";
            ctx.fill();
            ctx.strokeStyle = "#6a1b9a";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        // Draw candles
        if (t > totalFrames) {
            ctx.beginPath();
            ctx.moveTo(170, 180);
            ctx.lineTo(170, 200);
            ctx.moveTo(230, 180);
            ctx.lineTo(230, 200);
            ctx.strokeStyle = "#ffb74d";
            ctx.lineWidth = 4;
            ctx.stroke();
        }

        if (t <= totalFrames) {
            t += 1;
            requestAnimationFrame(drawCake);
        }
    }

    drawCake();
});
