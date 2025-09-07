// elements
let dragon = document.querySelector('.dragon');
let gameOver = document.querySelector('.gameOver');
let obstacle = document.querySelector('.obstacle');
let scorcount = document.querySelector('.scorCount');
let btn = document.querySelector('button');
let dragonx;
let dx, dy, ox, oy ,offsetX ,offsetY;
let pass = true;
let score = 0
let obsanidur;
let gameisOver = false;

// up key  movenment

document.onkeydown = function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 38) {
        dragon.classList.add('animateDragon')
        setTimeout(() => {
            dragon.classList.remove('animateDragon');
        }, 2000);
    }

    if (e.keyCode == 37) {
        dragonx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
       dragon.style.left = dragonx - 112 + "px";
    }
    if (e.keyCode == 39) {
        dragonx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
        dragon.style.left = dragonx + 112 + "px";
    }
}

// updating the score
setInterval(() => {

    // dragon axis value
    dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));

    dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

    // obstacle axis value

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));

    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    

   
    // offset value
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

  

    if (offsetX <50 && offsetY <= 50)  {
         if (score != 0)
             scorcount.innerHTML = "Your score : " + score;
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('animateObstacle')
        btn.classList.add('reset');
        btn.classList.remove('default')
        console.log(score)
        gameisOver =true
    }
    else if ( offsetX <50 && pass) {
        score += 1;
        updateScore(score);
        pass = false;

         console.log(score)

        setTimeout(() => {
            pass = true;
        }, 1000);

        setInterval(() => {
            obsanidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));

            obstacle.style.animationDuration = obsanidur - 0.01 + 's';
        }, 500);


    }
    
}, 10);


function updateScore(score) {
    scorcount.innerHTML = "Your score : " + score;
}

function reset() {
    window.location.reload()
    

}