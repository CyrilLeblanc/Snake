/**
 * EventListener Start Button
 */
var inGame = false;
var snake;
var lastKey = 'z';


document.getElementById("start").addEventListener("click", function(){
    snake = new Snake(8, 8);
    inGame = true;
});


document.addEventListener('keydown', (event) => {   
    if (inGame == true)
    {
        if(event.key == 'z' || event.key == 'ArrowUp')
        {
            snake.up();
            lastKey = event.key;
        }
        if (event.key == 's' || event.key == 'ArrowDown')
        {
            snake.down();
            lastKey = event.key;
        }
        if (event.key == 'q' || event.key == 'ArrowLeft')
        {
            snake.left();
            lastKey = event.key;
        }
        if (event.key == 'd' || event.key == 'ArrowRight')
        {
            snake.right();
            lastKey = event.key;
        }
        
    }
})