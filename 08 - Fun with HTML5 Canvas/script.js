const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
const clear = document.querySelector(".new");
const brush = document.querySelector(".brush-fix");
const colorFix = document.querySelector(".color-fix");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 1;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let fixed = false;
let colorFixed = false;

function draw(e) {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    if (!colorFixed){
        hue++;
    }
    if (hue >= 360){
        hue = 0;
    }

    if (ctx.lineWidth >= 200 || ctx.lineWidth <= 1){
        direction = !direction;
    }

    if (!fixed) {
        if(direction){
            ctx.lineWidth++;
        } else {
            ctx.lineWidth--;
        }
    }
    
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

clear.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
brush.addEventListener('click', () => {
    fixed = !fixed
    brush.classList.toggle("clicked");
});
colorFix.addEventListener('click', () => {
    colorFixed = !colorFixed;
    colorFix.classList.toggle("clicked");
});