// Obtén el contexto del lienzo (canvas)
var canvas = document.getElementById("canvas"); // Asegúrate de tener un elemento HTML con el id "canvas"
var ctx = canvas.getContext("2d");

// Configura el fondo
ctx.fillStyle = "bisque";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Función para dibujar un círculo
function drawCircle(x, y, radius, startAngle, endAngle, fillColor) {
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.closePath();
}

// Función para dibujar una línea
function drawLine(x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
}

// Dibuja la figura principal
drawCircle(100, 200, 10, 0, Math.PI, "yellow");
drawCircle(100, 200, 25, 0, Math.PI, "yellow");
drawCircle(140, 130, 60, 0.87, 2.36, "yellow");
drawCircle(80, 160, 20, 1.92, 3.31, "yellow");
drawLine(80, 160, 100, 200, "yellow");
drawLine(120, 160, 100, 200, "yellow");

// Agrega texto
ctx.font = "italic 45px Stencil";
ctx.fillStyle = "black";
ctx.fillText("PARA TI MI BB MARILYN!!", canvas.width / 2, 310);

// Dibuja el corazón
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(400, 310);
ctx.arc(370, 310, 30, 0.87, 2.36);
ctx.arc(430, 310, 30, 0.87, 2.36);
ctx.lineTo(400, 380);
ctx.fill();

// Cierra la ventana al hacer clic en ella
canvas.addEventListener("click", function () {
    window.close();
});
