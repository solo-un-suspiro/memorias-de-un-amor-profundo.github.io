document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('heartCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;

    function drawHeart() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(200, 200);
        for (let i = 0; i <= Math.PI * 2; i += 0.01) {
            let x = 16 * Math.sin(i) ** 3;
            let y = 13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i);
            ctx.lineTo(200 + x * 10, 200 - y * 10);
        }
        ctx.fillStyle = "#ff3366";
        ctx.fill();
    }

    drawHeart();
});
