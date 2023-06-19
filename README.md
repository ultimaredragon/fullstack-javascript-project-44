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

Each of the games has an intuitive interface where the user is consistently asked questions that need to be answered. In each game, you need to give three correct answers - if the user answers correctly, then the game ends with congratulations. If the user gives three incorrect answers, the game ends and the user is asked to try to complete the game again.

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
```cmd
[...@fedora fullstack-javascript-project-4]$ page-loader -h
Usage: page-loader [options] <link>

Downloads the page from the web and puts it in the specified directory

Options:
  -V, --version        output the version number
  -o, --output [path]  output path (default: "/...")
  -h, --help           display help for command
```
```cmd
page-loader -o page-loader https://page-loader.hexlet.repl.co
```
### or (the current directory will be selected)
```cmd
page-loader https://page-loader.hexlet.repl.co
```
## Example
[![asciicast](https://asciinema.org/a/kLRy5gv04bG9ogHH8u84uAiXU.svg)](https://asciinema.org/a/kLRy5gv04bG9ogHH8u84uAiXU)