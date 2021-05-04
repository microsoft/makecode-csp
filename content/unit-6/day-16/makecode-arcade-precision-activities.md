---
title: 'MakeCode Arcade Precision Activities'
metaTitle: 'MakeCode Arcade Precision Activities'
order: 1
---

The following MakeCode Arcade programs can help you see approximation and overflow errors in action.

## Floating Point and Overflow

[Floating Pt and Overflow](https://arcade.makecode.com/91059-73720-99053-35862)

Click on **Edit Code** to open the program. 

When you run this program, it is dividing 17 by 5 and displaying the result.


1. Replace the 17 with 3.4. What is the calculation now?
2. Perform the same calculation on a calculator. What is the answer?
3. Why do you think they are different?
4. Replace 3.4 with it with 0.00000000001.  What is the calculation now?
5. Now, change the calculation to a multiplication rather than division 

![Select multiplication](select-multiplication.jpg)

Once you change to multiplication change the number to calculate a large number. Keep changing the numbers until it reaches overflow. 

6. Now try using the myint and myfloat variables in your calculation.  Hint - look in the Variables Toolbox drawer 

![myint and myfloat variables](myint-myfloat-variables.jpg)

Is the result an integer or a floating point number? 

7. From the Info Toolbox drawer, pull out a Set Score block and place after the mySprite Say block. From the Text Toolbox drawer, pull out a Parse to Number block and place in the Set Score block.  In the Parse to Number block type "7.5e2".

![set score block](set-score-block.jpg)

What happpens?

## Approximation

[Approximation](https://arcade.makecode.com/72025-07610-61996-61039)

Click on **Edit Code** to open the program.

1. What is the value of x?

2. What is the value of y?

3. According to the algorithm, is the program correct, when it displays "False"?

4. Why or why not? What is going on? Hint: move the mySprite say block

![say x = y block](say-x-y-block.jpg)

out of the source code and replace it with the other disabled mySprite say block on the workspace

![say x block](say-x-y-block.jpg)

Use the drop-down menu to change the variables 
