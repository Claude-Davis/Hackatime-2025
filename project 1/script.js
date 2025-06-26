window.addEventListener("load", function() {
    const canvas = this.document.getElementById("canvas0");
    const ctx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 500;
})


class InputHandler{
    constructor(game){
        this.game = game;
        window.addEventListener('keydown', e=> {
            if (( (e.key === 'ArrowUp') ||
                  (e.key === 'ArrowDown') ||
                  (e.key === 'ArrowRight') ||
                  (e.key === 'ArrowLeft') ||
                  (e.key === 'W') ||
                  (e.key === 'S') ||
                  (e.key === 'D') ||
                  (e.key === 'A')
                ) && thid.game.keys.indexOf(e.key) === -1) this.game.keys.push(e.key);  //the key is pushed into the array 'keys' (Game constructor)
        });
        window.addEventListener('keyup', e => {
            if (this.game.keys.indexOf(e.key) > -1 ) {
                this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
            }
        })
    }
}

class Layer {
    constructor(game){
        //
    }
    update(){
        //
    }
    draw(context){
        //
    }
}

class Background {
    constructor(game){
        //
    }
    update(){
        //
    }
    draw(context){
        //
    }
}

class UI{
    constructor(game){
        //
    }
    update(){
        //
    }
    draw(context){
        //
    }
}

class Player {
    constructor(game){
        this.game = game;
        this.width = 80;
        this.height = 80;
        this.x = 20;
        this.y = 100;
        this.speedX = 0;
        this.speedY = 0;
    }
    update(){
        //y-axis
        if (this.game.keys.includes('ArrowUp') || (this.game.keys.includes('W'))) this.speedY = -2;
        else if (this.game.keys.includes('ArrowDown') || (this.game.keys.includes('S'))) this.speedY = 2;
        else this.speedY = 0; 
        this.y += this.speedY;

            //x-axis
        if (this.game.keys.includes('ArrowRight') || (this.game.keys.includes('D'))) this.speedX = 2;
        else if (this.game.keys.includes('ArrowLeft') || (this.game.keys.includes('A'))) this.speedX = -2;
        else this.speedX = 0;
        this.x += this.speedX;
    }
    draw(context){
        context.fillStyle = '#0000ff';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Fowl{
    constructor(game){
        this.game = game;
        this.height = 20;
        this.width = 20;
        this.x = this.game.width;

    }
    update(){
        //
    }
    draw(context){
        //
    }
}

class Hunter{
    constructor(game){
        //
    }
    update(){
        //
    }
    draw(context){
        //
    }
}