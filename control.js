/**
 * EventListener Start Button
 */
onGame = false;

var snake;
 document.getElementById("start").addEventListener("click", function(){
    snake = new Snake();
    onGame = true;
 });


 document.addEventListener('keydown', (event) => {   
    if (onGame == true)
    {
        if(event.key == 'z')
        {
            snake.up();
        }
        if (event.key == 's')
        {
            snake.down();
        }
        if (event.key == 'q')
        {
            snake.left();
        }
        if (event.key == 'd')
        {
            snake.right();
        }
    } 
    
})