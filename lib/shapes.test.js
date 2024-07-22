const Shapes = require('../lib/shapes');

describe('Shape Tests', () => {
    it('Should return the completed shape', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


        expect(testShape).toEqual(example);
    });
})