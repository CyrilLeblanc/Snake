 class Part{
    constructor(age, x, y)
    {
        this.alive = true;
        this.age = age;
        document.getElementById(x + "x" + y).style.backgroundColor = "blue";
        this.x = x;
        this.y = y;
    }
}