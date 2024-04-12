function addAlert() {
    alert('Feature is not yet available.');
}

function swapImage() {
    const imageContainer = document.querySelector('img');
    if (window.innerWidth > 576) {
        imageContainer.setAttribute('src', './images/image-product-desktop.jpg');
    }
    else {
        imageContainer.setAttribute('src', './images/image-product-mobile.jpg');
    }
}

window.addEventListener('resize', () => {
    swapImage();
})

const screenWidth = screen.width;
// Example: Checking if the screen width is greater than 576 pixels
if (screenWidth > 576) {
    swapImage();
} else {

}