function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = new Error("Failed to fetch data.");
            reject(error); // Reject the Promise with an error
        }, 2000); // Simulate a 2-second delay
    });
}

// Using the Promise
fetchDataWithError()
    .then((result) => {
        console.log(result.message);
    })
    .catch((error) => {
        console.error("Error:", error.message); // This will log: "Error: Failed to fetch data."
    });