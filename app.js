document.addEventListener('DOMContentLoaded', function () {
    var experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(function (item) {
        item.addEventListener('click', function () {
            alert('More details about this experience');
        });
    });
});
