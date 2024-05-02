namespace GenerativeKunst {

    interface Vector {
        x:number
        y:number
    }

    window.addEventListener("load", handleLoad)
    let crc2: CanvasRenderingContext2D;


    function handleLoad(_event:Event):void{
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2= <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawEllipse({x:400, y:300});
        drawArc({x:400, y:300}, {x:50,y:75});
        drawDiamond({x:-1000, y:-1000}, 0,40);
        drawDiamondInCircle({ x: 400, y: 300 }, 80, 8,100);
        drawBubbles({x:-1000, y:-100},40);
        drawBubblesInCircle({ x: 400, y: 300 }, 200, 12,30,20);
        drawCurve();
        drawText();
    }

    function drawBackground():void {
        console.log("Background");

        let gradient:CanvasGradient = crc2.createRadialGradient(400, 300, 50, 400, 300, 800)
        gradient.addColorStop(0, "white");
        gradient.addColorStop(0.2, "turquoise")
        gradient.addColorStop(1, "blue");      

        crc2.fillStyle = gradient;
        crc2.fillRect (0, 0, 800, 600);
    }

    function drawArc(_position:Vector, _size:Vector):void {
        console.log("Arc");

        let r1: number = 30;
        let r2: number = 150;
        let gradient1: CanvasGradient = crc2. createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient1.addColorStop(0, "white"); 
        gradient1.addColorStop(0.5, "blue");

        crc2.save();
        crc2.beginPath();
        crc2.translate (_position.x, _position.y);
        crc2.fillStyle = gradient1;
        crc2.arc(0, 0, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawDiamond(_position:Vector, _rotation:number, _size:number):void {
        console.log("Diamond");

        let sizeX: number = _size*0.5;
        let sizeY: number = _size*0.6; 
        let color: string = "darkviolet"; 
    

        crc2.save();
        crc2.beginPath();
        crc2.translate(_position.x, _position.y);
        crc2.rotate(_rotation);
        crc2.fillStyle = color;
        crc2.beginPath();
        crc2.moveTo(0, -sizeY / 2); 
        crc2.lineTo(sizeX / 2, 0);
        crc2.lineTo(0, sizeY / 2); 
        crc2.lineTo(-sizeX / 2, 0); 
        crc2.closePath();
        crc2.fill();
        crc2.restore();


    }

    function drawDiamondInCircle(center: Vector, radius: number, numDiamonds: number ,currentSize: number): void {

        for (let i = 0; i < numDiamonds; i++) {
            let angle = (i / numDiamonds) * Math.PI * 2; 
            let posX = center.x + Math.cos(angle) * radius; 
            let posY = center.y + Math.sin(angle) * radius; 

            let _rotation = Math.random() * Math.PI * 2; 
            let size = Math.random() * currentSize; 
    

            drawDiamond({ x: posX, y: posY }, _rotation, size); 
        }

    }

    // function drawDiamonds(): void {
    //     console.log("Drawing diamonds...");
    //     let nDiamonds: number = 9;
    //     let size: number = 30;
    //     let startX: number = 50;
    //     let startY: number = 50;
    //     let spacingX: number = 60;
    //     let spacingY: number = 60;
    
    //     for (let i = 0; i < nDiamonds; i++) {
    //         let posX = startX + i * spacingX;
    //         for (let j = 0; j < nDiamonds; j++) {
    //             let posY = startY + j * spacingY;
    //             drawDiamond({x: posX, y: posY});
    //         }
    //     }
    // }

    function drawEllipse(_position: Vector): void {
        console.log("Ellipse");
    
        let radiusX: number = 170;
        let radiusY: number = 120;
        let color = "violet";
    
        for (let i = 0; i < 3; i++) {
            let randomAngle = Math.random() * Math.PI * 2; 
            drawSingleEllipse(_position, color, radiusX, radiusY, randomAngle);
        }
    }
    
    function drawSingleEllipse(_position: Vector, color: string, radiusX: number, radiusY: number, rotation: number): void {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.strokeStyle = color;
        crc2.beginPath();
        crc2.rotate(rotation);
        crc2.ellipse(0, 0, radiusX, radiusY, 0, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.restore();
    }

    function drawBubbles(_position:Vector, _size:number):void {
        console.log("Bubbles");

        crc2.save();
        crc2.beginPath();
        crc2.translate (_position.x, _position.y);
        crc2.fillStyle = "light blue";
        crc2.arc(0, 0, _size, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

   function drawBubblesInCircle (center: Vector, radius: number, numDiamonds: number, innerSize: number, outerSize: number): void {
    const numRows = 3;
    const horizontalSpacing = 20;
    const maxOffset = 70;


    for (let row = 0; row < numRows; row++) {
        let currentSize = row === 1 ? innerSize : outerSize;
        for (let i = 0; i < numDiamonds; i++) {
            let angle = (i / numDiamonds) * Math.PI * 2;
            let offset = (Math.random() - 0.5) * 2 *  maxOffset; 
            let posX = center.x + Math.cos(angle) * (radius + row * horizontalSpacing) + offset;
            let posY = center.y + Math.sin(angle) * (radius + row * horizontalSpacing); 

        let size = Math.random() * currentSize; 


        drawBubbles({ x: posX, y: posY }, size); 
        }}
    }


    function drawCurve():void {
        console.log("Curve");

        crc2.save();
        crc2.beginPath();
        crc2.bezierCurveTo(0,10,10,0,10,0);
        crc2.restore();

    }

    function drawText():void {
        console.log("Text");
    }

}