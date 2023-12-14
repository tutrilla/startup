function createRequest() {
    const createRequestBtn = document.getElementById("createRequestBtn");
    const requestForm = document.getElementById("requestForm");

    // Check if the event listener is already attached
    if (!createRequestBtn.hasEventListener) {
        createRequestBtn.addEventListener("click", function (e) {
            e.preventDefault();

            requestForm.style.display = "block";
            createRequestBtn.style.display = "none";
        });

        // Set a flag to indicate that the event listener is attached
        createRequestBtn.hasEventListener = true;
    }

    // Check if the event listener is already attached
    if (!requestForm.hasEventListener) {
        requestForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent form from refreshing

            const request = {
                requesterName: document.getElementById("requesterName").value,
                vendorType: document.getElementById("vendorType").value,
                languageCombo: document.getElementById("languageCombo").value,
                urgency: document.getElementById("urgency").value,
                dueDate: document.getElementById("dueDate").value
            };

            // Check if there are requests in localStorage
            let requests = JSON.parse(localStorage.getItem("requests")) || [];

            // Add the new request to the array
            requests.push(request);

            // Serialize the updated requests array to JSON
            const requestsJSON = JSON.stringify(requests);

            // Store the updated array in localStorage
            localStorage.setItem("requests", requestsJSON);

            // Reset the form
            requestForm.reset();

            // Hide the form
            requestForm.style.display = "none";
            createRequestBtn.style.display = "block";

            alert("Request successfully submitted!");

        });

        // Set a flag to indicate that the event listener is attached
        requestForm.hasEventListener = true;
    }
}

createRequest();
