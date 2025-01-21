document.querySelectorAll('.rsvp-button').forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = button.textContent === 'Join Us' ? 'Joined' : 'Join Us';
        button.style.backgroundColor = button.textContent === 'Joined' ? '#28a745' : '#007BFF';
    });
});
