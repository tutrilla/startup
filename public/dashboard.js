document.addEventListener("DOMContentLoaded", function () {
    updateRequestTable();

    // Function to update the request table
    function updateRequestTable() {
        // Retrieve requests from localStorage
        let requests = JSON.parse(localStorage.getItem("requests")) || [];

        // Calculate the number of new requests and total active requests
        let newRequestsCount = 0;
        let totalActiveRequestsCount = requests.length;

        
        for (const request of requests) {
            // Requests more than one day old are considered to be new
            const requestDate = new Date(request.dueDate); 
            const oneDayAgo = new Date();
            oneDayAgo.setDate(oneDayAgo.getDate() - 1);

            if (requestDate > oneDayAgo) {
                newRequestsCount++;
            }
        }

        // Update the table cells with the calculated counts
        document.getElementById("newRequestsCount").textContent = newRequestsCount.toString();
        document.getElementById("totalActiveRequestsCount").textContent = totalActiveRequestsCount.toString();
    }
});
