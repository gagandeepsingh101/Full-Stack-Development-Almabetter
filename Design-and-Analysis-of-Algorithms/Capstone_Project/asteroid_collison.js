// Asteroid Collision

// In a distant asteroid belt, there existed a row of asteroids. Each asteroid had its unique characteristics: a size represented by an integer value, a direction indicated by the sign of the value, and the ability to collide with one another based on their characteristics. To simulate these collisions, we can use the asteroidCollision function with a functional argument arr. The asteroids traveled at a constant speed, making their way through the vast expanse of space.
// The asteroidCollision function takes an array of integers, arr representing the sizes and directions of the asteroids. It analyzes the paths of the asteroids, identifying collision points and handling the outcomes of these collisions according to the specified rules. If a smaller asteroid encounters a larger one, the smaller asteroid succumbs to the more giant asteroid's force and explodes. When two asteroids of the same size collide head-on, both asteroids disintegrate.
// It's crucial to note that asteroids moving in the same direction never meet, ensuring they peacefully travel side by side without disturbances.
// The goal of using the asteroidCollision function is to determine the state of the asteroids after all collisions have occurred. By considering the sizes and directions of the asteroids and simulating their interactions, we can unveil the aftermath of these celestial encounters.

// Example 1:
// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

// Example 2:
// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.

// Example 3:
// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

// Constraints:
// 2 <= asteroids.length <= 10^4
// -1000 <= asteroids[i] <= 1000
// asteroids[i] != 0

// Hints:
// Run through input and compared the collision conditions for n and n-1. Stored n, if no collision, in the new array,  walk through the input.
// Compare the stored left side (essentially n-1) in the new array with the right side (essentially n) at a progressively incrementing position in the input array.

// Worst Case

function worstasteroidCollision(arr) {
  // Write your code inside this function only.
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    const last = res[res.length - 1];
    const cur = arr[i];

    if (!res.length || last < 0 || cur > 0) {
      res.push(cur);
    } else if (-cur == last) {
      res.pop();
    } else if (-cur > last) {
      res.pop();
      i--;
    }
  }
  return res;
}

// Best Case

function bestasteroidCollision(arr) {
  // Write your code inside this function only.
  let stack = [];
  for (const asteroid of arr) {
    stack.push(asteroid);
  }
  return stack;
}

let asteroid = [5, 10, -5];
