---
title: 'Base 62 and URL Shorteners'
metaTitle: 'Base 62 and URL Shorteners'
order: 3
---

## Base62

From [Desmos](https://teacher.desmos.com/activitybuilder/custom/5ca3977f77b19b0afb470ed9#preview/14fee18f-35d1-4277-babd-351254c1ff38)

Did you know that there is such a thing as Base 62?!? That's right.  

[Video - Binary Numbers and Base Systems as Fast as Possible](https://youtu.be/LpuPe81bc2w)

Many URL shorteners use a Base 62 algorithm. Base 62 consists of 62 characters: 0-9, a-z lower case, plus A-Z upper case.

Just like binary, decimal, hexadecimal, each place value represents a power of 62. 

62^0 = 1 

62^1 = 62 

62^2= 3844 

6^23 = 238,328 

Conversions work the same way: 

1. To convert a number < 62 to base 62, just look at the table.  
2. To convert a number > 61 to base 62:
    1. Create a table with columns of 1, 62, 62^2, 62^3, ...
    2. Find the largest power of 62 that divides into the given number, then convert.

| decimal | base-62 | decimal | base-62 |
|---|---|---|---|
| 0 | 0 | 31 | v |
| 1 | 1 | 32 | w |
| 2 | 2 | 33 | x |
| 3 | 3 | 34 | y |
| 4 | 4 | 35 | z |
| 5 | 5 | 36 | A |
| 6 | 6 | 37 | B |
| 7 | 7 | 38 | C |
| 8 | 8 | 39 | D |
| 9 | 9 | 40 | E |
| 10 | a | 41 | F |
| 11 | b | 42 | G |
| 12 | c | 43 | H |
| 13 | d | 44 | I |
| 14 | e | 45 | J |
| 15 | f | 46 | K |
| 16 | g | 47 | L |
| 17 | h | 48 | M |
| 18 | i | 49 | N |
| 19 | j | 50 | O |
| 20 | k | 51 | P |
| 21 | l | 52 | Q |
| 22 | m | 53 | R |
| 23 | n | 54 | S |
| 24 | o | 55 | T |
| 25 | p | 56 | U |
| 26 | q | 57 | V |

What is 100 in Base 62? 1C  

* 1 in the 62 place value
* C (upper case)
* 62 + 38 = 100

Convert 1000 to Base 62--> g8

g in the 62 place value =16, 16 x 62=992 + 8 in the 1s place valueConvert oc0 to decimal 

(lower case o, lower case c, zero)-->93000 

 

### CHALLENGE: URL Shortener

A website has a URL that contains the decimal number **123456789089898**. Convert this decimal number to base-62 and add the base-62 at the end of the bit.ly/_____________ in your web browser.

Solution: 

**123456789089898** is represented as : **z3wBXxG2**.  

Students will visit [Binary Challenge](http://bit.ly/z3wBXxG2)