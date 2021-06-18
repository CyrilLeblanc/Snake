class Snake{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.body = Array(
            new Head(x, y), 
            new Part(1, x+1, y), 
            new Part(2, x+2, y)
        );
        this.head = this.body[0];
    }

    up()
    {
        this.head.move(this.x-1, this.y);
        this.update();
        this.x--;
    }

    down()
    {
        this.head.move(this.x+1, this.y);
        this.update();
        this.x++;
    }

    left()
    {
        this.head.move(this.x, this.y-1);
        this.update();
        this.y--;
    }

    right()
    {
        this.head.move(this.x, this.y+1);
        this.update();
        this.y++;
    }
    
    update()
    {
        var sizeOfBody = this.body.length-1;
        this.body.forEach((element, index) => {
            if (index == 0 && element.type == 'head')
            {
                // dans le cas où c'est la tête
                this.head = element;
            } 
            else if (index == sizeOfBody && element.type == 'tail')
            {
                // dans le cas où c'est la queue
            }
            else if (element.type == 'part')
            {
                // dans le cas où c'est une partie du corps
                if (element.age == 1)
                {
                    // dans le cas où c'est le premier
                    // on cherche l'ancienne position de la tête
                    element.move(this.head.lastX, this.head.lastY);
                } else {
                    // dans le cas où c'est le reste du corp
                    // on cherche la partie du corp qui est plus de jeune de -1 par rapport 'element'
                    this.body.forEach(part => {
                        if (part.age == element.age-1)
                        {
                            element.move(part.lastX, part.lastY);
                        }
                    });
                }
            }
        });
    }
}