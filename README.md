# Pig Game

## About

Pig is a simple turn-based dice game where players compete to reach a target score first. Players take turns rolling a die, accumulating points on their turn. They can choose to continue rolling to increase their score or hold to bank their points. However, rolling a 1 resets their turn score to zero, and their turn ends immediately. The first player to reach the target score wins the game.

This project is also part of my JavaScript learning journey, helping me practice DOM manipulation and logic building.

## How to Play

1. Each player takes turns rolling a six-sided die.
2. If the player rolls a 1, they lose all points earned in that turn and their turn ends.
3. If the player rolls any other number, they can choose to:
   - **Roll again** and risk losing points.
   - **Hold** to add their current turn score to their total score and pass the turn to the next player.
4. The first player to reach or exceed the target score (usually 100) wins.

## How to Install and Play

To clone and run the game locally, follow these steps:

```sh
# Clone the repository
git clone https://github.com/your-username/pig-game.git

# Navigate into the project directory
cd pig-game

# Open the game in a browser (Mac)
open index.html

# Open the game in a browser (Windows)
start index.html

# Open the game in a browser (Linux)
x-www-browser index.html  # Or use: firefox index.html / google-chrome index.html
```

## Features

- Two-player mode for local play.
- Made using HTML, CSS, and JavaScript.
- Simple and intuitive interface.
- Randomized dice rolls for fair play.

Enjoy the challenge of balancing risk and reward in this classic dice game!
