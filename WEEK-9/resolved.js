// promiseExample.js

// Function that simulates fetching data and returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation (e.g., fetching data)
        setTimeout(() => {
            const success = true; // Change this to false to simulate an error

            if (success) {
                const data = { message: "Data fetched successfully!" };
                resolve(data); // Fulfill the Promise with the data
            } else {
                const error = new Error("Failed to fetch data.");
                reject(error); // Reject the Promise with an error
            }
        }, 2000); // Simulate a 2-second delay
    });
}

// Using the Promise
fetchData()
    .then((result) => {
        console.log(result.message); // This will log: "Data fetched successfully!"
    })
    .catch((error) => {
        console.error("Error:", error.message); // Handle any errors
    });