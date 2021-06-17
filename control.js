/**
 * EventListener Start Button
 */
onGame = false;
var snake;

document.getElementById("start").addEventListener("click", function(){
    snake = new Snake(8, 8);
    onGame = true;
});


document.addEventListener('keydown', (event) => {   
    if (onGame == true)
    {
        if(event.key == 'z' || event.key == 'ArrowUp')
        {
            snake.up();
        }
        if (event.key == 's' || event.key == 'ArrowDown')
        {
            snake.down();
        }
        if (event.key == 'q' || event.key == 'ArrowLeft')
        {
            snake.left();
        }
        if (event.key == 'd' || event.key == 'ArrowRight')
        {
            snake.right();
        }
    }
    console.log(event.key);
    
    
})