//height- altura
//width- largura//||- ou
//keyIsDown- serve quando a tecla é apertada

//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variáveis do movimento
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5; 

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90; 

//variavel do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background("black");
 mostraBolinha();
  movimentoBolinha();
  //height - altura
  //width - largura
  //|| - ou
  colisaoBolinhaBorda();
  raquete(xRaquete, yRaquete);
  raquete(xRaqueteOponente, yRaqueteOponente);
  movimentoRaquete();
  colisaoRaquete2(xRaquete, yRaquete);
  colisaoRaquete2(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  placar();
  marcaPonto();
}

function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBolinhaBorda(){
   if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}
function raquete(x, y){
rect(x, y,raqueteComprimento,raqueteAltura);
  }
    
  function movimentoRaquete(){
    if (keyIsDown(UP_ARROW)){
      yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
    }
  }

function colisaoRaquete2(x, y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){velocidadeXBolinha *= -1;
  }
  raquetada.play();
}

function movimentaRaqueteOponente(){
   if (keyIsDown(87)){
      yRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
      yRaqueteOponente += 10;
}
}

function placar(){
  textSize(16);
  textAlign(CENTER)
  fill("orange");
  rect(130, 10, 40, 20);
  fill("white");
  text(meusPontos, 150, 26);
  fill("orange");
  rect(430, 10, 40, 20);
  fill("white");
  text(pontosOponente, 450, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
  if(xBolinha < 10){
    pontosOponente += 1;
    ponto.play();
  }
}

