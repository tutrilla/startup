// api.js
async function fetchRequests() {
    try {
      const response = await fetch('/api/requests'); // Assuming you have a backend endpoint
      const requestData = await response.json();
      return requestData;
    } catch (error) {
      console.error('Error fetching requests:', error);
      return [];
    }
  }
  
  export { fetchRequests };
  