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
        this.body.forEach(function callback(element, index){
            if (element){
                
            }
        });
        tail.move(tail.x-1, tail.y)
    }
}