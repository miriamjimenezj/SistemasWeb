const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Variables
let score;
let highscore;
let player;
let gravity;
let obstacles;
let gameSpeed;
let keys = {};

//Jugador
class Player {
    constructor (x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w; //width
        this.h = h; //height
        this.c = c; //color
    
        this.dy = 0; //velocidad de salto
        this.jumpForce = 15; //fuerza de salto
        this.originalHeight = h;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
      }
}

function Start () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.font = "20px sans-serif";
  
    gameSpeed = 3; //velocidad del juego
    gravity = 1;
    score = 0;
    highscore = 0;

    player = new Player(25, 0, 50, 50, '#FF5858');
    player.draw();
  }

  Start();