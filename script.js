let dino = document.querySelector('.dino');
let obstacle = document.querySelector('.obstacle');
let score = document.querySelector('.score');
let gameEnd = document.getElementById('gameEnd')
let gameOver = true;
let yourScore = 0;

console.log(dino)
window.onkeydown = (e)=>{
    console.log(e.keyCode)
    if(e.keyCode==38){
        dino.classList.add('dinoAnime');
        setTimeout(()=>{
            dino.classList.remove('dinoAnime');
        },1000)
    }
    if(e.keyCode==37){
       let changePosition= Number.parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
       dino.style.left = changePosition - 100 + 'px'
       console.log(changePosition)
    }
    if(e.keyCode==39){
       let changePosition= Number.parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
       dino.style.left = changePosition + 100 + 'px'
       console.log(changePosition)
    }
}

setInterval(()=>{
    let dinoY = Number.parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));
    let obstacleY = Number.parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));
    let obstacleX = Number.parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let dinoX = Number.parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    
    if ((obstacleX - dinoX > -100 && obstacleX - dinoX < 150) && (dinoY-obstacleY < 50)){
        obstacle.classList.remove('obstacleAnime');
        gameOver = false;
        gameEnd.style.visibility = 'visible';
    }
    if ((obstacleX - dinoX < -129) && gameOver){
        let obstacleDuration = Number.parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        // setTimeout(()=>{
            newDur = obstacleDuration-0.01;
            obstacle.style.animationDuration = newDur + 's';
        // },500)
        yourScore+=1;
        gameOver = false;
        score.innerHTML=`Your Score is ${yourScore}`;
        obstacleDuration = `${obstacleDuration +20}s`;
        console.log(obstacleDuration)
    }
    if(obstacleX - dinoX > 150){
        gameOver = true;
    }

    // console.log('obstacle bottom', obstacleY)
    // console.log('dino bottom', dinoY)
    // console.log('Distance of both at X-axis ', obstacleX - dinoX)
},10)
