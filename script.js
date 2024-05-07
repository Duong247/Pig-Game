'use strict';

let currentPoint=0,score1=0,score2=0;

let player = 0;



let getScore = document.querySelectorAll('.score');
let getCurrentPoint = document.querySelectorAll('.current-score');
// console.log(getCurrentPoint);
let randomDice = Math.floor(Math.random()*6)+1;
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let getDice = document.querySelector('.dice');
// console.log(randomDice)

function swapPlayer(){
    if(player ===0){
        player=1;
        document.querySelector('.player--1').classList.add('player--active');      
        document.querySelector('.player--0').classList.remove('player--active');
    }else{
        player=0;
        document.querySelector('.player--0').classList.add('player--active');
        document.querySelector('.player--1').classList.remove('player--active');      
    }
}

function resetAllValue(){
    currentPoint=0;
    score1=0;
    score2=0;
    player = 0;
    for(let i=0;i<getScore.length;i++){
        getScore[i].textContent = 0;
        getCurrentPoint[i].textContent = 0;
    }
    getDice.classList.add('hidden')
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active'); 
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');

}

resetAllValue();


btnRoll.addEventListener('click',function(){
    if(score1 <=100 && score2<=100){

        randomDice = Math.floor(Math.random()*6)+1;
        getDice.classList.remove('hidden');
        getDice.src = `dice-${randomDice}.png`;
        // console.log(randomDice);
    
        if(randomDice != 1){
            if(player===0){
                currentPoint+=randomDice;
                getCurrentPoint[0].textContent=currentPoint;
                // console.log("c: "+currentPoint)
            }else{
                currentPoint+=randomDice;
                getCurrentPoint[1].textContent=currentPoint;
                // console.log("c: "+currentPoint)
            }
        }else{
            currentPoint=0;
            getCurrentPoint[player].textContent=currentPoint;
            swapPlayer();
        }
    }

})

btnNew.addEventListener('click',resetAllValue);

btnHold.addEventListener('click',function(){
    if(score1<=100 && score2<=100){
        if(player===0){
            if(score1 <=100 && score2<=100){
                score1 += currentPoint;
                document.getElementById("score--0").textContent = score1;
            }
        }else{
            if(score2<=100 && score1<=100)
            score2+=currentPoint
            document.getElementById("score--1").textContent = score2;
        }
        currentPoint=0;
        getCurrentPoint[player].textContent=currentPoint;
        swapPlayer();
    }
    if( score1 >= 100){
        document.querySelector('.player--0').classList.add('player--winner');
    }
    if(score2>=100){
        console.log(document.querySelector('.player--1'));
        document.querySelector('.player--1').classList.add('player--winner');
    }
})
