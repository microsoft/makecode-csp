---
title: 'Arrays of Sprites'
metaTitle: 'Array of Sprites'
order: 1
---

## Activity

### Tasks A

Go to [Activity: Arrays of Sprites](https://arcade.makecode.com/courses/csintro2/arrays/sprites). Complete Task 1.

#### Task 1

1. Start with the code from Moving Asteroids 
2. Instead of moving every asteroid, select a random asteroid from my sprite array and move only that asteroid when the A button is pressed.
3. Choose another random asteroid, and have it say “woosh” for 300 ms. Are the two randomly chosen asteroids the same? (Can they be the same?)
4. Add comments to your code.

### Tasks B

Go to [Activity: Arrays of Sprites](https://arcade.makecode.com/courses/csintro2/arrays/sprites). Complete Task 2.

#### Task 2

1. Start with code from fireworks.
2. Add a repeat loop in the on start that will create 100 fireworks.
3. Use array of sprites of kind to get an array of all the fireworks in the on any button pressed event, and store it in the variable sprite list.
4. Add an if condition around the rest of the on any button pressed, so that the rest of the event only occurs if the length of array sprite list is greater than 0.
5. Select a firework from sprite list at random, and store that in a variable origin. Replace all references to firework in the event to refer to this new variable.

#### Task 2 Challenge

1. Change the on any button pressed event to only trigger when the A button is pressed, and make a on B button pressed event that will create a new firework.
2. Reduce the redundancy between the new event and the on start block.

### Tasks C

Go to [Activity: Arrays of Sprites](https://arcade.makecode.com/courses/csintro2/arrays/sprites). Complete Task 3.

#### Task 3

1. Start with code from Enemy Follow.
2. Add a repeat 20 times loop that creates 20 enemies in random positions on the screen.
3. In the on game update event, use array of sprites of kind Enemy in a loop to make all the enemies follow the player, not just the last one that was created.

#### Task 3 Challenge

Add an on overlap event between two enemies, that moves both enemies between -2 and 2 pixels in both directions, so that the enemies no longer stack on top of each other.

#### Extension

Recreate one or more of the programs in JavaScript or Python.

## Reflection/Homework 

1. How could using arrays of sprites influence the way you design games? List at least two ways. 

2. How is using arrays of sprites of kind easier than keeping track of all the sprites in an array manually? 