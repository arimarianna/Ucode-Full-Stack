function setCounter() {
    count++;
    countArea.innerHTML = `${count} images loaded from ${images.length}`;
    if (count === images.length) {
        countArea.classList.add('counter-full-load');
    }
    setTimeout(() => {
        if (count === images.length) {
            countArea.classList.remove('counter-full-load');
            countArea.classList.add('hide');
        }

    }, 3000);

}
