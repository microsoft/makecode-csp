---
title: 'Multiplayer'
metaTitle: 'Multiplayer'
order: 1
---

## Activity

Go to [Activity: Multiplayer](https://arcade.makecode.com/courses/csintro2/logic/multiplayer). Complete student tasks 2-5.

### Tasks

#### Task 2

1. Create a function called newBall.
2. Set currentBall to a sprite with an image of a ball; assign it of kind Ball.
3. Give the ball a vx of either -75 or 75, with a 50 % chance of each (use an if then ... else block to handle this).
4. Give the ball a random vy between -75 and 75.
5. Create a newball when the game starts.
6. Comment your code.

**Shared project link**:
<br/>

#### Task 3

1. Place an if then ... else if then block inside of on game update.
2. First, check if currentBall‘s y position is less than or equal to 0
    * If it is, set currentBall‘s y position to 0   set currentBall‘s vy to its current vy multiplied by -1
3. Next, check if currentBall‘s y position is greater than or equal to screen height.
4. If it is, set currentBall‘s y position to screen height set currentBall‘s vy to its current vy multiplied by -1
5. Comment your code.

**Shared project link**:
<br/>

#### Task 4

1. Add another if then ... else then block inside on game update.
2. If the currentBall‘s x position is greater than screen width, then destroy the currentBall, increase player one’s score by 1, create a newBall.
3. Otherwise, if the currentBall‘s x position is less than 0, then destroy the currentBall, increase player two’s score by 1, create a newBall.
4. In on start, set players one and two’s score to start at 0.
5. Add comments to your code.

**Shared project link**:
<br/>

#### Task 5

**Shared project link**:
<br/>

1. Create an on overlap event between a Player and a Ball, so that sprite corresponds to the Player.
2. Reverse the Ball‘s vx by setting it to the current vx multiplied by -1.
3. Comment your code.

**Shared project link**:
<br/>

#### Task 5 Challenge

1. When reversing the Ball‘s vx, multiply the current vx by -1.1 instead of -1 on each volley.
2. Add change otherSprite vy by 0 to change the vertical speed of the Ball when it collides with a paddle. Replace the 0 with sprite vy multiplied by 0.33.

**Shared project link**:
<br/>

#### Extension

1. Use JavaScript or Python to create this project.
2. How might you improve game play? Modify your game accordingly.

**Shared project link**:
<br/>

## Reflection/Homework 

 

How does having multiple players at once in a single game allow for new and compelling games?

 

Were there any difficulties in implementing the multiplayer game? Was it easier or harder than a single player game?

 

How might/did you debug your code?
