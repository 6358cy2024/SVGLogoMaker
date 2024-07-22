const {Circle, Square, Triangle} = require('./shapes');

function shapeMaker(data) {
    console.log(data);
    let shape;
    if (data.shape == 'Circle') {
        shape = new Circle(data.color, data.textcolor, data.text);
        const logo = shape.render();
        return logo;
    }

    if (data.shape == 'Square') {
        shape = new Square(data.color, data.textcolor, data.text);
        const logo = shape.render();
        return logo;
    }
    //no spaces after =, ""
    if (data.shape == 'Triangle') {
        shape = new Triangle(data.color, data.textcolor, data.text);
        const logo = shape.render();
        return logo;
    }

}
module.exports = shapeMaker;