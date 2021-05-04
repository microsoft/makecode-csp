---
title: 'Student Tasks/Solution'
metaTitle: 'Student Tasks/Solution'
order: 4
---

## Activity

**Task 1: Guessing Game Mod** - [Guessing Game Mod](https://arcade.makecode.com/91205-62387-07860-77808)

**Task 2: Fireballs** - [Fireballs](https://arcade.makecode.com/00508-12832-59383-92511)

## Reflection/Homework

1. How are While loops different from For loops?
    * While loops use a condition (logic expression, boolean value) to determine whether to continue running each iteration of the loop.  Whereas For loops run a specific number of times.

2. Explain why picking up the fireSource allowed the player to keep making fireballs, without any other buttons being pressed.
    * In the On Overlap event for the Player and the FireSource, we added 5 more lives to our Player, and as long as our Lives > 0 (condition in the While loop) we could continue shooting fireballs!

3. **Challenge**: If "IF statements" didn’t exist, could you use While loops to implement the same behavior in blocks? If so, how? 
    * Yes.  Both While loops and Conditional statements evaluate a boolean expression.  The difference is that While loops keep repeating and testing the same condition over and over again, so that's why usually inside the loop you need to change the value of one of the variables in the condition.  You could use a While loop to do a branching function like a conditional statement, you would just need to exit the loop after running it once in the case the condition was true.