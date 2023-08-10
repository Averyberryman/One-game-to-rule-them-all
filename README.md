# The One Game to Rule Them All

Project Link: https://averyberryman.github.io/One-game-to-rule-them-all/

## Abstract:
The Tic Tac Toe app is a web-based application that allows users to share a local machine to play tic-tac-toe against one another. Users' wins are tallied based on which character they are using, and functionality ensures that no player ever has the first turn in consecutive games, regardless of outcome!

## Installation Instructions:

1. Go to the [FINAL_SOLO_PROJECT](https://github.com/Averyberryman/final_solo_project).

2. Select the "fork" option on the upperright and follow the prompts to save a fork to your GitHub account:
<img width="532" alt="image of github fork button" src="https://user-images.githubusercontent.com/7227063/243205594-971fd24b-4cdf-4861-8e37-65c1c46d3a1d.png">

3. Once you have forked the repository, choose the "Code" drop down to copy the SSH key for cloning:

    ![image](https://user-images.githubusercontent.com/7227063/243205687-99544707-a35c-4085-9e06-6e4fc2cef2aa.png)

4. Open your preferred command-line interface tool (e.g. Terminal) and create a directory where you would like to clone the repository.

5. Change directories into the directory your created.

6. Without the brackets, type [git clone], type a space, then use Command-v on a Mac, or Control-v on PC/Android to past in the SSH key you copied in step 3.

## Preview of App:

![Demo of tic-tac-toe: fate of Middle-Earth edition] (https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGNlNDEzMTM0NmJmM2I2YzIxZDQ3OGQwZmExMmQ1MzE3MzZkZDZlZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/imhewVmEV765zF0Upi/giphy.gif)


## Context:
The Tic Tac Toe project was assigned in the fifth week of Mod 1, and the alloted time to complete this project was about 7 days. The project was assigned as a solo project, meaning I worked on this alone with the knowledge I gained from Mod1. 

## Contributors:
Avery Berryman - https://github.com/Averyberryman


## Learning Goals:
The learning goals of this project included: 
- Write clean HTML and CSS to match a provided comp.
- Demonstrate an understanding of how to separate the data model from the DOM.
- Achieve user-based functionality dynamically.
- Incorporate DOM manipulation based on user behavior to update a single data model which governs the entire site.
- Implement concepts of DRYness, SRP, and purity while crafting clean code with small, efficient functions. 

## Wins + Challenges:
- A challenge included figuring out how to use mathematical principles to find and fill specific squares and get gameboard data. The makeGameboard and checkWins functions took me the longest and involved really stretching my understanding of mathematical operators on a grid, and extending for loop principles into variables other than "i". I was able to create an array of arrays called winConditions, and iterate over those arrays and check each sub-array's content at index position 0, 1, and 2 with conditions [a, b, c] to see if they matched any of my win conditions with a conditional. My math required all three to match those of an established win condition, and it involved using both division and modulo operators to get the coordinates, like battleship, for each number based on the row and column indices and if that coordinate contained a player token. The row and column indices were established in my makeGameboard function. Many times I felt confused until I had a breakthrough and realized I needed to limit my outputs for column coordinates to be between 0-2 since they were zero based as well, which is where the modulo operator came in. I recalled we had also seen examples of math.floor being used in random number generators, so I dug into this principle and applied it to my index/3 part of the function so that all outputs would be integers. Finally, I was able to get a set of coordinates for each index position of each array, which itself was an index position of var winningNumbers. And I did not pull my hair out.

- after I figured out how to iterate over the win conditions to detect which tokens were there and if they were winning combinations, I still reaized that all my squares themselves were in a simple array and had to be indexed as well. The difficulty of understanding how to take a two dimensional array and make it into a grid, and then return it back into an array very much stretched my understanding of code and what it can do.

- A huge win for me was realizing the fruits of my labor on approaching this problem with mathematics rather than interpolation and javascript methods, or using buttons with boolean conditionals. What I mean by fruits of my labor is that I really did not have a lot of refactoring to do once I achieved functionality, nor did I have many bugs outside of figuring out how to print the winning message/draw message. Because I used math, I found the checkDraws function easy to write because all I needed to do was ensure none of my "squares" contained any empty space, because if they did the game would not be over and my check wins function already outlined the only conditions that existed for winning games. This win felt particularly big for me because math is by no means a strongsuit of mine, but I knew if I used too many methods, concatentation, interpolation, etc for my dom manipulation, I would get many unexpected outcomes from my gameboard behavior.

