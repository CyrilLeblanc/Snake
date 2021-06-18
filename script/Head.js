 class Head{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.age = 0;
        this.type = "head";
        var position = document.getElementById(x + "x" + y);
        position.style.backgroundColor = "red";
    }

    move(x, y)
    {
        var lastPosition = document.getElementById(this.x + "x" + this.y);
        lastPosition.style.backgroundColor = "rgb(0, 182, 0)";
        this.lastX = this.x;
        this.lastY = this.y;
        this.x = x;
        this.y = y;
        var position = document.getElementById(x + "x" + y);
        if (position != null && inGame)
        {
            position.style.backgroundColor = "red";
        }
        
    }
}