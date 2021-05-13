let xAtor = 250
let yAtor = 370 
let co1isao = false
let meusPontos = 0


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30 );
}

function movimentoAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    if(limiteTela()){
      yAtor += 3
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      somColisao.play()
      voltaPosicao();
      if (pontosMaior()){
        meusPontos -= 1
      }
      
      
    }
  }
}
function pontosMaior(){
  return meusPontos > 0
}
function voltaPosicao(){
  yAtor = 366;
}
function incluiPontos(){
  fill(color(0 , 0, 100))
  textAlign(CENTER)
  textSize(25)
  text(meusPontos,width/5 , 25);
}
function marcaPonto(){
  if (yAtor < 30){
    meusPontos += 1
    somPonto.play();
    voltaPosicao();
  }
}
function limiteTela(){
  return yAtor < 370;
}


