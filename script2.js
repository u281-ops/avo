document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.hero-image');
    const contents = document.querySelectorAll('.hero-content');
    const totalImages = images.length;
    const buttons = document.querySelectorAll('.circle-btn'); // Select all circular buttons

    function showImage(index) {
        // Remove active class from all images, contents, and buttons
        images.forEach((img) => img.classList.remove('active'));
        contents.forEach((content) => content.classList.remove('active-content'));
        buttons.forEach((btn) => btn.classList.remove('active'));

        // Add active class to the current image, content, and button
        images[index].classList.add('active');
        contents[index].classList.add('active-content');
        buttons[index].classList.add('active');
    }

    // Automatically change images every 3 seconds
    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }, 3000);

    // Manual click for the dots (circular buttons)
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentImageIndex = index;
            showImage(currentImageIndex);
        });
    });
});
{
    
}