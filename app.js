// Function to fetch JSON data from the given URL
async function fetchJsonData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Function to display data based on specified criteria
function displayData(data) {
    console.log('Data:', data); // Log the data to the console
    if (data !== null) {
        // Sort data based on descending popularity
        const sortedData = data.sort((a, b) => b.Popularity - a.Popularity);
        console.log('Sorted Data:', sortedData); // Log the sorted data to the console
        // ... rest of the function
    }
}

// URL of the JSON API
const apiUrl = 'https://s3.amazonaws.com/open-to-cors/assignment.json';

// Fetch JSON data from the API and display it
fetchJsonData(apiUrl).then(displayData);
