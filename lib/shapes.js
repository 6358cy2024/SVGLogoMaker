//class inheritance
//set color
//three classes for each shape
class Circle {
    constructor(color, textcolor, text) {
        this.color = color;
        this.textcolor = textcolor;
        this.text = text;
    }
        render() {
        return `
<svg width ="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="0" fill="${this.color}" />
    
    <text x="50" y="50" text-anchor="middle" alignment-baseline="middle" fill="${this.textcolor}" font-size="12px"> ${this.text}</text>
</svg>
    `;
        } 
    
}

class Square {
    constructor(color, textcolor, text) {
        this.color = color;
        this.textcolor = textcolor;
        this.text = text;
    }
        render() {
        return`
<svg>
    <rect width="100" height="100" stroke="black" stroke-width="0" fill="${this.color}" />

    <text x="50" y="50" text-anchor="middle" alignment-baseline="middle" fill="${this.textcolor}" font-size="12px">${this.text}</text>
</svg>
  `;
        }
        
    
}

class Triangle {
    constructor(color, textcolor, text) {
      this.color = color;
      this.textcolor = textcolor;
      this.text = text;
    }

      render() {
        `
<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,100 50,0 100,100" stroke="black" stroke-width="0" fill="${this.color}" />

    <text x="50" y="65" text-anchor="middle" alignment-baseline="middle" fill="${this.textcolor}" font-size="12px">${this.text}</text>
</svg>
  `;
  }
}


module.exports = {Circle, Square, Triangle};