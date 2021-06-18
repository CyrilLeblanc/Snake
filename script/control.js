/**
 * EventListener Start Button
 */
var inGame = false;
var gameOver = false;
var snake;
var lastKey = 'z';
var score = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function moveSnake(keyPressed)
{
    if (inGame == true)
    {
        if(keyPressed == 'z' || keyPressed == 'ArrowUp')
        {
            snake.up();
        }
        if (keyPressed == 's' || keyPressed == 'ArrowDown')
        {
            snake.down();
        }
        if (keyPressed == 'q' || keyPressed == 'ArrowLeft')
        {
            snake.left();
        }
        if (keyPressed == 'd' || keyPressed == 'ArrowRight')
        {
            snake.right();
        }
    }
}

document.addEventListener('keydown', (event) => {   
    lastKey = event.key;
})

document.getElementById("start").addEventListener("click", function(){
    document.getElementById('start').setAttribute('disabled', '');
    snake = new Snake(8, 8);
    inGame = true;
    elapsedTime = 0;

    setInterval(() => {
        if (gameOver == true)
        {
            
        } else {
            elapsedTime += 100;
            document.getElementById("time").innerText = elapsedTime/1000 + "s";
        }
    }, 100);

    setInterval(() => { 
        if (gameOver == false)
        {
            moveSnake(lastKey);
        }
    }, 100);
});




