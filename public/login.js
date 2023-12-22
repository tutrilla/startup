(async () => {
    const userName = localStorage.getItem('userName');
    if (userName) {
    setDisplay('loginWithAuth', 'block');
    setDisplay('loginWithoutAuth', 'none');
    } else {
    setDisplay('loginWithAuth', 'none');
    setDisplay('loginWithoutAuth', 'block');
    }
})();
    
async function loginUser() {
    loginOrCreate(`/api/auth/login`);
}
  
async function createUser() {
    loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {

    const userName = document.querySelector('#username')?.value;
    const password = document.querySelector('#password')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  
    if (response.ok) {
      localStorage.setItem('userName', userName);
      window.location.href = 'dashboard.html';
    } else {
      const body = await response.json();
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
}

function setDisplay(controlId, display) {
    const loginControlEl = document.querySelector(`#${controlId}`);
    if (loginControlEl) {
      loginControlEl.style.display = display;
    }
}

function goToDashBoard() {
    window.location.href = 'dashboard.html';
}

function logout() {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
}

async function getUser(username) {
    // See if we have a user with the given username
    const response = await fetch(`/api/user/${username}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }