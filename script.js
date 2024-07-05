document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;

    let t = 0;

    function drawHeart() {
        if (t > Math.PI * 2) {
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(200, 200);

        for (let i = 0; i <= t; i += 0.01) {
            let x = 16 * Math.sin(i) ** 3;
            let y = 13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i);
            ctx.lineTo(200 + x * 10, 200 - y * 10);
        }

        ctx.strokeStyle = "#7b1fa2";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = "#7b1fa2";
        ctx.fill();

        t += 0.02;
        requestAnimationFrame(drawHeart);
    }

    drawHeart();
});
