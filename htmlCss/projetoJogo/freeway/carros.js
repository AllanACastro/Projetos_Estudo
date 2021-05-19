let yCarros = [40, 95, 150 , 210, 260, 315];
let xCarros = [600, 430, 350 , 300, 550, 500];
let VelocidadeCarros = [4 , 3.5 , 2.5 , 3.5 , 3, 3.5];
let comprimentoCarro = 50
let alturaCarro = 40


function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i ++ ){                 image(imagemCarros[i], xCarros[i], yCarros[i] , comprimentoCarro , alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0 ; i < imagemCarros.length; i ++){
    xCarros[i] -= VelocidadeCarros[i]
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0 ; i < imagemCarros.length; i++){
    if (passouTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTela (xCarro){
   return xCarro < -40;
   
}