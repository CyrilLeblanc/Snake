 class Head{
    constructor(x, y)
    {
        var position = document.getElementById(x + "x" + y);
        this.x = x;
        this.y = y;
        position.style.backgroundColor = "red";
        position.innerText = "head";
    }

    move(x, y)
    {
        this.x = x;
        this.y = y;
        var position = document.getElementById(x + "x" + y);
        position.style.backgroundColor = "red";
        position.innerText = "head";
    }
}