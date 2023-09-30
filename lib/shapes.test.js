// Importing Triangle, Square, Circle classes from ./shapes.js
const { Circle, Square, Triangle } = require("../lib/shapes");

// Unit testing -> testing for a triangle with a blue background to render
describe('Triangle', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const triangle = new Triangle('pink','AMP','red');
        expect(triangle.render()).toEqual(`
        <svg version="1.1"
        width = "300" height= "200" xmlns="http://www.w3.org/2000/svg">
        <polygon points = "100, 15 200, 200 0, 200" fill = "pink" />
        <text x= "100" y ="185" font-size = "70" text-anchor="middle" fill = "red"> amp</text>
        </svg>;
        `
        );
    });
});

// // Unit testing -> testing for a square with a purple background to render

// describe("Square", () => {
// it("should return logo with user choice of shape color, tex, and text color", () => {
//     const square = new Square("red", "EKO", "yellow");
//     expect(square.render()).toEqual(`
//         <svg version="1.1"
//             width="300" height="200"
//             xmlns="http://www.w3.org/2000/svg">
//             <rect width="200" height="200" fill="red"/>
//             <text x="100" y="125" font-size="70" text-anchor="middle" fill="yellow">EKO</text>
//         </svg>
//         `);
// });
// });

// // Unit testing -> testing for a circle with a #ca00ca background to render

// describe("Circle", () => {
// it("should return logo with user choice of shape color, tex, and text color", () => {
//     const circle = new Circle("blue", "EKO", "white");
//     expect(circle.render()).toEqual(`   
//     <svg version="1.1"
//     width="300" height="200"
//     xmlns="http://www.w3.org/2000/svg">
//     <circle cx="150" cy="100" r="100" fill="blue" />
//     <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">EKO</text>
//     </svg>
//     `);
// });
// });
