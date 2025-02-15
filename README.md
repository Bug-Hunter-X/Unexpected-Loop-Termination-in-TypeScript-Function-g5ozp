# Unexpected Loop Termination in TypeScript

This repository demonstrates a subtle bug in a TypeScript function where a `return` statement inside a `for` loop unexpectedly terminates the loop before completing all iterations.

## Bug Description

The `printNumbers2` function is intended to print numbers from 1 to `n`. However, due to the `return` statement inside the loop, the function terminates prematurely when `i` reaches 3.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's root directory.
3. Compile and run the TypeScript file `bug.ts`.
4. Observe that the output is 1, 2, 3 instead of 1, 2, 3, 4, 5.

## Solution

The solution involves removing the `return` statement from inside the loop if the intention is to complete all iterations.

## Lessons Learned

This example highlights the importance of understanding how control flow statements (like `return`) affect loop behavior in TypeScript.  Carefully review loop conditions and control flow structures to avoid unexpected premature exits.