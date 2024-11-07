document.addEventListener('DOMContentLoaded', () => {
    const experienceItems = document.querySelectorAll('.experience-item');

    experienceItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('More details about this experience');
        });
    });
});
