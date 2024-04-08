async function fetchUsers() {
    try {
        const response = await fetch('assets/js/Users.json');
        const usersData = await response.json();
        console.log(usersData);
    } catch (err) {
        console.log('user note difained', err);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    fetchUsers()
});

