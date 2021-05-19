//imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

let somDaTrilha;
let somColisao;
let somPonto;



function preload(){
  imagemDaEstrada  = loadImage("imagens/estrada.png");
  imagemDoAtor     = loadImage("imagens/ator-1.png");
  imagemCarro      = loadImage("imagens/carro-1.png");
  imagemCarro2     = loadImage("imagens/carro-2.png");
  imagemCarro3     = loadImage("imagens/carro-3.png");
  imagemCarro4     = loadImage("imagens/carro-1.png");
  imagemCarro5     = loadImage("imagens/carro-2.png");
  imagemCarro6     = loadImage("imagens/carro-3.png");
  somDaTrilha      = loadSound("sons/trilha.mp3");
  somColisao       = loadSound("sons/colidiu.mp3");
  somPonto         = loadSound("sons/pontos.wav");
  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6 ];
}