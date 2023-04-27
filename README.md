# Baseball P5 ⚾

Baseball P5 is a simple baseball diamond animation created using the p5.js library. It demonstrates the concepts of creating and animating objects on a canvas, handling user interactions, and working with images and shapes.


## Table of Contents
1. [Concepts](#concepts)
2. [How It Works](#how-it-works)
3. [Run Locally](#run-locally)
4. [Roadmap](#roadmap)
5. [License](#license)
## Concepts

- **Creating a canvas and shapes:** The createCanvas() function is used to set up the dimensions of the canvas, and various shapes are drawn using functions like beginShape(), vertex(), endShape(), and ellipse().
- **Handling user interactions:** Two buttons, "Start" and "Stop", are created using the createButton() function. Event listeners are added to the buttons using the mousePressed() function, which toggles the isAnimating boolean variable.
- **Animating objects:** The position of the baseball is updated in the draw() loop when isAnimating is true. The lerp() function is used to smoothly move the baseball towards the target position.
- **Working with images:** The preload() function is used to load an image of a baseball before the sketch starts. The imageMode() and image() functions are used to draw the baseball on the canvas.


## How It Works
The sketch consists of a baseball diamond with four bases and a baseball that moves between the bases when the animation is active.

- The bases array holds the positions of the bases. The ballPosition and targetPosition variables store the current and target positions of the baseball, respectively.

- When the "Start" button is pressed, the isAnimating variable is set to true, and the baseball begins moving towards the target base. When it reaches the target, the currentBase index is incremented, and the target position is updated to the next base.

- When the "Stop" button is pressed, the isAnimating variable is set to false, and the animation stops.

- The drawBaseballDiamond() function is responsible for drawing the baseball diamond, bases, pitcher's mound, and catcher's mound. The drawBaseball() function draws the baseball at the given position, and the drawBase() function is used to draw each base.

## Run Locally

Click on the green Code button and download the zip file. Click on the index.html file and view the interactive application in your browser.


## Roadmap

- Demonstrate some of the basic rules of baseball at the click of a button.


## License

[MIT](https://choosealicense.com/licenses/mit/)

