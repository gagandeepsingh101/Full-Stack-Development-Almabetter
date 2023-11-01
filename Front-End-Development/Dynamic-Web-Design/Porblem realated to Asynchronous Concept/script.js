// Task 1: Fetch API and Callback Functions

document.getElementById("task1-btn").addEventListener("click", () => {
  let data = fetch("https://jsonplaceholder.typicode.com/todos/1");
  data
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("output").textContent = JSON.stringify(data);
      setTimeout(() => {
        document.getElementById("output").textContent = "";
      }, 2000);
    });
});

// Task 2: Promises and Error Handling
document.getElementById("task2-btn").addEventListener("click", () => {
  let data = fetch("https://jsonplaceholder.typicode.com/todos/2");
  data
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("output").textContent = JSON.stringify(data);
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
    });
});

// Task 3: Chaining Promises and Parallel Asynchronous Operations

const promise1 = fetch("https://jsonplaceholder.typicode.com/todos/3").then(
  (response) => response.json()
);
const promise2 = fetch("https://jsonplaceholder.typicode.com/todos/4").then(
  (response) => response.json()
);

document.getElementById("task3-btn").addEventListener("click", function () {
  Promise.all([promise1, promise2])
    .then((results) => {
      const combinedResult = results.flat();
      document.getElementById("output").innerText =
        JSON.stringify(combinedResult);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

// Task 4: Async/Await and Error Handling

document.getElementById("task4-btn").addEventListener("click", function () {
  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/4"
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      document.getElementById("output").textContent = JSON.stringify(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();
});

  // Throttling and Debouncing
  
  // Throttling
  function throttle(callback, delay) {
    let lastCallTime = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastCallTime >= delay) {
        callback.apply(this, args);
        lastCallTime = now;
      }
    };
  }
  
  // Debouncing
  function debounce(callback, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  }
  
  function onThrottleClick() {
    console.log('Throttled click!');
  }
  
  function onDebounceClick() {
    console.log('Debounced click!');
  }
  
  const throttledClick = throttle(onThrottleClick, 2000);
  const debouncedClick = debounce(onDebounceClick, 1000);
  
  document.getElementById('throttle-btn').addEventListener('click', throttledClick);
  document.getElementById('debounce-btn').addEventListener('click', debouncedClick);

