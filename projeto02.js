
function rank_jogador(vitoria){
    if(vitoria <= 10){
        rank = 'Ferro';
    } else if(vitoria > 10 && vitoria <= 20){
        rank = 'Bronze';
    } else if (vitoria > 21 && vitoria <= 50){
        rank = 'Prata';
    } else if (vitoria > 51 && vitoria <= 80){
        rank = 'Ouro';
    }else if (vitoria > 81 && vitoria <= 90){
        rank = 'Diamante';
    } else if (vitoria > 91 && vitoria <= 100){
        rank = 'Lendario';
    } else if (vitoria >= 101){
        rank = 'Imortal';
    } 
    return rank
}

console.log(rank_jogador(58));