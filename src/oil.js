    // Fetch the JSON data from your package.json file
    fetch("./../package.json").then(response => response.json()).then(data => { // Get the version number from the data
        const version = data.version;

        // Get the element where you want to display the version number
        const versionDisplay = document.getElementById("version-display");

        // Update the text of the element with the version number
        // @ts-ignore
        versionDisplay.textContent = `The latest version: ${version}`;
    });