const works = document.querySelectorAll('.work');
const descriptionContainer = document.getElementById('work-description');

works.forEach(work => {
    const image = work.querySelector('img');
    const description = image.getAttribute('data-description');

    work.addEventListener('mouseenter', () => {
        descriptionContainer.textContent = description;
    });

    work.addEventListener('mouseleave', () => {
        descriptionContainer.textContent = '';
    });
});
