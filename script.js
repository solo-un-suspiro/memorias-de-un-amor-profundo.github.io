document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('cakeCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;

    let t = 0;

    function drawCake() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw base of the cake
        if (t > 0) {
            ctx.beginPath();
            ctx.rect(150, 250, 100, 50);
            ctx.fillStyle = "#8e24aa";
            ctx.fill();
            ctx.strokeStyle = "#6a1b9a";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        // Draw the middle layer of the cake
        if (t > 1) {
            ctx.beginPath();
            ctx.rect(175, 200, 50, 50);
            ctx.fillStyle = "#ce93d8";
            ctx.fill();
            ctx.strokeStyle = "#6a1b9a";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        // Draw the top layer of the cake
        if (t > 2) {
            ctx.beginPath();
            ctx.arc(200, 180, 20, 0, Math.PI * 2, true);
            ctx.fillStyle = "#ba68c8";
            ctx.fill();
            ctx.strokeStyle = "#6a1b9a";
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        // Draw candles
        if (t > 3) {
            ctx.beginPath();
            ctx.moveTo(190, 150);
            ctx.lineTo(190, 170);
            ctx.moveTo(210, 150);
            ctx.lineTo(210, 170);
            ctx.strokeStyle = "#ffb74d";
            ctx.lineWidth = 4;
            ctx.stroke();
        }
        
        if (t < 4) {
            t += 0.02;
            requestAnimationFrame(drawCake);
        }
    }

    drawCake();
});
