function createRequest() {
    const createRequestBtn = document.getElementById("createRequestBtn");
    const requestForm = document.getElementById("requestForm");

    createRequestBtn.addEventListener("click", function (e) {
        e.preventDefault();

        requestForm.style.display = "block";
        createRequestBtn.style.display = "none";
    });
    
    /*
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
        requestForm.style.display = "block";
        createRequestBtn.style.display = "none";
    }); */
}

createRequest();