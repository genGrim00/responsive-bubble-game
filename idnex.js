let timer = 60;
let score = 0;
let hitrn = Math.floor(Math.random()* 10);



function increaseScore() {
  score += 10;
  document.querySelector("#score-value").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random()* 10);
  document.querySelector('#hit-value').textContent = hitrn;
}

function makeBubble() {
  let clutter = ''
for(let i = 1; i < 91; i++) {
  let rn = Math.floor(Math.random() * 10);
  clutter += 
  `<div class="bubble">${rn}</div>`;
};

document.querySelector(".panel-bottom").innerHTML = clutter;
};

function runTime() {
let timerID = setInterval(() =>{
  if(timer > 0){
    timer--;
    document.querySelector('#timer-value').textContent = timer;
  }else {
    clearInterval(timerID);
    document.querySelector('#pbtm').innerHTML = `<h1 class="endGame">Game Over</h1>`;
  }
  
 },1000) 
};

  document.querySelector('#pbtm').addEventListener('click', (details)=> {
    let clickedNumber = (Number(details.target.textContent));
     if(clickedNumber === hitrn) {
       increaseScore();
       makeBubble();
       getNewHit(); 
     };
   })


runTime();
makeBubble();
getNewHit();