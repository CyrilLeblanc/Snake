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
        this.cherrys = Array();
    }

    spawn_cherry()
    {
        this.cherrys.push(new Cherry);
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
        this.head = this.body[0];
        // on vérifie qu'on a pas touché le mur
        if (this.head.x == 17 || this.head.x == 0 || this.head.y == 17 || this.head.y == 0)
        {
            this.gameOver();
        }

        // on vérifie qu'on a pas toucher la queue avec la tête
        this.body.forEach(element => {
            if (this.head.x == element.lastX && this.head.y == element.lastY)
            {
                this.gameOver();
            }
        });

        var sizeOfBody = this.body.length-1;

        // on regarde si on a mangé une cerise
        this.cherrys.forEach(element => {
            element.update();
            if(element.y == this.y && element.x == this.x)
            {
                console.log("mangé !");
                element.eaten();
                this.cherrys.pop();

                // une fois que c'est mangé un ajoute une Part à la queue
                this.body.push(new Part(this.body[sizeOfBody].age+1, this.body[sizeOfBody].x, this.body[sizeOfBody].y));
            }
        });

        if (this.cherrys.length < 1)
        {
            this.spawn_cherry();
        }


        this.body.forEach((element, index) => {
            if (index == 0 && element.type == 'head')
            {
                // dans le cas où c'est la tête
                this.head = element;
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


    gameOver()
    {
        console.log("PERDU");
        inGame = false;
        gameOver = true;
        document.getElementById('grid').innerHTML = "<h1>PERDU</h1>";
        document.getElementById('start').removeAttribute('disabled');
        
    }
}