'use strict';

// Tasks to de done:

// 1. roll dice: creates a random numner btw 1 and 6 and add it to current number except for 1
// 2. if roll dice is 1 current score =  0  and player switches
// 3. hold: hold will add the current score to the player score and switch player
// 4. reset: reset game
// 5. who ever reaches 100 first wins

//DOM nodes
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const p0Current = document.querySelector('#current--0');
const p0Score = document.querySelector('#score--0');
const p1Current = document.querySelector('#current--1');
const p1Score = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//variables
let diceDraw;
let playerFlag = 0;
diceImg.classList.add('hidden');
//code
btnRollDice.addEventListener('click',() => {
    diceImg.classList.remove('hidden');
    diceDraw = Math.floor(Math.random()*6)+1;
    diceImg.src = `dice-${diceDraw}.png`;
    console.log(diceDraw);
    if(playerFlag===0){
        if(diceDraw!==1){
            p0Current.textContent = diceDraw + parseInt(p0Current.textContent);
        }
        else{
            p0Current.textContent=0;
            playerFlag=1;
            player0.classList.remove('player--active')
            player1.classList.add('player--active');
        }
    }
    else{
        if(diceDraw!==1){
            p1Current.textContent = diceDraw + parseInt(p1Current.textContent);
        }
        else{
            p1Current.textContent=0;
            playerFlag=0;
            player1.classList.remove('player--active')
            player0.classList.add('player--active');
        }
    }
})

btnHold.addEventListener('click',() => {
    if(playerFlag===0){
        p0Score.textContent = parseInt(p0Current.textContent) + parseInt(p0Score.textContent);
        if(parseInt(p0Score.textContent)>=100){
            player0.classList.add('player--winner');
            btnHold.disabled = true;
            btnRollDice.disabled = true;
        }
        else{
            p0Current.textContent=0;
            playerFlag=1;
            player0.classList.remove('player--active')
            player1.classList.add('player--active');
        }
        
    }
    else{
        p1Score.textContent = parseInt(p1Current.textContent) + parseInt(p1Score.textContent);
        if(parseInt(p1Score.textContent)>=100){
            player1.classList.add('player--winner');
            btnHold.disabled = true;
            btnRollDice.disabled = true;
        }
        else{
            p1Current.textContent=0;
            playerFlag=0;
            player1.classList.remove('player--active')
            player0.classList.add('player--active');
        }
        
    }
})

btnNewGame.addEventListener('click',() => {
    p0Current.textContent = 0;
    p1Current.textContent = 0;
    p1Score.textContent = 0;
    p0Score.textContent = 0;
    player1.classList.remove('player--active')
    player0.classList.add('player--active');
    playerFlag=0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    btnHold.disabled = false;
    btnRollDice.disabled = false;
    diceImg.classList.add('hidden');
})