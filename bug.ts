function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i === 3) {
      return;
    }
  }
}

printNumbers2(5); // This will only print 1,2,3.  The return statement doesn't throw an error but does exit the loop prematurely.

// The bug is that the return statement prematurely exits the loop in printNumbers2, unlike printNumbers where it completes the whole loop. 
//This behavior is subtle and can be easily missed, especially in larger functions with more complex logic.