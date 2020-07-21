class Diagram {
    constructor (data, canvas, width, height) {
        this.data = data;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.context = canvas.getContext("2d");
    }

    findMaxValue() {
        let max = Number.NEGATIVE_INFINITY;
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i] > max) {
                max = this.data[i];
            }
        }
        return max;
    }

    makeDiagram() {
       let blockWidth = Math.floor(this.width / this.data.length);
       let scale = this.height / this.findMaxValue();
       
       for(let i = 0; i < this.data.length; i++) {
           let blockHeight = this.data[i] * scale;
           let positionX = blockWidth * i;
           let positionY = this.height - blockHeight;

           this.canvas.context.fillStyle = "blue";
           this.canvas.context.fillRect(positionX, positionY, blockWidth - 3, blockHeight);
       }
    }
    

}