namespace EntenteichClasses {
  export class Heron extends Moveable {
    private state: HeronState;

    constructor(
      _x: number,
      _y: number,
      _size: number,
      _direction: Vector,
      _color: string,
      _state: HeronState
    ) {
      //console.log("Duck Constructor")
      super(_x, _y, _size, _direction, _color);
      this.state = _state;
    }

    protected move(): void {
      //console.log("Duck move")

      this.x += this.direction.x;
      this.y += this.direction.y;
      switch (this.state) {
        case HeronState.Swim:
            if ((this.x >= 350 && this.direction.x > 0) || (this.x <= 80 && this.direction.x < 0)) {
                this.direction.x *= -1;
              }
          break;
        default: // assuming "standing" is the default state
          if (this.x > crc2.canvas.width) {
            this.x = 0;
          } else if (this.x < 0) {
            this.x = crc2.canvas.width;
          }
      }
    }

    protected draw(): void {
      switch (this.state) {
        case HeronState.Swim:
          this.drawSwimming();
          break;
        default:
          this.drawStanding();
      }
    }

    private drawSwimming(): void {
      crc2.save();
      crc2.translate(this.x, this.y);
      crc2.scale(this.size, this.size);
      if (this.direction.x > 0) {
        crc2.scale(-1, 1); // Spiegeln in der x-Richtung
      }

      // Körper zeichnen
      crc2.beginPath();
      crc2.ellipse(20, -45, 50, 15, 0 * Math.PI, 0, 2 * Math.PI);
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.closePath();

      // Hals zeichnen
      crc2.beginPath();
      crc2.moveTo(-26, -40);
      crc2.lineTo(-26, -70);
      crc2.lineTo(-16, -70);
      crc2.lineTo(-16, -40);
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.closePath();

      // Kopf zeichnen
      crc2.beginPath();
      crc2.arc(-26, -80, 14, 0, 2 * Math.PI);
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.closePath();

      // Auge zeichnen
      crc2.beginPath();
      crc2.arc(-30, -85, 3, 0, 2 * Math.PI);
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.strokeStyle = "black";
      crc2.stroke();
      crc2.closePath();

      crc2.beginPath();
      crc2.arc(-30, -85, 2, 0, 2 * Math.PI);
      crc2.fillStyle = "black";
      crc2.fill();
      crc2.stroke();
      crc2.closePath();

      // Schnabel zeichnen
      crc2.beginPath();
      crc2.moveTo(-38, -85);
      crc2.lineTo(-60, -80);
      crc2.lineTo(-38, -75);
      crc2.fillStyle = "orange";
      crc2.fill();
      crc2.closePath();

      // Flügel zeichnen
      crc2.beginPath();
      crc2.ellipse(25, -50, 50, 13, 0, 0, Math.PI * 2);
      crc2.fillStyle = "grey";
      crc2.fill();
      crc2.closePath();

      crc2.restore();
    }

    private drawStanding(): void {
      crc2.save();
      crc2.translate(this.x, this.y);
      crc2.scale(this.size, this.size);
      if (this.direction.x > 0) {
        crc2.scale(-1, 1); // Spiegeln in der x-Richtung
      }

      // Körper zeichnen
      crc2.beginPath();
      crc2.ellipse(0, 0, 50, 15, 0.3 * Math.PI, 0, 2 * Math.PI);
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.closePath();

      // Hals zeichnen
      crc2.beginPath();
      crc2.moveTo(-26, -40);
      crc2.lineTo(-26, -70);
      crc2.lineTo(-16, -70);
      crc2.lineTo(-16, -40);
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.closePath();

      // Kopf zeichnen
      crc2.beginPath();
      crc2.arc(-26, -80, 14, 0, 2 * Math.PI);
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.closePath();

      // Auge zeichnen
      crc2.beginPath();
      crc2.arc(-30, -85, 3, 0, 2 * Math.PI);
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.strokeStyle = "black";
      crc2.stroke();
      crc2.closePath();

      crc2.beginPath();
      crc2.arc(-30, -85, 2, 0, 2 * Math.PI);
      crc2.fillStyle = "black";
      crc2.fill();
      crc2.stroke();
      crc2.closePath();

      // Schnabel zeichnen
      crc2.beginPath();
      crc2.moveTo(-38, -85);
      crc2.lineTo(-60, -80);
      crc2.lineTo(-38, -75);
      crc2.fillStyle = "orange";
      crc2.fill();
      crc2.closePath();

      // Beine zeichnen
      crc2.beginPath();
      crc2.moveTo(-10, 10); // Adjust the y-coordinate to start higher up
      crc2.lineTo(-10, 60);
      crc2.lineTo(-20, 60);
      crc2.moveTo(0, 8); // Adjust the y-coordinate to start higher up
      crc2.lineTo(0, 60);
      crc2.lineTo(-10, 60);
      crc2.strokeStyle = "orange";
      crc2.stroke();
      crc2.closePath();

      // Flügel zeichnen
      crc2.beginPath();
      crc2.ellipse(10, 0, 50, 10, 0.9, 0, Math.PI * 2);
      crc2.fillStyle = "grey";
      crc2.fill();
      crc2.closePath();

      crc2.restore();
    }

    drawShock(): void{
      crc2.save();
      crc2.translate(this.x, this.y);
      crc2.scale(this.size, this.size);
      if (this.direction.x > 0) {
        crc2.scale(-1, 1); // Spiegeln in der x-Richtung
      }

      // Körper zeichnen
      crc2.beginPath();
      crc2.ellipse(20, -45, 50, 15, 0 * Math.PI, 0, 2 * Math.PI);
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.closePath();

      // Hals zeichnen
      crc2.beginPath();
      crc2.moveTo(-26, -40);
      crc2.lineTo(-26, -70);
      crc2.lineTo(-16, -70);
      crc2.lineTo(-16, -40);
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.closePath();

      // Kopf zeichnen
      crc2.beginPath();
      crc2.arc(-26, -80, 14, 0, 2 * Math.PI);
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.closePath();

      // Auge zeichnen
      crc2.beginPath();
      crc2.arc(-30, -85, 3, 0, 2 * Math.PI);
      crc2.fillStyle = "white";
      crc2.fill();
      crc2.strokeStyle = "black";
      crc2.stroke();
      crc2.closePath();

      crc2.beginPath();
      crc2.arc(-30, -85, 2, 0, 2 * Math.PI);
      crc2.fillStyle = "black";
      crc2.fill();
      crc2.stroke();
      crc2.closePath();

      // Schnabel zeichnen
      crc2.beginPath();
      crc2.moveTo(-38, -85);
      crc2.lineTo(-60, -80);
      crc2.lineTo(-38, -75);
      crc2.fillStyle = "orange";
      crc2.fill();
      crc2.closePath();

      // Flügel zeichnen
      crc2.beginPath();
      crc2.ellipse(25, -50, 50, 13, 0, 0, Math.PI * 2);
      crc2.fillStyle = "grey";
      crc2.fill();
      crc2.closePath();

      crc2.restore();

    }
  }
}
