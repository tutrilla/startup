document.addEventListener("DOMContentLoaded", function () {
    updateRequestTable();
  
    async function updateRequestTable() {
      try {
        // Fetch requests from the server
        const response = await fetch('/api/requests');
        const requests = await response.json();
  
        // Update the table cells with the retrieved counts
        document.getElementById("newRequestsCount").textContent = getNewRequestsCount(requests).toString();
        document.getElementById("totalActiveRequestsCount").textContent = requests.length.toString();
      } catch (error) {
        console.error('Error updating request table:', error);
      }
    }
  
    function getNewRequestsCount(requests) {
      const oneDayAgo = new Date();
      oneDayAgo.setDate(oneDayAgo.getDate() - 1);
  
      return requests.filter(request => new Date(request.dueDate) > oneDayAgo).length;
    }
  });
  