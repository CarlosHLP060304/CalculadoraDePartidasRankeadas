let victories =  20
let loses = 5
let balance = calculateBalance(victories,loses)
let rank = returnsRank()


function calculateBalance(victories,loses) {
    return victories - loses
}

function returnsRank() {
    let rank  
    if(balance<10)
        rank = "Ferro"
    else if(balance>11 && balance<20)
        rank = "Bronze"
    else if(balance>21 && balance<50)
        rank = "Prata"
    else if(balance>51 && balance<80)
        rank = "Ouro"
    else if(balance>81 && balance<90)
        rank = "Diamante"
    else if(balance>91 && balance<100)
        rank = "Lendário"
    else if(balance>=101)
        rank = "Imortal"
    return rank
}



console.log(`O Herói tem saldo de ${balance}, está no nível de ${rank}`)
