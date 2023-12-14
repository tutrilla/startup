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
        requestForm.addEventListener("submit", async function (e) {
            e.preventDefault(); // Prevent form from refreshing

            const request = {
                requesterName: document.getElementById("requesterName").value,
                vendorType: document.getElementById("vendorType").value,
                languageCombo: document.getElementById("languageCombo").value,
                urgency: document.getElementById("urgency").value,
                dueDate: document.getElementById("dueDate").value
            };

            // Send the new request data to the server
            try {
                const response = await fetch('/api/requests', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(request),
                });

                if (response.ok) {
                    const responseData = await response.json();
                    // Request successfully submitted to the server
                    alert("Request successfully submitted!");
                } else {
                    console.error(`Failed to submit request to the server. Status: ${response.status}, Response: ${await response.text()}`);
                }
            } catch (error) {
                console.error('Error sending request to the server:', error);
            }

            // Reset the form
            requestForm.reset();

            // Hide the form
            requestForm.style.display = "none";
            createRequestBtn.style.display = "block";
        });

        // Set a flag to indicate that the event listener is attached
        requestForm.hasEventListener = true;
    }
}

createRequest();
