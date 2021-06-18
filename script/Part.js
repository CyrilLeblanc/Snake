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


    get_surrounding()
    // renvoi les coordonnée des 4 cases adjacentes
    {
        var value = Array();
        value['left'] = Array(this.x, (this.y-1));
        value['right'] = Array(this.x, (this.y+1));
        value['up'] = Array((this.x-1), this.y);
        value['down'] = Array((this.x+1), this.y);
        return value;
    }

    move(x, y)
    {
        document.getElementById(this.x + "x" + this.y).style.backgroundColor = "rgb(0, 182, 0)";
        this.lastX = this.x;
        this.lastY = this.y;
        this.x = x;
        this.y = y;
        document.getElementById(this.x + "x" + this.y).style.backgroundColor = "green";

    }
}