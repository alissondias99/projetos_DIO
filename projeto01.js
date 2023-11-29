let nome_heroi = 'Gekko';
let xp = 5050;

if(xp > 1001 && xp < 2000){
    nivel = 'Bronza';
} else if(xp >2001 && xp < 5000){
    nivel = 'Prata';
}   else if(xp > 5001 && xp < 7000){
    nivel = 'Ouro';
}   else if(xp > 7001 && xp < 8000){
    nivel = 'Platina';
}   else if(xp > 8001  && xp < 9000){
    nivel = 'Ascendente';
}   else if(xp > 9001 && xp < 10000){
    nivel = 'Imortal';
}   else if(xp > 10000){
    nivel = 'Radiante';
} else {
    nivel = 'Ferro';
}

console.log('O nivel do ' + nome_heroi + ' é ' + nivel);
    