document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('infoForm');
    const outputDiv = document.getElementById('output');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const hobbies = document.getElementById('hobbies').value;
        const role = document.getElementById('roleSelect').value;

        // Store information in localStorage
        const userInfo = {
            name: name,
            age: age,
            hobbies: hobbies,
            role: role,
        };
        localStorage.setItem(name, JSON.stringify(userInfo));

        // Display user info
        outputDiv.innerHTML = `<p>Information submitted for ${role}: ${name}, Age: ${age}, Hobbies: ${hobbies}</p>`;
        
        // Display all users
        displayAllUsers();
    });

    function displayAllUsers() {
        const allUsersDiv = document.getElementById('allUsers');
        allUsersDiv.innerHTML = ''; // Clear previous content
        
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const user = JSON.parse(localStorage.getItem(key));
            allUsersDiv.innerHTML += `<p>${user.role}: ${user.name}, Age: ${user.age}, Hobbies: ${user.hobbies}</p>`;
        }
    }
});
