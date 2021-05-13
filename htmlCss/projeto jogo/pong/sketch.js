//Variaveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 20;
let raio     = dBolinha/2

//velocidade bolinha
let veloYBolinha = 3
let veloXBolinha = 3

//Variaveis Raquete
let xRaquete = 10
let yRaquete = 150
let largRaquete = 10
let altRaquete = 90

//variaveis raquete oponente
let xRaqueteopo   = 580
let yRaqueteopo   = 150
let largRaqueteopo= 10
let altRaqueteopo = 90
let velocidadeYopo;
let chanceDeErrar = 0

//sons
// let raquetada;
// let ponto;
// let trilha;

// function preload(){
//   trilha = loadSound("trilha.mp3");
//   ponto = loadSound("ponto.mp3");
//   raquetada = loadSound("raquetada.mp3");
// }

let colidiu = false;

//placar do jogo
let meusPontos = 0
let pontosOponente = 0


 function setup() {
 createCanvas(600, 400);
//   trilha.loop();
 }

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentoRaquete();
  movimentoRaqueteopo();
  mostraRaqueteopo();
  colisaoRaquetes( xRaquete, yRaquete );
  colisaoRaquetes( xRaqueteopo, yRaqueteopo );
  incluirPlacar();
  marcaPonto();
  calculoChanceErro();
}

function calculoChanceErro(){
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    //ponto.play();
  }
  if (xBolinha < 10){
    pontosOponente+= 1;
   // ponto.play();
  }
}
function incluirPlacar(){
  stroke(255)
  textAlign(CENTER)
  textSize(30);
  fill(color(255,140,0))
  rect(130, 10, 40, 40);
  rect(430, 10, 40, 40);
  fill(255);
  text(meusPontos, 150 , 40);
  text(pontosOponente, 450, 40);
}
function mostraBolinha(){
  circle (xBolinha, yBolinha, dBolinha);
  
}
function movimentoBolinha(){
  xBolinha += veloXBolinha;
  yBolinha += veloYBolinha;

}
function verificaColisaoBorda(){
    
  if (xBolinha + raio > width || xBolinha - raio < 0){
    veloXBolinha*= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    veloYBolinha*= -1;
  }
}
function mostraRaquete(){
  rect(xRaquete, yRaquete , largRaquete, altRaquete);
}
function mostraRaqueteopo(){
   rect(xRaqueteopo, yRaqueteopo , largRaqueteopo, altRaqueteopo);
}
function movimentoRaquete(){
  
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 6;
  }  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 6;
  }
}
function movimentoRaqueteopo(){
  velocidadeYopo = yBolinha - yRaqueteopo - largRaqueteopo /2 - 30
  yRaqueteopo += velocidadeYopo + chanceDeErrar
  calculoChanceErro();
}
function verificaColisao(){
  
   if (xBolinha - raio < xRaquete + largRaquete && yBolinha - raio < yRaquete + largRaquete && yBolinha + raio > yRaquete ){
    veloXBolinha*= -1;
     
  }
}
function colisaoRaquetes( x, y ){
  colidiu = 
  
  collideRectCircle(x, y, largRaquete, altRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    veloXBolinha*= -1;
    //raquetada.play()
  }  
}
