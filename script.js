// Get the canvas context
const ctx = document.getElementById('priceChart').getContext('2d');

// Sample data for a stock (e.g., APPL)
const data = {
    labels: ['Jun 9', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13'],
    datasets: [{
        label: 'APPL Price ($)',
        data: [140.50, 142.30, 141.80, 143.20, 145.32], // Fake prices
        borderColor: '#00ff88',
        backgroundColor: 'rgba(0, 255, 136, 0.2)',
        tension: 0.1,
        fill: true
    }]
};

// Chart configuration
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                title: { display: true, text: 'Price ($)' }
            }
        }
    }
};

// Create the chart
const priceChart = new Chart(ctx, config);

// Optional: Simulate price update
setInterval(() => {
    data.datasets[0].data.push(Math.random() * 5 + 145);
    data.datasets[0].data.shift();
    priceChart.update();
}, 5000);

// Navigation functionality
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const sectionId = link.getAttribute('data-section');
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none'; // Hide all sections
        });
        document.getElementById(sectionId).style.display = 'block'; // Show selected section
    });
});

// Show Markets section by default
document.getElementById('markets-section').style.display = 'block';

// Trade function
function placeTrade() {
    const asset = document.getElementById('asset').value;
    const quantity = document.getElementById('quantity').value;
    const message = document.getElementById('trade-message');

    if (quantity > 0) {
        message.textContent = `Successfully bought ${quantity} shares of ${asset}!`;
        message.style.color = '#00ff88';
    } else {
        message.textContent = 'Please enter a valid quantity.';
        message.style.color = '#ff4d4d';
    }
}
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
        const toggleButton = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        if (toggleButton && menu) {
            toggleButton.addEventListener('click', function() {
                menu.classList.toggle('active'); // Dynamically adds/removes 'active'
                console.log('Menu toggle clicked, active class:', menu.classList.contains('active'));
            });
        } else {
            console.error('Error: menu-toggle or menu element not found in the DOM');
        }
    });
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors('login-form');

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let isValid = true;

    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    if (!validatePassword(password)) {
        showError('password', 'Password must be at least 8 characters long');
        isValid = false;
    }

    if (isValid) {
        console.log('Login attempt with:', { email, password });
        window.location.href = 'mainpage.html';
    }
});
