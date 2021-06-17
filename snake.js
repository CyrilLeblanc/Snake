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

class Snake{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.body = Array(
            new Head(x, y), 
            new Part(0, x+1, y), 
            new Tail(x+2, y)
        );
    }

    up()
    {
        this.x--;
        var head = this.body[0];
        var tail = this.body[this.body.length-1];

        head.move(this.x-1, this.y);
        this.body.forEach(element => {
            if (element){
                
            }
        });
        tail.move(tail.x-1, tail.y)
    }
}