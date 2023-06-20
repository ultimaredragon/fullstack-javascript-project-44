### Hexlet tests and linter status:
[![Actions Status](https://github.com/ultimaredragon/fullstack-javascript-project-44/workflows/hexlet-check/badge.svg)](https://github.com/ultimaredragon/fullstack-javascript-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a0a3f1a96905a06831a8/maintainability)](https://codeclimate.com/github/ultimaredragon/fullstack-javascript-project-44/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a0a3f1a96905a06831a8/test_coverage)](https://codeclimate.com/github/ultimaredragon/fullstack-javascript-project-44/test_coverage)
## About the Project
This is a first project on Hexlet's platform, which contains pack of little games:
- Brain Calc - A game in which a random operation is selected ("+", "-", "*") and two random numbers are generated. A numerical answer is needed;
- Brain Even - A game in which a random number is generated and the user needs to answer whether this number is even or not;
- Brain GCD - A game in which two random numbers are generated for which it is necessary to determine the greatest common divisor;
- Brain Prime - A game in which a random number is generated and the user needs to determine whether this number is simple or not;
- Brain Arifmetic A game in which a random arithmetic progression is generated with one missing number. The user needs to identify this missing number.

Each of the games has an intuitive interface where the user is consistently asked questions that need to be answered. In each game, you need to give three correct answers - if the user answers correctly, then the game ends with congratulations. If the user gives incorrect answer, the game ends and the user is asked to try to complete the game again.

## Getting started
- Clone the repository
```cmd
git clone https://github.com/ultimaredragon/fullstack-javascript-project-44
```
- Install dependencies
```cmd
cd fullstack-javascript-project-44
make install
```
- Install project
```cmd
make link
```

## Usage
### Brain Calc
A game in which a random operation is selected ("+", "-", "*") and two random numbers are generated. A numerical answer is needed.
1. First of all, the program asks for the user name. Enter the user name.
![Brain-Calc username enter](https://i.imgur.com/l0fHJvn.png)
2. In the next step, the user will be shown a mathematical expression to which the user needs to give an answer. If the user answers correctly, the following expression will be displayed on the screen.
![Brain-Calc right answer](https://i.imgur.com/TJtzKWW.png)
3. If the user gives an incorrect answer, a corresponding message will appear on the screen and the game will end with an offer to try next time.
![Brain-Calc wrong answer](https://i.imgur.com/Q9biMqX.png)
4. The game will end successfully if the user gives three correct answers in a row. Congratulations, you are irresistible!
![Brain-Calc three right answers in a row](https://i.imgur.com/lnNEK0G.png)
## Example