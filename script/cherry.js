class Cherry{
    constructor()
    {
        this.x = Math.floor(Math.random() * 15+1);
        this.y = Math.floor(Math.random() * 15+1);
        var positionCherry = document.getElementById(this.x + "x" + this.y);
        positionCherry.style.backgroundColor = "purple";
        console.log("[" + this.x + "x" + this.y + "]");
    }

    eaten()
    {
        delete this;
        score += 25;
        document.getElementById('score').innerText = score + " Pts";
    }

    update()
    {
        var positionCherry = document.getElementById(this.x + "x" + this.y);
        positionCherry.style.backgroundColor = "purple";
    }

}