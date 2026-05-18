// Dark/light mode toggle
const toggleBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️ Light';
}
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.textContent = isDark ? '☀️ Light' : '🌙 Dark';
});

// Form validation
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('msg').value.trim();
    if (!name || !email || !msg) {
        feedback.textContent = '❌ All fields required';
        feedback.style.color = 'red';
    } else if (!email.includes('@') || !email.includes('.')) {
        feedback.textContent = '❌ Valid email required';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = '✅ Sent (demo)';
        feedback.style.color = 'green';
        form.reset();
    }
    feedback.style.display = 'block';
    setTimeout(() => feedback.style.display = 'none', 3000);
});