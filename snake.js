class Part{
    constructor(age, x, y)
    {
        this.alive = true;
        this.age = age;
        document.getElementById(x + "x" + y).style.backgroundColor = "blue";
        this.x = x;
        this.y = y;
    }

    move(x, y)
    // permet de bouger une parti du corp un certain endroit
    {
        this.age++;
        if (this.age <= 0)
        {
            this.alive = false;
            document.getElementById(this.x + "x" + this.y).style.backgroundColor = "black";
            delete this;
        } else {
            document.getElementById(this.x + "x" + this.y).style.backgroundColor = "black";
            document.getElementById(x + "x" + y).style.backgroundColor = "blue";
            this.x = x;
            this.y = y;
        }
    }
}

class Snake{
    constructor()
    {
        this.body = Array(new Part(0, 5, 5))
    }

    up()
    {
        this.body.forEach(element => {
            element.move(element.x--, element.y);
        });
    }
}