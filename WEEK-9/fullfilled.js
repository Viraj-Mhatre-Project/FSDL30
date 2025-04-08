// Function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation (e.g., fetching data)
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data); // Fulfill the Promise with the data
        }, 2000); // Simulate a 2-second delay
    });
}

// Using the Promise
fetchData()
    .then((result) => {
        console.log(result.message); // This will log: "Data fetched successfully!"
    })
    .catch((error) => {
        console.error("Error:", error);
    });