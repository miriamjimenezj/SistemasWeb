const canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const mainAreaWidth = 400;
const mainAreaHeight = 400;
let horizontalPadding = (window.innerWidth - mainAreaWidth) / 2;
let verticalPadding = (window.innerHeight - mainAreaHeight) / 2;
//Funcion que dibuja todo en la ventana
function draw(){
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.save();
    ctx.translate(horizontalPadding, verticalPadding + mainAreaHeight);
    //dibujamos globo
    drawBallon();
    ctx.restore();
}
draw();

//Función que dibuja el globo
function drawBallon(){
    //Carro formado por 2 rectángulos
    ctx.fillStyle = "#DB504A"; //color rectangulo de arriba
    ctx.fillRect(-30, -40, 60, 10);
    ctx.fillStyle = "#EA9E8D";
    ctx.fillRect(-30, -30, 60, 30);

    //Cuerdas
    ctx.strokeStyle = "#D62828";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-24, -40);
    ctx.lineTo(-24, -60);
    ctx.moveTo(24, -40);
    ctx.lineTo(24, -60);
    ctx.stroke();

    //Globo
    ctx.fillStyle = "#D62828";
    ctx.beginPath();
    ctx.moveTo(-30, -60);
    ctx.quadraticCurveTo(-80, -120, -80, -160);
    ctx.arc(0, -160, 80, Math.PI, 0, false);
    ctx.quadraticCurveTo(80, -120, 30, -60);
    ctx.closePath();
    ctx.fill();
}

//Generamos datos de los árboles y los almacenamos en una matriz
let trees = [];
function generateTree() {
    const minGap = 50; //Distancia minima entre 2 arboles
    const maxGap = 600; //Distancia maxima entre 2 arboles
    
    const x = trees.length
        ? trees[trees.lenght -1].x +
            minGap +
            Math.floor(Math.random() * (maxGap - minGap))
        : 400;    

    const h = 60 + Math.random() * 80; //altura

    const r1 = 32 + Math.random() * 16; //radios
    const r2 = 32 + Math.random() * 16;
    const r3 = 32 + Math.random() * 16;
    const r4 = 32 + Math.random() * 16;
    const r5 = 32 + Math.random() * 16;
    const r6 = 32 + Math.random() * 16;
    const r7 = 32 + Math.random() * 16;

    const treeColors = ["#6D8821", "8FAC34", "#98B333"];
    const color = treeColors[Math.floor(Math.random() * 3)];

    trees.push({h, r1, r2, r3, r4, r5, r6, r7, color});
}
generateTree();
generateTree();
generateTree();

//Función que dibuja los árboles
function drawTrees(){
    trees.forEach(({hh, r1, r2, r3, r4, r5, r6, r7, color}) => {
        ctx.save();
        ctx.translate(x,0);
        
        //Tronco
        const TrunkWidth = 40;
        ctx.fillStyle = "#885F37";
        ctx.beginPath();
        ctx.moveTo(-TrunkWidth / 2, 0);
        ctx.quadraticCurveTo(-TrunkWidth / 4, -h / 2, -TrunkWidth / 2, -h);
        ctx.lineTo(TrunkWidth / 2, -h);
        ctx.quadraticCurveTo(TrunkWidth / 4, -h / 2, TrunkWidth / 2, 0);
        ctx.closePath();
        ctx.fill();

        //Copa
        ctx.fillStyle = color;
        drawCircle(-20, -h - 15, r1);
        drawCircle(-30, -h - 25, r2);
        drawCircle(-20, -h - 35, r3);
        drawCircle(0, -h - 45, r4);
        drawCircle(20, -h - 35, r5);
        drawCircle(30, -h - 25, r6);
        drawCircle(20, -h - 15, r7);

        ctx.restore();
    });
}

//Funcion que dibuja los circulos
function drawCircle(cx,cy,radius){
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2*Math.PI);
    ctx.fill();
}