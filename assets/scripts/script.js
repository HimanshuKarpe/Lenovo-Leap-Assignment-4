// 🌞 Display Dynamic Greeting based on Time of Day
const hour = new Date().getHours();
let greeting = "Welcome!";
if (hour < 12) greeting = "Good Morning ☀️";
else if (hour < 18) greeting = "Good Afternoon ☕";
else greeting = "Good Evening 🌙";
// Set the greeting message in the header
document.getElementById('greeting').textContent = greeting;

// 🌗 Apply saved theme from Local Storage (Dark or Light Mode)
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');

// 🌗 Theme Toggle Button - Switch between Dark and Light Modes
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  // Save the selected theme in localStorage
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// 📱 Responsive Menu Toggle (Show/Hide)
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('show');
});

// ⏰ Digital Clock - Updates Every Second
function updateClock() {
  const now = new Date();
  document.getElementById('time').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000); // Call updateClock every 1 second
updateClock(); // Initial call to set time immediately

// 📧 Contact Form Validation and Feedback Message
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission behavior

  // Get user inputs and remove extra spaces
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('formMessage').value.trim();
  const status = document.getElementById('formStatus');

  // Check if all fields are filled
  if (name && email && message) {
    status.textContent = "Form submitted successfully!";
    status.style.color = "green";
    this.reset(); // Reset form fields
  } else {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
  }

  // Show status message for 3 seconds
  status.style.display = 'block';
  setTimeout(() => status.style.display = 'none', 3000);
});

// 🧮 Simple Calculator Logic
document.getElementById('calculate').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  let result = 0;

  // Perform calculation based on selected operation
  if (operation === 'add') result = num1 + num2;
  else if (operation === 'subtract') result = num1 - num2;
  else if (operation === 'multiply') result = num1 * num2;
  else if (operation === 'divide') result = num2 !== 0 ? (num1 / num2).toFixed(2) : 'Cannot divide by zero';

  // Display the result
  document.getElementById('result').textContent = `Result: ${result}`;
});

// 🔍 Content Filter/Search Functionality
document.getElementById('searchBox').addEventListener('keyup', function() {
  const filter = this.value.toLowerCase(); // Convert input to lowercase
  document.querySelectorAll('#nameList li').forEach(item => {
    // Show item if it matches the search, else hide it
    item.style.display = item.textContent.toLowerCase().includes(filter) ? '' : 'none';
  });
});

// 📑 Tab Navigation Functionality
function openTab(tabId) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
  // Show selected tab
  document.getElementById(tabId).style.display = 'block';
}

// 🌤️ Weather Widget (Static Sample Text)
document.getElementById('weatherData').textContent = "🌤️ 25°C in Sample City";
