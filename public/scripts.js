// List of greetings (if still needed)
const greetings = [
    "Henlo", "Hej", "Hey", "Hi", "Wazzaaaa",
    "Hola", "Bonjour", "Ciao", "Aloha", "Greetings",
    "Salutations", "Howdy", "Hiya", "Hola", "What's up",
    "Yo", "Holla", "Hi there", "Hello", "Welcome"
];

function getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
}

function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = getRandomGreeting();
}

window.onload = setGreeting;

// Toggle sidebar visibility
document.getElementById('sidebar-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('visible'); // Use 'visible' class to show/hide
});
