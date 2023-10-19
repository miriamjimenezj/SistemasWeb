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

//EventListeners
document.addEventListener('keydown', function (evt) {
    keys[evt.code] = true;
  });
  document.addEventListener('keyup', function (evt) {
    keys[evt.code] = false;
  });


//Jugador
class Player {
    constructor (x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w; //width
        this.h = h; //height
        this.c = c; //color
    
        this.dy = 0; //velocidad de salto
        this.jumpForce = 20; //fuerza de salto
        this.originalHeight = h;
        this.grounded = false;
    }
    // Animacion
    Animate(){
        //Saltar
        if(keys['Space']){
            this.Jump();
        }

        this.y += this.dy;
        
        // Gravedad
        if(this.y +  this.h < canvas.height){
            this.dy += gravity;
            this.grounded = false;
        }else{
            this.dy = 0;
            this.grounded = true;
            this.y = canvas.height - this.h;
        }
        this.Draw();
    }

    Jump(){
        if(this.grounded){
            this.dy = -this.jumpForce;
        }
    }

    // Dibujar jugador 
    Draw() {
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

    player = new Player(25, canvas.height -150, 50, 50, '#FF5858');
    
    requestAnimationFrame(Update);
  }

  function Update () {
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    player.Animate();
  }
  Start();