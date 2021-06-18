 class Part{
    constructor(age, x, y)
    {
        this.alive = true;
        this.age = age;
        this.type = "part";
        this.x = x;
        this.y = y;
        document.getElementById(x + "x" + y).style.backgroundColor = "green";
    }

    move(x, y)
    {
        document.getElementById(this.x + "x" + this.y).style.backgroundColor = "rgb(0, 182, 0)";
        this.lastX = this.x;
        this.lastY = this.y;
        this.x = x;
        this.y = y;
        if (document.getElementById(this.x + "x" + this.y) != null && inGame)
        {
            document.getElementById(this.x + "x" + this.y).style.backgroundColor = "green";
        }
        

    }
}