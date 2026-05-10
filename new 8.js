// Sidebar Toggle

const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});


// Dark Mode Toggle

const darkBtn = document.getElementById('darkModeBtn');

darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});