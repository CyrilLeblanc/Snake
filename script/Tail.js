 class Tail{
    constructor(x, y)
    {
        var position = document.getElementById(x + "x" + y);
        this.x = x;
        this.y = y;
        position.style.backgroundColor = "green";
        position.innerText = "tail";
    }

    move(x, y)
    {
        var lastPosition = document.getElementById(this.x + "x" + this.y);
        lastPosition.style.backgroundColor = "none";
        lastPosition.innerText = "";

        var newPosition = document.getElementById(x + "x" + y);
        newPosition.style.backgroundColor = "green";
        newPosition.innerText = "tail";

        this.x = x;
        this.y = y;
    }
}