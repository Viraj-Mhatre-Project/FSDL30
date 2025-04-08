// A function that takes a callback
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    // Call the callback function after 2 seconds
    setTimeout(() => {
        callback();
    }, 2000);
}

// A callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Call the greet function with a name and the callback
greet("Alice", sayGoodbye);