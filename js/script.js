let pageoneinpute = document.querySelector('.pageoneinpute')
console.log(pageoneinpute);
let gamebtn = document.querySelector('.startgamebtn')
console.log(gamebtn);
let error = document.querySelector('.error')
console.log(error);
let pagetwoinpute = document.querySelector('.pagetwoinpute')
console.log(pagetwoinpute);
let output1 = document.getElementById('output1')
let pageone = document.querySelector('.pageone')
let pagetwo = document.querySelector('.pagetwo')
let playbtn = document.querySelector('.playbtn')
console.log(playbtn);
let pagethree = document.querySelector('.pagethree')
let guess = document.querySelector('.guessbtn')
let pagethreeinpute = document.querySelector('.pagethreeinpute')
let result = document.querySelector('.game-result')
let chance = document.querySelector('.chance')
let count = 5;

function a1(){
    output1.innerHTML = pageoneinpute.value
}
gamebtn.addEventListener('click',a1)

gamebtn.addEventListener('click',function (){
    if(pageoneinpute.value == ''){
        error.innerHTML = 'Write Your Name First';
    }else{
        console.log(pageoneinpute.value);
        pagetwo.style.display = 'block';
        pageone.style.display = 'none';
    }
})

playbtn.addEventListener('click', function () {
    if(pagetwoinpute.value<1 || pagetwoinpute.value>10){
        console.log('ERROR');
    }else{
        console.log(pagetwoinpute.value);
        if(pagetwoinpute.value - 20){
          console.log('valid');
          pagethree.style.display = 'block';
          pagetwo.style.display = 'none';
        }else{
            console.log('GAAAAB');
        }
    }

})

guess.addEventListener('click', function () {
    if(pagethreeinpute.value == pagetwoinpute.value){
        result.style.display = 'block'
        pagethree.style.display = 'none'
        gameResult.innerHTML = 'PLAYER TWO WINS'
    }else{
      console.log('player-1 wins');
      count--;
      chance.innerHTML = count;
      if(count == 0){
        count = 0;
        chance.innerHTML = 'Game Over';
        
      }
    }
})