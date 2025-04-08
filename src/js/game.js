class GridGame {
    constructor(gameGridWrapper) {
        this.targetElement = document.createElement('img');
        this.targetElement.setAttribute('src', 'https://github.com/netology-code/ahj-homeworks/raw/video/dom/pic/goblin.png');
        this.targetElement.setAttribute('class', 'target__img');

        this.gameGridWrapper = gameGridWrapper;
        this.gameCycleInterval = null;
        this.currentPos = {x: null, y: null};
        this.gridSize = {x: 4, y: 4};
    }

    generateGrid () {
        for (let x = 0; x < 4; x++) {
            for (let y = 0; y < 4; y++) {
                const gridSlot = document.createElement('div');
                gridSlot.setAttribute('class', `grid__slot grid__slot__${x}-${y}`);
                this.gameGridWrapper.append(gridSlot);
            }
        }
    }

    rollRandomPosition () {
        let newPos = {x: Math.floor(Math.random() * 4), y: Math.floor(Math.random() * 4)};
        console.log(newPos.x, newPos.y);
        // while (this.currentPos.x != newPos.x || this.currentPos.y != newPos.y) {
        //     newPos = {x: Math.floor(Math.random() * 4), y: Math.floor(Math.random() * 4)};
        // }
        this.currentPos = newPos;
    }

    moveImgToCurrentPos () {
        console.log(`moving target to [${this.currentPos.x} ${this.currentPos.y}]`);
        const targetSlot = this.gameGridWrapper.querySelector(`.grid__slot__${this.currentPos.x}-${this.currentPos.y}`);
        targetSlot.appendChild(this.targetElement)
    }

    startGame () {
        console.log('game started')
        this.gameCycleInterval = setInterval(() => {
            this.rollRandomPosition();
            this.moveImgToCurrentPos();
        }, 3000)
    }

    stopGame () {
        clearInterval(this.gameCycleInterval);
    }
}


export {
    GridGame
}